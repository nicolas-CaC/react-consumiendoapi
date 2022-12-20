import { useContext } from "react";
import {
    useForm,
    useFetch,
    ProductosContext,
    productosFetch as fetchData,
    productosInitialState as initialState
} from "../../"


export const ProductosModificar = () => {

    const { submit } = useFetch(fetchData.modificar);
    const { form, handleForm } = useForm(initialState.modificar);
    const { saveChanges, select } = useContext(ProductosContext);

    const format = (key, form) => {
        form[key] = form[key] || select[key];
    }

    const updSubmit = e => {
        e.preventDefault();
        form.id = form.id || select.id;
        for (let key in form) format(key, form);
        submit(e, form, saveChanges);
    }

    return (
        <div className="container my-4 text-muted col-sm-12 col-md-8 col-lg-5">
            <form name="form">
                <div className="text-start">

                    <label htmlFor="formControlInput0" className="form-label">ID:</label>
                    <input
                        name="id"
                        type="text"
                        id="formControlInput0"
                        className="form-control mb-4 shadow-sm"
                        placeholder="Seleccione el ID del producto a borrar"
                        value={ `${select.id}` }
                        disabled
                    />

                    <label htmlFor="formControlInput1" className="form-label">Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        id="formControlInput1"
                        placeholder="Ingrese el nombre"
                        className="form-control mb-4 shadow-sm"
                        value={ form.nombre || `${select.nombre}` }
                        onChange={ handleForm }
                    />

                    <label htmlFor="formControlInput2" className="form-label">Precio:</label>
                    <input
                        type="text"
                        name="precio"
                        id="formControlInput2"
                        className="form-control mb-4 shadow-sm"
                        placeholder="Ingrese el precio del producto"
                        value={ form.precio || `${select.precio}` }
                        onChange={ handleForm }
                    />

                    <label htmlFor="formControlInput3" className="form-label">Stock:</label>
                    <input
                        type="text"
                        name="stock"
                        id="formControlInput3"
                        className="form-control mb-4 shadow-sm"
                        placeholder="Ingrese el stock ingresado"
                        onChange={ handleForm }
                        value={ form.stock || `${select.stock}` }
                    />

                    <div className="d-flex justify-content-center">
                        <button
                            className="btn btn-secondary my-4 shadow"
                            onClick={ updSubmit }
                        >Agregar Producto</button>
                    </div>


                </div>

            </form>
        </div>
    )
}