import {Response, Request} from "express";
import {dataSource} from "../data-source";
import {PaymentEntity} from "../entity/Payment.entity";
import { CreditEntity } from "../entity/Credit.entity";

type PaymentBodyType = {
    Title: string,
    Amount: number,
    Date: string,
    creditID: number
}

export const getPayments = async (req: Request, res: Response) => {
    const paymentsRep = dataSource.getRepository(PaymentEntity)

    const payments = await paymentsRep.find({
        relations: {
            Credit: true
        }
    })

    res.json(payments)
}

export const createPayment = async (req: Request, res: Response) => {
    try {
        const paymentRep = await dataSource.getRepository(PaymentEntity);
        const creditRep = await dataSource.getRepository(CreditEntity);
        const credit = await creditRep.findOne({where: {
            ID: req.body.creditID
        }})
        if(!credit) {
            return res.status(400).send('There is no such credit')
        }
        const payment = await paymentRep.create({...req.body, Credit: credit});
        const results = await dataSource.getRepository(PaymentEntity).save(payment)
        return res.status(200).json(results)
    } catch (err) {
        console.error(err)
        res.status(500).end()
    }
}

export const changePayment = async (req: Request, res: Response) => {
    try {
        const paymentRep = await dataSource.getRepository(PaymentEntity);
        const creditRep = await dataSource.getRepository(CreditEntity);

        const credit = await creditRep.findOne({where: {
            ID: req.body.creditID
        }})
        if(!credit) {
            return res.status(400).send('There is no such credit')
        }

        delete req.body.creditID

        const results = await paymentRep.update(req.params.id, { ...req.body, Credit: credit})
        return res.status(200).json(results)
    } catch (err) {
        console.log(err)
    }
}

export const deletePayment = async (req: Request, res: Response) => 
{
    try {
        const paymentRep = await dataSource.getRepository(PaymentEntity);
        const result = await paymentRep.delete(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        console.log(err)
        res.status(500).end()
    }
}
