import {Request, Response} from "express";
import {ClientEntity} from "../entity/Client.entity";
import { ContactPersonEntity } from "../entity/ContactPerson.entity";
import {dataSource} from "../data-source";

type ClientBodyType = {
    ID: number
    LastName: string
    Name: string
    MiddleName: string
    Address: string
    PhoneNumber: string
    KindOfProperty: string
    contactPersonId: number
}

export const getClients = async (req: Request, res: Response) => {
    try {
        const clientRep = dataSource.getRepository(ClientEntity)

        const clients = await clientRep.find({  
            relations: {
                ContactPerson: true
            }
        })
        res.status(200).json(clients)
    } catch (err) {
        res.status(500).end("Uncaught error")
    }
}

export const createClient = async (req: Request, res: Response) => {
    try {
        const clientRep = await dataSource.getRepository(ClientEntity);
        const contectPersonRep = await dataSource.getRepository(ContactPersonEntity);
        const contactPerson = await contectPersonRep.findOne({where: {
            ID: req.body.contactPersonId
        }})
        if(!contactPerson) {
            return res.status(400).send('There is no such contact person')
        }
        const client = await clientRep.create({...req.body, ContactPerson: contactPerson});
        const results = await dataSource.getRepository(ClientEntity).save(client)
        return res.status(200).json(results)
    } catch (err) {
        console.error(err)
        res.status(500).end()
    }
}

export const changeClient = async (req: Request, res: Response) => {
    try {
        const clientRep = dataSource.getRepository(ClientEntity)
        const contectPersonRep = await dataSource.getRepository(ContactPersonEntity);

        const contactPerson = await contectPersonRep.findOne({where: {
            ID: req.body.contactPersonId
        }})
        if(!contactPerson) {
            return res.status(400).send('There is no such contact person')
        }

        delete req.body.contactPersonId

        const results = await clientRep.update(req.params.id, { ...req.body, ContactPerson: contactPerson})
        return res.status(200).json(results)
    } catch (err) {
        console.log(err)
        res.status(500).end()
    }
}

export const deleteClient = async (req: Request, res: Response) => 
{
    try {
        const clientRep = dataSource.getRepository(ClientEntity)
        const result = await clientRep.delete(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        console.log(err)
        res.status(500).end()
    }
}

