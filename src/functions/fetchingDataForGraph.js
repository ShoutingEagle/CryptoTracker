import axios from "axios"

export const fetchedGraphData = (id,days) => {
    const fetchedData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
      .then((response) => {
        // setIsLoading(false)
        // filterFetchedData(setCoinDetails,response.data)
        return response.data
      })
      .catch((error) => {
        // setIsLoading(false)
        // setCoinDetails(error.message)
        return error.message
      })
      return fetchedData
}