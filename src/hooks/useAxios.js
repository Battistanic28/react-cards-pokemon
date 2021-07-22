import { useState } from "react";
import axios from "axios";
import uuid from "uuid";


function useAxios(url) {
    const [response, setResponse] = useState([]);
    const getData = async () => {
        const data = await axios.get(url);
        setResponse(response => [...response, {...data.data, id: uuid()}]);
    }
    return [response, getData];
}

export default useAxios;