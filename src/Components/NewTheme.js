import "./NewTheme.css";
import { v4 as uuid } from "uuid";

const Example_Theme = {
  name: "",
  colors: [
    { role: "primary", value: "#6200ee" },
    { role: "secondary", value: "#03dac6" },
    { role: "surface", value: "#ffffff" },
    { role: "surface-on", value: "#000000" },
  ],
};

function NewTheme({ onSubmit }) {
  const initialData = Example_Theme;
  const randomId = uuid();

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const newTheme = {
      id: randomId,
      name: data.name,
      colors: [
        {
          role: "primary",
          value: data.primary,
        },
        {
          role: "secondary",
          value: data.secondary,
        },
        {
          role: "surface",
          value: data.surface,
        },
        {
          role: "surface-on",
          value: data["surface-on"],
        },
      ],
    };

    onSubmit(newTheme);
  }
  return (
    <form className="theme-form" onSubmit={handleSubmit}>
      <h2 className="theme-form__title">Add new Theme</h2>
      <input
        className="theme-form__name-input"
        type="text"
        required
        name="name"
        aria-label="theme title"
        placeholder="Theme Name"
      />
      <fieldset className="theme-form__color-inputs">
        {initialData.colors.map((color) => (
          <input
            className="theme-form__color-input"
            type="color"
            name={color.role}
            defaultValue={color.value}
            key={color.value}
          />
        ))}
      </fieldset>
      <button type="submit" className="theme-form__submit-button">
        Add Theme
      </button>
    </form>
  );
}

export default NewTheme;
