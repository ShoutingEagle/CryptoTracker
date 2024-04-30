import axios from "axios"

export const fetchedSingleCoinData = (id) => {
    const fetchedData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => {
        return response.data
        // setIsLoading(false)
        // filterFetchedData(setCoinDetails,response.data)
      })
      .catch((error) => {
        // setIsLoading(false)
        // setCoinDetails(error.message)
        return error.message
      })

      return fetchedData
}