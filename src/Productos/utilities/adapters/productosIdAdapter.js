export const productosIdAdapter = (data) => {

    for (let key in data) {
        if (key === '_id') {
            data.id = data[key];
            delete data._id;
        }
    }
    return data;
}
