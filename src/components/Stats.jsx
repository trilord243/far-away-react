/* eslint-disable react/prop-types */

export const Stats = ({ items }) => {
    const numberItems = items.length
    const packedItems = items.filter(item => item.packed === true)
    const porcentage = Math.round((packedItems.length / numberItems) * 100)
    const isPorcetageFull = porcentage === 100
    return (
        <footer className="stats" >

            {!isPorcetageFull ? <em>


                💼You have  {numberItems} on your list , and you already packed {porcentage}%
            </em> : <em>🎉You are ready for your trip</em>}



        </footer>
    )
}
