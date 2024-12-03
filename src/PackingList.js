import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  deleteItems,
  toggleItem,
  onClearList,
}) {
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
        <button onClick={onClearList}>clear list</button>
      </div>
    </div>
  );
}
