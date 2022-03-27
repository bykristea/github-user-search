import { useState, useEffect } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import axios from "axios";

export default function Search() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [htmlUrl, setHtmlUrl] = useState("");

  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url,
    html_url,
  }) => {
    setName(name);
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setHtmlUrl(html_url);
  };



  const token = "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";

  function getUser() {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`,{ headers:{Authorization:  token, Accept: 'application/vnd.github.v3+json'}, })
    .then(response => response.json())
		.then(data => setData(data))
		.catch(error => console.log(error));};

 
    


  return (
    <>
      <div className=" flex justify-center px-2 py-6 lg:ml-6 lg:justify-center">
        <div className="max-w-lg w-full lg:max-w-xs">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <button
              className="button absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-auto"
              onClick={getUser}
            >
              <SearchIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </button>
            <input
              id="search"
              name="search"
              className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
              placeholder="Search Username"
              type="search"
              onChange={e => setUsername(e.target.value)}
              
            />
          </div>
        </div>
      </div>

        
      <div class="rounded-3xl overflow-hidden shadow-xl max-w-xs m-10  bg-gray-400">
        <img
          src="https://pngimg.com/uploads/github/github_PNG15.png"
          class="w-full"
          alt=""
        />
        <div class="flex justify-center -mt-8">
          <a href={htmlUrl}>
            <img
              src={avatar}
              class="rounded-full border-solid border-white border-2 object-scale-down w-40 mt-3"
              alt=""
            />
          </a>
        </div>
        <div class="text-center px-3 pb-6 pt-2">
          <h3 class="text-white text-sm bold font-sans">{name}</h3>
          <p class="mt-2 font-sans font-light text-white">{username}</p>
        </div>
        <div class="flex justify-center pb-3 text-white">
          <div class="text-center mr-3 border-r pr-3">
            <h2>{followers}</h2>
            <a href={htmlUrl}>Followers</a>
          </div>
          <div class="text-center mr-3 border-r pr-3">
            <h2>{repos}</h2>
            <span>Repos</span>
          </div>
          <div class="text-center">
            <h2>{following}</h2>
            <span>Following</span>
          </div>
        </div>
      </div>
    </>
  );
}
