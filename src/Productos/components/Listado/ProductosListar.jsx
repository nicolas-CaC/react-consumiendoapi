import { useContext } from "react"
import {
    useFetch,
    ProductosContext,
    productosIdAdapter,
    productosFetch as fetchData
} from "../../";

export const ProductosListar = () => {

    const { changes, changeSelection } = useContext(ProductosContext);
    const { db, loading } = useFetch(fetchData.listar, changes);

    return (
        <table className="table table-striped">

            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Stock</th>
                </tr>
            </thead>

            <tbody>
                { loading
                    ? <tr><td>Cargando...</td></tr>
                    : db.map(producto => {
                        producto = productosIdAdapter(producto);
                        return (
                            <tr key={ producto.id }>
                                <td>
                                    <button
                                        className="id"
                                        onClick={ () => changeSelection(producto) }>
                                        { producto.id }
                                    </button>
                                </td>
                                <th>{ producto.nombre }</th>
                                <td>{ producto.precio }</td>
                                <td>{ producto.stock }</td>
                            </tr>)
                    }
                    )
                }
            </tbody>

            <tfoot>
                <tr>
                    <th scope="row">Cantidad de productos:</th>
                    <td>{ db.length }</td>
                </tr>
            </tfoot>
        </table>
    )
}