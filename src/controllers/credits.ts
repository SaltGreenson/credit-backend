import {Request, Response} from "express";
import {dataSource} from "../data-source";
import { CreditEntity } from "../entity/Credit.entity";
import { ClientEntity } from "../entity/Client.entity";
import { ForfeitEntity } from "../entity/Forfeit.entity";

type CreditBodyType = {
    Sum: number,
    DateOfIssue: string,
    RemainingFunds: number,
    DateOfActualReturn: string,
    clientID: number,
    forfeitID: number
}

export const getCredits = async (req: Request, res: Response) => {
    const creditRep = dataSource.getRepository(CreditEntity)

    const credits = await creditRep.find({
        relations: {
            Client: true,
            Payments: true,
            Forfeit: true
        }
    })

    res.json(credits)
}

export const createCredit= async (req: Request, res: Response) => {
    try {
        const creditRep = await dataSource.getRepository(CreditEntity);
        const clientRep = await dataSource.getRepository(ClientEntity);
        const forfeitRep = await dataSource.getRepository(ForfeitEntity);

        const client = await clientRep.findOne({where: {
            ID: req.body.clientID
        }})

        const forfeit = await forfeitRep.findOne({where: {
            ID: req.body.forfeitID
        }})
        if(!client) {
            return res.status(400).send('There is no such client')
        }
        if(!forfeit) {
            return res.status(400).send('There is no such forfeit')
        }
        const credit = await creditRep.create({...req.body, Client: client, Forfeit: forfeit});
        const results = await creditRep.save(credit)
        return res.status(200).json(results)
    } catch (err) {
        console.error(err)
        res.status(500).end()
    }
}

export const changeCredit = async (req: Request, res: Response) => {
    try {
        const creditRep = await dataSource.getRepository(CreditEntity);
        const clientRep = await dataSource.getRepository(ClientEntity);
        const forfeitRep = await dataSource.getRepository(ForfeitEntity);

        const client = await clientRep.findOne({where: {
            ID: req.body.clientID
        }})

        const forfeit = await forfeitRep.findOne({where: {
            ID: req.body.forfeitID
        }})
        if(!client) {
            return res.status(400).send('There is no such client')
        }
        if(!forfeit) {
            return res.status(400).send('There is no such forfeit')
        }
        delete req.body.forfeitID
        delete req.body.clientID

        const results = await creditRep.update(req.params.id, { ...req.body, Client: client, Forfeit: forfeit})
        return res.status(200).json(results)
    } catch (err) {
        console.log(err)
        res.status(500).end()
    }
}

export const deleteCredit = async (req: Request, res: Response) => 
{
    try {
        const creditRep = dataSource.getRepository(CreditEntity)
        const result = await creditRep.delete(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        console.log(err)
        res.status(500).end()
    }
}

