import React from "react";
import '../styles/FormItem.css'
import { ItemContext } from "../utils/ItemContext";
import { FaXmark } from "react-icons/fa6";

export function FormItem() {
    const { setOpenModal, addItem } = React.useContext(ItemContext)
    const [newItemValue, setNewItemValue] = React.useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        addItem(newItemValue)
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false)
    }
    const onChange = (e) => {
        setNewItemValue(e.target.value)
    }


    return (
        <form className="form__item" onSubmit={onSubmit}>
            <div className="form__header">
                <span className="form__title">Nueva Tarea</span>
                <button className="form__button button--icon" type="button" onClick={onCancel}>
                    <FaXmark/>
                </button>
            </div>
            <div className="form__body">
                <div className="form__input">
                    <label className="input__label">Titulo</label>
                    <textarea 
                        className="input__field input__field--textarea"
                        value={newItemValue}
                        onChange={onChange}
                        required
                    ></textarea>
                    <p className="input__description">Crea un título que refleje claramente la tarea a realizar</p>
                </div>
            </div>
            <div className="form__footer">
                <button className="form__button button--primary" type="submit">Añadir</button>
            </div>
        </form>
    )
}