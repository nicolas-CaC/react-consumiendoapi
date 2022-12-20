export const productosFetch = {
    agregar: {
        path: () => '/prod',
        method: 'POST'
    },
    listar: {
        path: () => '/prod/all',
        method: 'GET'
    },
    modificar: {
        path: () => '/prod',
        method: 'PUT'
    },
    borrar: {
        path: (id) => `/prod/${id}`,
        method: 'DELETE'
    }
}
