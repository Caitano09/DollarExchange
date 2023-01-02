import express from 'express'
import cors from 'cors'
import dollarExchange from './routes/dollarExchangeRoute'

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.get('/', (req, res) => res.send('ok'))
app.use('/dollarExchange', dollarExchange)

app.listen(port, ()=> console.log('listening on ', port))
