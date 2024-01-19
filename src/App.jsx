import React from 'react'

const wishes = [
    {
        id: 0,
        text: "Travel to the moon",
        completed: null
    },
    {
        id: 1,
        text: "Que Isa deje de cantar",
        completed: null
    },
    {
        id: 2,
        text: "Patata",
        completed: null
    }

]

export default function App() {
    return (
        <div>
            <h1>Mi Wishlist</h1>
            <fieldset>
                <legend>New Wish:</legend>
                <input type="text" placeholder='New wish' />
            </fieldset>
            <ul>
                {wishes.map(wish => (
                    <li key={wish.id}>
                        <input type="checkbox" checked={wish.completed} id={wish.id} />
                        <label htmlFor={wish.id}>{wish.text}</label>
                    </li>
                ))}
            </ul>

        </div>
    )
}
