import {Router} from 'express'
import {getCredits, createCredit, changeCredit, deleteCredit} from "../controllers/credits";

const router = Router()

router.get('/', getCredits)

router.post('/', createCredit);

router.put('/:id', changeCredit)

router.delete('/:id', deleteCredit)

export default router