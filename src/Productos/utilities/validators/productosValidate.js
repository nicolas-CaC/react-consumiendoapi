export const productosValidate = (data) => {

    for (let key in data) {
        if (key === 'stock' || key === 'precio')
            data[key] = Number(data[key]);
    }

    return data;
}