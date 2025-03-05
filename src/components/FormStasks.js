import React from "react";
import '../styles/FormStacks.css'
import { ItemContext } from "../utils/ItemContext";

export function FormStasks() {
    const { addItem } = React.useContext(ItemContext)
    const [newStackValue, setNewStackValue] = React.useState('')

    const onSubmits = (e) => {
        e.preventDefault()
        addItem(newStackValue)
        setNewStackValue('')
    }

    const onChanges = (e) => {
        setNewStackValue(e.target.value)
    }

    return (
        <div className="content-form">
            <header>
                <h1 className="title-header">
                    Organiza tu día: Crea una tarea para completar hoy
                </h1>
                <p className="subtitle-header">
                    Establece un objetivo claro para aprovechar al máximo tu jornada.
                </p>
            </header>

            <form onSubmit={onSubmits}>
                <div className="form-main">
                    <div className="form-input">
                        <label className="input-label">Titulo</label>
                        <textarea
                            className="input-field input-field--textarea"
                            value={newStackValue}
                            onChange={onChanges}
                            required
                        ></textarea>
                        <p className="input-description">Crea un título que refleje claramente la tarea a realizar</p>
                    </div>
                </div>
                <div className="form-footer">
                    <button className="form-button button--primary" type="submit">Añadir</button>
                </div>
            </form>
        </div>
    )
}