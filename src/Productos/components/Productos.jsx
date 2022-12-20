import {
    ProductosLayout,
    ProductosListar,
    ProductosBotones,
    ProductosOpciones,
    ProductosProvider
} from "../"


export const Productos = () => {

    return (
        <ProductosProvider>
            <ProductosLayout>

                <ProductosBotones />
                <ProductosOpciones />
                <ProductosListar />

            </ProductosLayout>
        </ProductosProvider>
    )
}