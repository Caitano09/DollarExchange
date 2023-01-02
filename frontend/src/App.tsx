import React, { ChangeEvent, useState } from 'react'
import * as S from './AppStyle';
import { toast } from 'react-toastify';
 
import Message, { iDollarExchange } from './components/Message';

import api from './services/api';
import { formatDate } from './utils/dates';

function App() {
  const [initialDate, setInitialDate] = useState<string>('')
  const [finalDate, setFinalDate] = useState<string>('')
  const currentDate = formatDate()

  const [dollarExchange, setDollarExchange] = useState<iDollarExchange>({
    compra: { dia: '', valor: 0 },
    venda: { dia: '', valor: 0 }
  })

  const sendDates = async () => {
    try {
      const res = await api.dollarExchangeRate({ initialDate, finalDate })
      setDollarExchange(res.data)
    } catch (error: any) {
      toast.error(error?.response?.data.message || 'Algo deu errado!');
    }
  }

  const fieldsProps = [
    {
      label: { htmlFor: 'initial', name: 'Data Inicial' },
      input: { id: 'initial', type: "date", max: finalDate || currentDate, onChange: (e: ChangeEvent<HTMLInputElement>) => setInitialDate(e.target.value) }
    },
    {
      label: { htmlFor: 'final', name: 'Data Final' },
      input: { id: 'final', type: "date", disabled: initialDate === '', min: initialDate, max: currentDate, onChange: (e: ChangeEvent<HTMLInputElement>) => setFinalDate(e.target.value) }
    }
  ]

  const buttonProps = {
    disabled: initialDate === '' || finalDate === '',
    onClick: sendDates
  }

  return (
    <S.Container>
       <S.Title>Buscar a Cotação do Dólar</S.Title>

      <S.DivForm>    

        {fieldsProps.map(({ input, label }) => (
          <React.Fragment key={input.id}>
            <S.Label htmlFor={label.htmlFor}>{label.name}</S.Label>
            <S.Input {...input} />
          </React.Fragment>
        ))}

        <S.Button {...buttonProps} >Enviar</S.Button>
      </S.DivForm>

      {dollarExchange.compra.dia !== '' &&
        <Message compra={dollarExchange.compra} venda={dollarExchange.venda} />
      }
    </S.Container>
  );
}

export default App;