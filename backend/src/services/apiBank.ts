import axios from 'axios'

const api = axios.create({ 
    baseURL: 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata'
})

const apiRoute = { 
    periodDollarExchange: (initialDate: string, finalDate: string) => {
        return api.get(
            `/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial='${initialDate}'&@dataFinalCotacao='${finalDate}'&$top=100&$format=json`
        )
    }
}

export default apiRoute