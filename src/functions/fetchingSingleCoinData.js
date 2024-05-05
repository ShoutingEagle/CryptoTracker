import axios from "axios"

export const fetchedSingleCoinData = (id) => {
    const fetchedData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        return error.message
      })

      return fetchedData
}