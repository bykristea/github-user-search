const navigation = [{ name: "Github User Search" }];

export default function Header() {

  return (
    
    <header className="bg-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between ">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">User Search</span>
              <img
                className="h-10 w-auto"
                src="https://png2.cleanpng.com/sh/dbef56602e0e47691e729e8fe517b6ae/L0KzQYm3WMA4N6ttiZH0aYP2gLBuTfdqfJl6ep95YXfog37zjBdwNaNqiNH8aYTygsq0hv9zc15sgeZxdXKwfLFuj70yNZ5mf9d3dIn2PYbpVsllbWg2eqc6Mka4Pom8WMYxP2c7Sac8M0a5RImBUcc1OWgziNDw/kisspng-github-pages-logo-repository-fork-github-logo-1-magentys-5b69de71b51265.8586076615336648817417.png"
                alt=""
              />
            </a>
          </div>

          <div className="py-4 flex flex-wrap justify-center space-x-6 ">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                {link.name}
              </a>
            ))}
          </div>
         
        </div>
     
      </nav>
    </header>
  );
}
