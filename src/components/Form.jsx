/* eslint-disable react/prop-types */
import { useState } from "react"


export const Form = ({ onAddItems }) => {
    const [description, setDescription] = useState("")
    const [trip, setTrip] = useState(1)




    const handleSubmit = (e) => {
        e.preventDefault()

        if (!description) return
        const newItem = { description, trip, packed: false, id: Date.now() }
        onAddItems(newItem)
        setDescription("")
        setTrip(1)
    }



    return (
        <form onSubmit={handleSubmit} className='add-form' >

            <h3>What do you need for your 😍 trip?</h3>

            <select name="" id="" value={trip} onChange={e => setTrip(Number(e.target.value))}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => <option value={number} key={number} >{number}</option>)}

            </select>

            <input type="text " placeholder="Item.." value={description} onChange={e => setDescription(e.target.value)} />
            <button>Add</button>


        </form>
    )
}
