import React from 'react'
import '../styles/Title.css'
import { ItemContext } from '../utils/ItemContext'

export function Title() {
    const { completedItem, totalItem } = React.useContext( ItemContext )
    return (
        <>
            {totalItem === 0 && <h1 className='title-context'>¡ No has creado tus tareas !</h1>}
            {totalItem > 0 && completedItem === totalItem && <h1 className='title-context'>¡ Felicitaciones, ya terminaste las tareas !</h1>}
            {totalItem > 0 && completedItem !== totalItem && (
                <h1 className='title-context'>Has completado <span>{completedItem}</span> de <span>{totalItem}</span> tareas</h1>
            )}
        </>
    )
}