import React from "react"
import { useLocalStorage } from '../hooks/useLocalStorage'

const ItemContext = React.createContext()

function ItemProvider({ children }) {
    const { item: todos, saveItem, loading, error } = useLocalStorage('ListItem', []);
    const [serchValue, setSerchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedItem = todos.filter(t => !!t.completed).length;
    const totalItem = todos.length

    const serchItem = todos.filter(
        (t) => {
            const itemText = t.text.toLowerCase()
            const serchText = serchValue.toLocaleLowerCase()
            return itemText.includes(serchText)
        }
    )

    const addItem = (text) => {
        const exists = todos.some(todo => todo.text === text);

        if (exists) {
            alert('Este ítem ya existe.');
            return;
        }

        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        });

        saveItem(newTodos);
    }

    const completeItem = (text) => {
        const newTodos = [...todos];
        const itemIndex = newTodos.findIndex(
            (t) => t.text === text
        )
        newTodos[itemIndex].completed = !newTodos[itemIndex].completed;
        saveItem(newTodos);
    }

    const deleteItem = (text) => {
        const newTodos = [...todos];
        const itemIndex = newTodos.findIndex(
            (t) => t.text === text
        )
        newTodos.splice(itemIndex, 1);
        saveItem(newTodos);
    }

    return (
        <ItemContext.Provider value={{ completedItem, totalItem, serchValue, setSerchValue, serchItem, completeItem, deleteItem, loading, error, openModal, setOpenModal, addItem }}>
            {
                children
            }
        </ItemContext.Provider>
    )
}


export { ItemContext, ItemProvider }