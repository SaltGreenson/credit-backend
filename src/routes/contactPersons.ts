import {Router} from 'express'
import {getContactPersons, createContactPerson, changeContactPerson, deleteContactPerson} from "../controllers/contactPersons";

const router = Router()

router.get('/', getContactPersons)

router.post('/', createContactPerson);

router.put('/:id', changeContactPerson)

router.delete('/:id', deleteContactPerson)


export default router