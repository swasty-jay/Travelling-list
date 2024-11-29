const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Phone", quantity: 1, packed: true },
];

export default function app() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackinfList />
      <Stats />
    </div>
  );
}
const Logo = () => {
  return <h1>🌴Far Away💼</h1>;
};
const Form = () => {
  return (
    <form className="add-form">
      <h3>what do you need for your😍 trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="item..." />
      <button>Add</button>
    </form>
  );
};
const PackinfList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
};
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
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
