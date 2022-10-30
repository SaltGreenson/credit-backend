import {Router} from "express";
import {createClient, changeClient, deleteClient, getClients} from "../controllers/clients";

const router = Router()

router.get('/', getClients)

router.post('/', createClient);

router.delete('/:id', deleteClient)

router.put('/:id', changeClient)

export default router