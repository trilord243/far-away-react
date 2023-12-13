/* eslint-disable react/prop-types */


export const Item = ({ description, quantity, packed, handleDelete, items, id, handepacked }) => {

    return (
        <li>
            <input type="checkbox" value={packed} onChange={() => handepacked(id, items)} />
            <span style={packed ? { textDecoration: "line-through" } : {}}  >

                {description} {quantity}

            </span>
            <button onClick={() => handleDelete(id, items)}>❌</button>


        </li>
    )
}
