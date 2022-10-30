import {Request, Response} from "express";
import {dataSource} from "../data-source";
import {ContactPersonEntity} from "../entity/ContactPerson.entity";

export const getContactPersons = async (req: Request, res: Response) => {
    try {
        const contactPersonRep = dataSource.getRepository(ContactPersonEntity)

        const contactPersons = await contactPersonRep.find({
            relations: {
                Clients: true
            }
        })

        res.status(200).json(contactPersons)
    } catch {
        res.status(500).end()
    }
}

export const createContactPerson = async (req: Request, res: Response) => {
    try {
        const clientRep = await dataSource.getRepository(ContactPersonEntity)
        const client = await clientRep.create(req.body);
        const results = await dataSource.getRepository(ContactPersonEntity).save(client)
        return res.status(200).json(results)
    } catch (err) {
        console.error(err)
        res.status(500).end()
    }
}

export const changeContactPerson = async (req: Request, res: Response) => {
    try {
        const clientRep = dataSource.getRepository(ContactPersonEntity)

        const results = await clientRep.update(req.params.id, req.body)
        
        return res.status(200).json(results)

    } catch (err) {
        console.log(err)
    }
}

export const deleteContactPerson = async (req: Request, res: Response) => 
{
    try {
        const clientRep = dataSource.getRepository(ContactPersonEntity)
        const result = await clientRep.delete(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        console.log(err)
        res.status(500).end()
    }
}