import React from 'react'
import { formatDate } from '../utils/dates'
import * as S from './MessageStyle'

export interface iDollarExchange {
    compra: { dia: string, valor: number } ,
    venda: { dia: string, valor: number }
}

const Message: React.FC<iDollarExchange> = ({compra, venda}) => {
    return (
        <S.Message>
            <span>
                Melhor data para venda <b>{formatDate('2', '/', venda.dia)} </b>
                valor <b>{venda.valor}</b> 
            </span>
            <span>
                Melhor data para compra <b>{formatDate('2', '/', compra.dia)} </b>
                valor <b>{compra.valor}</b> 
            </span>
        </S.Message>
    )
}

export default Message;