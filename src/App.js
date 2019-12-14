import React from "react";
import Header from "./components/Header.js";
import {Route, Link} from "react-router-dom"
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage.js";


export default function App() {
  return (
    <main>
      <nav>
      <Header />
      <div>
        <Link to="/">Home</Link>
        <Link to="/character-list">Characters</Link>
      </div>
      </nav>
      <WelcomePage />
      <CharacterList />
    </main>
  );
}
