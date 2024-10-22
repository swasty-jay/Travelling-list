const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Forms />
      <ParkingList />
      <Starts />
    </div>
  );
}

function Logo() {
  return <h1>🏝 Far Away 💼</h1>;
}

function Forms() {
  return (
    <div className="add-form">
      <h3>what do you need for your 😍 trip?</h3>
    </div>
  );
}

function ParkingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return <li>{item.description}</li>;
}

function Starts() {
  return (
    <footer className="stats">
      {" "}
      👜you have X items on your list and you already parked X(X%)
    </footer>
  );
}
