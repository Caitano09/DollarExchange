import axios from 'axios'

const api = axios.create({ 
    baseURL: 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata'
})

const apiRoute = { 
    periodDollarExchange: (type: string, initialDate: string, finalDate: string) => {
        let link = `/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial='${initialDate}'&@dataFinalCotacao='${finalDate}'&$top=1`
        
        if(type === 'sell'){
            return api.get(link+'&$orderby=cotacaoVenda%20desc&$format=json')
        }
        else if(type === 'buy'){
            return api.get(link+'&$orderby=cotacaoCompra&$format=json')
        }   
        else{
            return api.get(link+'&$format=json')
        }
    }
}

export default apiRoute