interface iDollar {
    "cotacaoCompra": number,
    "cotacaoVenda": number,
    "dataHoraCotacao": string
}


export const isNotValidDate = (date: string) => {
    if(date.length !== 10) return true
    
    const temp = new Date(date) 
    return isNaN(temp.getDate())
}

export const isNotValidRangeDate = (dateInitial: string, dateFinal: string) => {
    const initial = new Date(dateInitial)
    const final = new Date(dateFinal)
    return initial > final
}


export const formatDate = (date: string) => {
    const temp = date.split('-', 3)
    return temp[1] + "-" + temp[2] + "-" + temp[0]
}

export const betterDay = (dayToBuy: iDollar[], dayToSell: iDollar[]) => {
    const res = {
        compra: { dia: dayToBuy[0].dataHoraCotacao, valor: dayToBuy[0].cotacaoCompra },
        venda: { dia: dayToSell[0].dataHoraCotacao, valor: dayToSell[0].cotacaoVenda }
    }

    return res
}
