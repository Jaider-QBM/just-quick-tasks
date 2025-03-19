import React from 'react'
import '../styles/AppUI.css'
import { Title } from './Title'
import { Search } from './Search'
import { List } from './List'
import { Item } from './Item'
import { Button } from './Button'
import { Loading } from './Loading'
import { ItemContext } from '../utils/ItemContext'
import { Modal } from './Modal'
import { FormItem } from './FormItem'
import { FormStasks } from './FormStasks'


export function AppUI() {
    const { serchItem, completeItem, deleteItem, loading, openModal} = React.useContext(ItemContext)
    return (
        <div className='body-content'>
            <div className='content-create'>
                <FormStasks/>
            </div>

            <div className='content-context'>
                <Title />
                <Search />
                <List>
                    {
                        loading && (
                            <>
                                <Loading />
                            </>
                        )
                    }

                    {
                        (!loading && serchItem.length === 0) &&
                        <p className='message-serch'>Crea Tu Primera Tarea y Busca en completarla. ¡Vamos!</p>
                    }

                    {
                        serchItem.map(({ text, completed }) => (
                            <Item 
                                key={text} 
                                title={text} 
                                completed={completed} 
                                onClomplete={() => (completeItem(text))} 
                                onDelete={() => deleteItem(text)} />
                        ))
                    }
                </List>
            </div>

            <Button />

            {
                openModal && (
                    <Modal >
                        <FormItem/>
                    </Modal>
                )
            }
        </div>
    )
}