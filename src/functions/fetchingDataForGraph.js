import axios from "axios"

export const fetchedGraphData = (id,days,dataBy) => {
    const fetchedData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
      .then((response) => {
       
        return response.data[dataBy]
      })
      .catch((error) => {
        return error.message
      })
      return fetchedData
}