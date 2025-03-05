import React  from 'react';
import '../styles/Search.css'
import { ItemContext } from '../utils/ItemContext'
import { FaMagnifyingGlass } from "react-icons/fa6";

export function Search() {
    const {serchValue, setSerchValue} = React.useContext(ItemContext)

    return(
        <div className="group">
            <FaMagnifyingGlass className='icon-serch'/>
            <input 
                className="input" 
                type="search" 
                placeholder="Buscar tarea..." 
                value={serchValue}
                onChange={(event)=>{
                    setSerchValue(event.target.value)
                }}
            />
        </div>

    )
}