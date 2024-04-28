import { useState } from "react";
import "./App.css";
import NewTheme from "./Components/NewTheme.js";
import ThemeCard from "./Components/ThemeCard.js";
import { themes } from "./db.js";

function App() {
  const [allThemes, setAllThemes] = useState(themes);
  function handleNewTheme(newTheme) {
    setAllThemes([newTheme, ...allThemes]);
  }
  return (
    <>
      <header className="header">
        <h1>Theme Creator</h1>
      </header>
      <main className="main-container">
        <NewTheme onSubmit={handleNewTheme} />

        <ul>
          {allThemes.map((theme) => (
            <ThemeCard theme={theme} key={theme.id} />
          ))}
        </ul>
      </main>
    </>
  );
}
export default App;
