import "./ColorCard.css";

export default function ColorCard({ color }) {
  return (
    <li className="color-card">
      <div className="section-left">
        <h3>{color.role}</h3>
        <p>{color.value}</p>
      </div>
      <div
        className="section-right"
        style={{ backgroundColor: color.value }}
      ></div>
    </li>
  );
}
