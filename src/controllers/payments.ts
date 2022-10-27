import {Response, Request} from "express";
import {dataSource} from "../data-source";
import {PaymentEntity} from "../entity/Payment.entity";

export const getPayments = async (req: Request, res: Response) => {
    const paymentsRep = dataSource.getRepository(PaymentEntity)

    const payments = await paymentsRep.find({
        relations: {
            Credit: true
        }
    })

    res.json(payments)
}