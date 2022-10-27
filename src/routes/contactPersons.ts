import {Router} from 'express'
import {getContactPersons} from "../controllers/contactPersons";

const router = Router()

router.get('/', getContactPersons)

export default router