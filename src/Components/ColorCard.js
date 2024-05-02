import "./ColorCard.css";
import { useEffect, useState } from "react";

export default function ColorCard({ color }) {
  const [colorName, setColorName] = useState("");

  useEffect(() => {
    async function getColorName() {
      const cleanHexValue = color.value.replace("#", "");

      const response = await fetch(
        `https://www.thecolorapi.com/id?hex=${cleanHexValue}`
      );
      const data = await response.json();
      setColorName(data.name.value);
    }

    getColorName();
  }, [color.value]);
  return (
    <li className="color-card">
      <div className="section-left">
        <h3>{color.role}</h3>
        <span>{colorName}</span>
        <p>{color.value}</p>
      </div>
      <div
        className="section-right"
        style={{ backgroundColor: color.value }}
      ></div>
    </li>
  );
}
