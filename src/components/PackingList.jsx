/* eslint-disable react/prop-types */
import { useState } from "react";
import { Item } from "./Item";

export const PackingList = ({ items, handleDelete, handepacked, handleClear }) => {
    const [sortBy, SetsortBy] = useState("input");
    let sortedItems;
    if (sortBy === "input") sortedItems = items;
    if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

    return (
        <>
            <div className='list'>
                <ul style={{ overflow: "hidden" }}>
                    {sortedItems.map((item) => (
                        <Item
                            items={items}
                            id={item.id}
                            key={item.id}
                            description={item.description}
                            quantity={item.quantity}
                            packed={item.packed}
                            handleDelete={handleDelete}
                            handepacked={handepacked}
                        />
                    ))}
                </ul>
                <div className="actions">
                    <select value={sortBy} onChange={e => SetsortBy(e.target.value)} name="" id="">
                        <option value="input">Sort by input order</option>
                        <option value="description">Sort by description</option>
                        <option value="packed">Sort by packed status</option>
                    </select>
                    <button onClick={handleClear} >Clear list</button>
                </div>
            </div>
        </>
    );
};
