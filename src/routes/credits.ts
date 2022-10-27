import {Router} from 'express'
import {getCredits} from "../controllers/credits";

const router = Router()

router.get('/', getCredits)


export default router