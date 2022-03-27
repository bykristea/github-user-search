import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import Header from "./Components/header";
import Search from "./Components/search";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Search />
    </div>
  );
}

export default App;
