import {Router} from 'express'
import {getForfeits} from "../controllers/forfeits";

const router = Router()

router.get('/', getForfeits)

export default router