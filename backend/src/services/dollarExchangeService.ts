import ErrorWithResponse from "../errors/ErrorWithResponse"
import DollarExchange from "../models/DollarExchange"
import { betterDay } from "../utils/validators"
import apiRoute from "./apiBank"

export const findPeriodDollarExchange = async(initialDate: string, finalDate: string) =>{
    const cache = await DollarExchange.query().select().where({initialDate, finalDate}).first()

    if(cache){
        return cache.data
    }else{
        const resData = await apiRoute.periodDollarExchange(initialDate, finalDate)
        if(resData.data.value.length <= 0) throw new ErrorWithResponse('Sem cotação para esse intervalo')

        const data = betterDay(resData.data.value)
        await DollarExchange.query().insert({ initialDate, finalDate, data})
        return data
    }
}