import {Request, Response} from "express";
import {ClientEntity} from "../entity/Client.entity";
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
        res
            .status(200)
            .json(clients)
    } catch (err) {
        res.status(500).end("Uncaught error")
    }
}

export const changeClient = async (req: Request, res: Response) => {
    try {
        const clientRep = dataSource.getRepository(ClientEntity)

        const {client} = req.body

        await clientRep.update({ID: client.ID}, req.body)

    } catch (err) {
        console.log(err)
    }
}

export const deleteClient = async (req: Request, res: Response) => {
    try {
        const clientRep = dataSource.getRepository(ClientEntity)
        const {id} = req.params
        await clientRep.delete(+{id})
        res.status(200).end()
    } catch (err) {
        console.log(err)
        res.status(500).end()
    }
}

export const createClient = async (req: Request, res: Response) => {
    try {
        const clientRep = dataSource.getRepository(ClientEntity)
        const {client} = req.body

        clientRep.create({...client})
        res.status(200).end()

    } catch (err) {
        console.log(err)
        res.status(500).end()
    }
}