import {Request, Response} from "express";
import {dataSource} from "../data-source";
import {ContactPersonEntity} from "../entity/ContactPerson.entity";

export const getContactPersons = async (req: Request, res: Response) => {
    const contactPersonRep = dataSource.getRepository(ContactPersonEntity)

    const contactPersons = await contactPersonRep.find()

    res.json(contactPersons)
}