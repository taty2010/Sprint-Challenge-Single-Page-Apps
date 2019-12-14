import React from "react";
import Header from "./components/Header.js";
import {Route, Link} from "react-router-dom"
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage.js";
import styled from 'styled-components'


export default function App() {

  const Nav = styled.p`
    color: green;
    font-weight: bold;
    text-decoration: none;

  `;
  return (
    <main>
      <nav>
      <Header />
      <div>
      <Nav><Link to="/">Home</Link></Nav>
        <Link to="/character-list"><Nav>Characters</Nav></Link>
      </div>
      </nav>
        <Route exact path="/" component={WelcomePage}/>
        <Route exact path="/character-list" component={CharacterList}/>
    </main>
  );
}
