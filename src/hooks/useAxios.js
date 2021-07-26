import { useState } from "react";
import axios from "axios";
import uuid from "uuid";


function useAxios(baseUrl) {
    const [response, setResponse] = useState([]);
    const getData = async (value) => {
        const res = (typeof value === 'object') ? await axios.get(baseUrl) : await axios.get(baseUrl+value);
        setResponse(response => [...response, {...res.data, id: uuid()}]);
    }
    return [response, getData];
}

export default useAxios;