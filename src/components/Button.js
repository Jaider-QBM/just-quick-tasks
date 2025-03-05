import React from 'react';
import '../styles/Button.css'
import { ItemContext } from '../utils/ItemContext';

export function Button() {
  const { setOpenModal} = React.useContext(ItemContext)

  return (
    <button 
      className="CreateTodoButton" 
      onClick={()=>{
        setOpenModal((state => !state))
      }}
    >
      +
    </button>
  );
}

