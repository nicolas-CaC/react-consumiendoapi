import { useContext } from "react"
import { botones, ProductosContext } from "../../"

export const ProductosBotones = () => {

    const { changeBoton } = useContext(ProductosContext);

    return (
        <div className="container d-flex gap-2 py-4 justify-content-center">
            {
                botones.map(boton =>
                    <button
                        key={ boton.label }
                        className="btn shadow-sm"
                        style={ { background: `#${boton.color}`, color: 'white' } }
                        onClick={ () => changeBoton(boton.opcion) }
                    >
                        { boton.label }
                    </button>)
            }
        </div>
    )
}