import React, { useEffect, useState } from "react";
import axios from "axios";
import uuid from "uuid";


function useAxios(url) {
    const [response, setResponse] = useState([]);
    const getData = async () => {
        const data = await axios.get(url);
        setResponse(response => [...response, {...data.data, id: uuid()}]);
    }
    return [response, getData];
//   const [cards, setCards] = useState([]);
//   const addCard = async () => {
//     const response = await axios.get(
//       "https://deckofcardsapi.com/api/deck/new/draw/"
//     );
//     setCards(cards => [...cards, { ...response.data, id: uuid() }]);
//   };
}

export default useAxios;