import express from "express";
import {periodDollarExchange} from '../controllers/dollarExchangeController'

const router = express.Router()

router.get('/', periodDollarExchange)

export default router