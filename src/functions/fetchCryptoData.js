import axios from "axios";


export const fetchedCryptoData = () => {
    const fetchedData = axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
    .then((response) => { 
        return response.data
    })
    .catch((error) => {
       return error.message
    })
    return fetchedData;
}