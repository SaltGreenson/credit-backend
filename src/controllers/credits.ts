import {Request, Response} from "express";
import {ClientEntity} from "../entity/Client.entity";
import {dataSource} from "../data-source";
import {CreditEntity} from "../entity/Credit.entity";


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

export const createClient = async (req: Request, res: Response) => {

}