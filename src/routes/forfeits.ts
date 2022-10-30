import {Router} from 'express'
import {getForfeits, createForfeit, changeForfeit, deleteForfeit} from "../controllers/forfeits";

const router = Router()

router.get('/', getForfeits)

router.post('/', createForfeit);

router.put('/:id', changeForfeit)

router.delete('/:id', deleteForfeit)


export default router