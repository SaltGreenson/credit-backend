import {Request, Response} from "express";
import {dataSource} from "../data-source";
import {ForfeitEntity} from "../entity/Forfeit.entity";

type ForfeitBodyType = {
    Sum: number,
    TypeOfForfeit: string
}

export const getForfeits = async (req: Request, res: Response) => {
    const forfeitRep = dataSource.getRepository(ForfeitEntity)

    const forfeits = await forfeitRep.find()

    res.json(forfeits)
}

export const createForfeit = async (req: Request, res: Response) => {
    try {
        const forfeitRep = await dataSource.getRepository(ForfeitEntity)
        const forfeit = await forfeitRep.create(req.body);
        const results = await forfeitRep.save(forfeit)
        return res.status(200).json(results)
    } catch (err) {
        console.error(err)
        res.status(500).end()
    }
}

export const changeForfeit = async (req: Request, res: Response) => {
    try {
        const forfeitRep = dataSource.getRepository(ForfeitEntity)

        const results = await forfeitRep.update(req.params.id, req.body)
        
        return res.status(200).json(results)

    } catch (err) {
        console.log(err)
        res.status(500).end()
    }
}

export const deleteForfeit = async (req: Request, res: Response) => 
{
    try {
        const forfeitRep = dataSource.getRepository(ForfeitEntity)
        const result = await forfeitRep.delete(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        console.log(err)
        res.status(500).end()
    }
}