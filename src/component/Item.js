export default function Item({ item, deleteItems, toggleItem }) {
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
