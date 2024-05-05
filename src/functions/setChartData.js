import {extractData} from '../functions/extractDatefromObject'


export const setChartData = (setState,coinData1,coinData2,coinId1,coinId2) => {
    if(coinData2){
        setState({
            labels: coinData1.map((item) => extractData(item[0])),
            datasets: [
              {
                label : coinId1,
                data: coinData1.map((item) => item[1]),
                borderColor: '#3a80e9',
                borderWidth : 2,
                fill : false,
                tension : 0.25,
                backgroundColor : 'rgba(58,128,233,0.1)',
                pointRadius : 0,
                yAxisID : coinId1,
              },
              {
                label : coinId2,
                data: coinData2.map((item) => item[1]),
                borderColor: '#ff0051',
                borderWidth : 2,
                fill : false,
                tension : 0.25,
                backgroundColor : 'rgba(255, 0, 81, 0.788)',
                pointRadius : 0,
                yAxisID : coinId2,
                },
            ],
          })
    }
    else{
        setState({
            labels: coinData1.map((item) => {
              return extractData(item[0])
            }),
            datasets: [
              {
                label : coinId1,
                data: coinData1.map((item) => item[1]),
                borderColor: '#3a80e9',
                borderWidth : 2,
                fill : true,
                tension : 0.25,
                backgroundColor : 'rgba(58,128,233,0.1)',
                pointRadius : 0,
              },
            ],
          })
    }
    
}










