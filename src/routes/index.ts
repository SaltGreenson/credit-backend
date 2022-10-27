import {Router} from 'express'
import creditRouter from './credits'
import clientRouter from './clients'
import paymentRouter from './payments'
import forfeitRouter from "./forfeits";
import contactPersonsRouter from "./contactPersons";

const router = Router()

router.use('/credits', creditRouter);
router.use('/clients', clientRouter);
router.use('/payments', paymentRouter);
router.use('/forfeits', forfeitRouter);
router.use('/contact-persons', contactPersonsRouter);

export default router