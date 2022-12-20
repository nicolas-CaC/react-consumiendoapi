import { useEffect, useState } from "react";
import { productosValidate } from "../";

export const useFetch = (fetchData, changes) => {

    const { path, method } = fetchData;

    const [db, setDb] = useState([]);
    const [message, setMessage] = useState();
    const [loading, setLoading] = useState(true);

    const submit = (e, data, changeFn) => {
        e.preventDefault();
        const toSubmit = productosValidate(data);
        setMessage(toSubmit);
        changeFn();
    }

    useEffect(() => {

        function getHeaders() {

            if (method === 'GET') return path;

            return (path, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(message)
            })
        }

        async function getData() {

            let data;
            data = (method === 'GET')
                ? await fetch(path())
                : await fetch(path(message.id), getHeaders());
            data = await data.json();
            setDb(data);
            setLoading(false);
        }

        if (method === 'GET') getData()
        else if (message) getData();

        return () => { setLoading(true); }

    }, [method, path, message, changes])

    return { db, loading, submit }
}