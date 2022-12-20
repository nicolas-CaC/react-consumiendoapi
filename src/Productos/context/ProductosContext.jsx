import { createContext, useState } from 'react'
import { productosInitialState } from '../';

export const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {

    // Opciones: Componentes agregar/modif/borrar
    const [boton, setBoton] = useState(0);
    const [changes, setChanges] = useState(false);
    const [select, setSelect] = useState(productosInitialState.modificar);

    const changeBoton = (option) => {
        setBoton(option)
    }

    const saveChanges = () => {
        setChanges(!changes);
    }

    const changeSelection = (data) => {
        setSelect(data);
    }

    return (
        <ProductosContext.Provider
            value={ {
                boton,
                select,
                changes,
                changeBoton,
                saveChanges,
                changeSelection
            } }>
            { children }
        </ProductosContext.Provider>
    )
}