import { Request, Response } from 'express'
import errorHandler from '../errors/ErrorWithResponse'
import { findPeriodDollarExchange } from '../services/dollarExchangeService'
import { formatDate, isNotValidDate, isNotValidRangeDate } from '../utils/validators'

export const periodDollarExchange = async (req: Request, res: Response) => {
    try {
        const { initialDate, finalDate } = req.query

        if (isNotValidDate(initialDate + "") || isNotValidDate(finalDate + "")) {
            throw new errorHandler("A Data não está em um formato valido. Exemplo de formato: '2022-12-31'")
        }
        if(isNotValidRangeDate(initialDate+"", finalDate+"")){
            throw new errorHandler("A Data inicial deve ser menor ou igual a Data Final")
        }

        const initial = formatDate(initialDate?.toString() + "")
        const final = formatDate(finalDate?.toString() + "")

        const resData = await findPeriodDollarExchange(initial, final)
        res.json(resData)

    } catch (error: any) {
        console.log(error)
        res.status(error.code).json(error)
    }
}

