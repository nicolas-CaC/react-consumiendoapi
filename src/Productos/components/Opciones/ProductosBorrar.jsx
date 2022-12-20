
import { useContext } from "react";
import {
    useForm,
    useFetch,
    ProductosContext,
    productosFetch as fetchData,
    productosInitialState as initialState
} from "../../"


export const ProductosBorrar = () => {

    const { submit } = useFetch(fetchData.borrar);
    const { form } = useForm(initialState.borrar);
    const { saveChanges, select } = useContext(ProductosContext);

    const delSubmit = e => {
        e.preventDefault();
        form.id = form.id || select.id;
        submit(e, form, saveChanges);
    }

    return (
        <div className="container my-4 text-muted col-sm-12 col-md-8 col-lg-5">
            <form>
                <div className="text-start">
                    <label htmlFor="formControlInput" className="form-label">ID:</label>
                    <input
                        type="text"
                        name="id"
                        id="formControlInput"
                        className="form-control mb-4 shadow-sm"
                        placeholder="Seleccione el ID del producto a borrar"
                        value={ `${select.id}` }
                        disabled
                    />
                </div>

                <button
                    className="btn btn-secondary my-4 shadow-sm"
                    onClick={ delSubmit }
                >Borrar Producto</button>

            </form>
        </div>
    )
}