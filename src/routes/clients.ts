import {Router} from "express";
import {changeClient, deleteClient, getClients} from "../controllers/clients";

const router = Router()

router.get('/', getClients)

router.delete('/delete/:id', deleteClient)

router.post('/change', changeClient)

export default router