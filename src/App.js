import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Phone", quantity: 1, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList items={items} deleteItems={handleDeleteItems} />
      <Stats />
    </div>
  );
}
const Logo = () => {
  return <h1>🌴Far Away💼</h1>;
};
const Form = ({ handleAddItems }) => {
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
    console.log(newItem);

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
};
const PackingList = ({ items, deleteItems }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} deleteItems={deleteItems} key={item.id} />
        ))}
      </ul>
    </div>
  );
};
function Item({ item, deleteItems }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => {}} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.Quantity} {item.description}
      </span>
      <button onClick={() => deleteItems(item.id)}>❌</button>
    </li>
  );
}
const Stats = () => {
  return (
    <footer className="stats ">
      <em>💼 you have X items on your list, and you already packed X(%)</em>
    </footer>
  );
};
