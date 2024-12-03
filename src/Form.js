import { useState } from "react";

export default function Form({ handleAddItems }) {
  const [description, setDescription] = useState("");
  const [Quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      description,
      Quantity,
      packed: false,
      id: Date.now(),
    };

    handleAddItems(newItem);
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your😍 trip?</h3>
      <select
        value={Quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />{" "}
      {/* this is a controlled component */}
      <button>Add</button>
    </form>
  );
}
