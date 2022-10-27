import {Request, Response} from "express";
import {dataSource} from "../data-source";
import {ForfeitEntity} from "../entity/Forfeit.entity";

export const getForfeits = async (req: Request, res: Response) => {
    const forfeitRep = dataSource.getRepository(ForfeitEntity)

    const forfeits = await forfeitRep.find()

    res.json(forfeits)
}