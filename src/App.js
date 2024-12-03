import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Phone", quantity: 1, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  /////////////FOLLOWING THE ONE-WAY DATAFLOW RULE OF REACT//////////////

  //////DERIVED STATE////////////
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        deleteItems={handleDeleteItems}
        toggleItem={handleToggleItem}
      />
      <Stats items={items} />
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
const PackingList = ({ items, deleteItems, toggleItem }) => {
  const [sortby, setsortby] = useState("input");
  /////////USIG DRIVED STATE////////SORTING FUNCTIONALITIES/////////
  let sortedItems;
  if (sortby === "input") sortedItems = items;
  if (sortby === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortby === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            deleteItems={deleteItems}
            toggleItem={toggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortby} onChange={(e) => setsortby(e.target.value)}>
          <option value="input"> sort by input</option>
          <option value="description"> sort by description</option>
          <option value="packed"> sort by packed status</option>
        </select>
      </div>
    </div>
  );
};
function Item({ item, deleteItems, toggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => toggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.Quantity} {item.description}
      </span>
      <button onClick={() => deleteItems(item.id)}>❌</button>
    </li>
  );
}
const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your list🚀</em>
      </p>
    );

  const numItems = items.length;
  const numpacked = items.filter((item) => item.packed).length;

  const percentage = Math.round((numpacked / numItems) * 100);
  return (
    <footer className="stats ">
      <em>
        {percentage === 100
          ? " You got everything ready to go ✈"
          : ` 💼 you have ${numItems} items on your list, and you already packed
        ${numpacked} (${percentage}%)`}
      </em>
    </footer>
  );
};
