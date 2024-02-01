import React, { useState } from 'react'
import "./App.css"
import WishInput from '../WishInput/WishInput'
import WishList from '../WishList/WishList'

const initialWishes = [
    {
        id: 0,
        text: "Travel to the moon",
        completed: false
    },
    {
        id: 1,
        text: "Que Isa deje de cantar",
        completed: true
    },
    {
        id: 2,
        text: "Patata",
        completed: false
    }

]

export default function App() {
    const [wishes, setWishes] = useState(initialWishes)

    const onNewWish = (newWish) => {
        setWishes((currentWishes) => [...currentWishes, newWish])
    }



    return (
        <div className="app">
            <h1>My Wishlist</h1>
            <WishInput onNewWish={onNewWish} />
            <WishList wishes={wishes} setWishes={setWishes} />
            <button type="button" className="wish-clear" onClick={() => setWishes(wishes.filter((wish) => !wish.completed))}> Guardar Wishes</button>
        </div>
    );
}