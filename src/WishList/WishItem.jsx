import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export default function WishItem({ wish, onCompletedChange }) {
    const [age, setAge] = useState(0);

    useEffect(() => {
        let ageInterval
        if (wish.completed) {
            //si el deseo es completado se deja de contar y se limpia el intervalo
            setAge(0)
            clearInterval(ageInterval)
        } else {
            //si el deseo no está completado se crea un intervalo que se incrementa en 1 la edad del deseo cada segundo
            ageInterval = setInterval(() => { setAge((currentAge) => currentAge + 1) }, 1000) // el 1000 esta en milisegundos
        }
        //la funcion que devuelve return se ejecuta solo cuando se desmonta el componente
        return () => clearInterval(ageInterval)
    }, [wish.completed])

    return (
        <li key={wish.id} className={`wish-list__item ${wish.completed ? 'wish-list__item--done' : ''} ${age >= 5 && age < 10 ? 'wish-list__item--warn' : ''} ${age >= 10 ? 'wish-list__item--danger' : ''}`}>
            <input type="checkbox" checked={wish.completed} id={wish.id} onChange={(e) => { onCompletedChange(e.target.checked) }} />
            <label htmlFor={wish.id}>{wish.text}</label>
        </li>
    )
}

WishItem.propTypes = {
    wish: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        completed: PropTypes.bool
    }).isRequired,
    onCompletedChange: PropTypes.func.isRequired,
}
