import { useState } from "react";
import "./App.css";

import NewTheme from "./Components/NewTheme.js";
import ThemeCard from "./Components/ThemeCard.js";
import { themes as initialThemes } from "./db.js";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [themes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });

  const [allThemes, setAllThemes] = useState(themes);
  function handleNewTheme(newTheme) {
    setAllThemes([newTheme, ...allThemes]);
  }

  function handleDeleteTheme(id) {
    const modifiedThemes = allThemes.filter((theme) => theme.id !== id);
    setAllThemes(modifiedThemes);
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
            <ThemeCard
              theme={theme}
              key={theme.id}
              onDelete={handleDeleteTheme}
            />
          ))}
        </ul>
      </main>
    </>
  );
}
export default App;
