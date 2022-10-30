import {Router} from 'express'
import {getPayments, createPayment, deletePayment, changePayment} from "../controllers/payments";

const router = Router()

router.get('/', getPayments)

router.post('/', createPayment);

router.delete('/:id', deletePayment)

router.put('/:id', changePayment)

export default router