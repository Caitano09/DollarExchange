import axios from 'axios'

const api = axios.create({ 
    baseURL: 'https://dollar-exchange-backend.herokuapp.com/'
    //baseURL: 'http://localhost:3001'
})

const apiRoute = { 
    dollarExchangeRate: (dates: {initialDate: string, finalDate: string}) => 
        api.get("/dollarExchange", { params: dates })
}

export default apiRoute