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

export const betterDay = (values: iDollar[]) => {
    let dayToBuy
    let dayToSell

    values.sort((a, b) => a.cotacaoCompra - b.cotacaoCompra)
    dayToBuy = values[0]

    values.sort((a, b) => a.cotacaoVenda - b.cotacaoVenda)
    dayToSell = values[values.length - 1]

    const res = {
        compra: { dia: dayToBuy.dataHoraCotacao, valor: dayToBuy.cotacaoCompra },
        venda: { dia: dayToSell.dataHoraCotacao, valor: dayToSell.cotacaoVenda }
    }

    return res
}
