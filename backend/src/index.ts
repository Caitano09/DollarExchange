import express from 'express'
import cors from 'cors'
import dollarExchange from './routes/dollarExchangeRoute'
import knex from './database/index'

const app = express()
const port = process.env.PORT || 3001

const start = async() =>{
    console.log('Running migrations')
    await knex.migrate.latest()
    console.log('Done migrations')
}
start()

app.use(cors())
app.get('/', (req, res) => res.send('api alive'))
app.use('/dollarExchange', dollarExchange)

app.listen(port, ()=> console.log('listening on ', port))
