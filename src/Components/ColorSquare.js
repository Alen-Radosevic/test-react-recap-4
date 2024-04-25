import "./ColorSquare.css";

function ColorSquare({ colorValue }) {
  return (
    <div className="squareProp" style={{ backgroundColor: colorValue }}></div>
  );
}

export default ColorSquare;
