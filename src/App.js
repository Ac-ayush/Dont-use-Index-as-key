import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [items, setItems] = React.useState([
    { id: 1, label: "Apple" },
    { id: 2, label: "Banana" },
    { id: 3, label: "Cherry" },
  ]);

  return (
    <>
      <button onClick={() => setItems([{ id: 4, label: "Orange" }, ...items])}>
        Add at top
      </button>

      {items.map((item, index) => (
        // <Checkbox key={item.id} label={item.label} />
        <Checkbox key={index} label={item.label} />
      ))}
    </>
  );
}

function Checkbox({ label }) {
  const [checked, setChecked] = React.useState(false);

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {label}
    </label>
  );
}
