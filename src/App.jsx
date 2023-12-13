import { useState } from "react"
import { Form } from "./components/Form"
import { Logo } from "./components/Logo"
import { PackingList } from "./components/PackingList"
import { Stats } from "./components/Stats"

const App = () => {
  const [items, setItems] = useState([])

  const handleAdd = (item) => {
    setItems(items => [...items, item])

  }

  const handleDelete = (id, items) => {
    console.log(items)
    const newItems = items.filter(item => item.id !== id)
    setItems(newItems)

  }
  const handleClear = () => {
    setItems([])
  }

  const handepacked = (id, items) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, packed: !item.packed }
      }
      return item
    })
    setItems(newItems)
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAdd} />
      <PackingList items={items} handleDelete={handleDelete} handepacked={handepacked} handleClear={handleClear} />
      <Stats items={items} />


    </div>
  )
}

export default App