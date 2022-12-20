import { useContext } from "react";
import {
    useForm,
    useFetch,
    ProductosContext,
    productosFetch as fetchData,
    productosInitialState as initialState,
} from "../../"

export const ProductosAgregar = () => {

    const { form, handleForm } = useForm(initialState.agregar);
    const { saveChanges } = useContext(ProductosContext);
    const { submit } = useFetch(fetchData.agregar);


    return (
        <div className="container my-4 text-muted col-sm-12 col-md-8 col-lg-5">
            <form name="form">
                <div className="text-start">

                    <label htmlFor="formControlInput1" className="form-label">Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        id="formControlInput1"
                        placeholder="Ingrese el nombre"
                        className="form-control mb-4 shadow-sm"
                        onChange={ handleForm }
                        value={ form.nombre }
                    />

                    <label htmlFor="formControlInput2" className="form-label">Precio:</label>
                    <input
                        type="text"
                        name="precio"
                        id="formControlInput2"
                        className="form-control mb-4 shadow-sm"
                        placeholder="Ingrese el precio del producto"
                        onChange={ handleForm }
                        value={ form.precio }
                    />

                    <label htmlFor="formControlInput3" className="form-label">Stock:</label>
                    <input
                        type="text"
                        name="stock"
                        id="formControlInput3"
                        className="form-control mb-4 shadow-sm"
                        placeholder="Ingrese el stock ingresado"
                        onChange={ handleForm }
                        value={ form.stock }
                    />

                    <div className="d-flex justify-content-center">
                        <button
                            className="btn btn-secondary my-4 shadow"
                            onClick={ e => { submit(e, form, saveChanges) } }
                        >Agregar Producto</button>
                    </div>


                </div>

            </form>
        </div>
    )
}