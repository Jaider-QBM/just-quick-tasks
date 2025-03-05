import '../styles/Loading.css'
export function Loading() {
    return (
        <div className="card-loading">
            <div className="loader">
                <p>Cargando</p>
                <div className="words">
                    <span className="word">Tareas</span>
                    <span className="word">Estados</span>
                    <span className="word">Textos</span>
                    <span className="word">Titulos</span>
                    <span className="word">Iconos</span>
                </div>
            </div>
        </div>

    )
}