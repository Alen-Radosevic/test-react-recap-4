import { useState } from "react";
import ColorCard from "./ColorCard";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import ColorSquare from "./ColorSquare";
import "./ThemeCard.css";

function ThemeCard({ theme, onDelete }) {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li>
      <button className="theme__toggle__button" onClick={toggleDetails}>
        <h2>{theme.name}</h2>
        {showDetails ? <IconChevronDown /> : <IconChevronUp />}
      </button>
      {showDetails ? (
        <>
          <button
            className="deleteButton"
            onClick={() => onDelete(theme.id)}
            type="button"
          >
            Delete Theme
          </button>
          <ul>
            {theme.colors.map((color) => (
              <ColorCard color={color} key={color.value} />
            ))}
          </ul>
        </>
      ) : (
        <ul className="flex">
          {theme.colors.map((color) => (
            <ColorSquare colorValue={color.value} key={color.value} />
          ))}
        </ul>
      )}
    </li>
  );
}
export default ThemeCard;
