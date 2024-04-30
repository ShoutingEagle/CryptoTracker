export const filterFetchedData = (setState,state) => {
    setState({
      id : state.id,
      symbol : state.symbol,
      name : state.name,
      image : state.image.large,
      price_change_percentage_24h : state.market_data.price_change_percentage_24h,
      current_price : state.market_data.current_price.usd,
      total_volume : state.market_data.total_volume.usd,
      market_cap : state.market_data.market_cap.usd,
      description : state.description.en,
    })
  }
