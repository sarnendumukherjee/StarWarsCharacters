import React from "react";
import "./App.css";
import CharacterList from "./pages/CharacterList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars Characters</h1>
      </header>
      <CharacterList />
    </div>
  );
}

export default App;
