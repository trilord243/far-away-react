/* eslint-disable react/prop-types */
import { Item } from "./Item";



export const PackingList = ({ items, handleDelete, handepacked }) => {
    return (

        <div className='list'  >



            <ul style={{ overflow: "hidden" }} >

                {items.map((item) => (<Item items={items} id={item.id} key={item.id} description={item.description} quantity={item.quantity} packed={item.packed} handleDelete={handleDelete} handepacked={handepacked} />))}


            </ul>
        </div>
    )
}
