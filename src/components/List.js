import '../styles/List.css'

export function List({children}){
    return(
        <ul className='list-ul'>
            {
                children
            }
        </ul>
    )
}