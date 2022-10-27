import {Router} from 'express'
import {getPayments} from "../controllers/payments";

const router = Router()

router.get('/', getPayments)

export default router