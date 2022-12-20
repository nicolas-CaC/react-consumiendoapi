import { useContext } from "react"
import {
    ProductosBorrar,
    ProductosAgregar,
    ProductosContext,
    ProductosModificar
} from "../../"

export const ProductosOpciones = () => {

    const { boton } = useContext(ProductosContext)

    if (boton === 0) return <ProductosAgregar />

    if (boton === 1) return <ProductosBorrar />

    if (boton === 2) return <ProductosModificar />
}