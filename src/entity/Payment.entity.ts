import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {CreditEntity} from "./Credit.entity";

@Entity("Payment")
export class PaymentEntity {

    @PrimaryGeneratedColumn()
    ID: number

    @Column("varchar")
    Title: string

    @Column("float")
    Amount: number

    @Column("date")
    Date: number

    @ManyToOne(() => CreditEntity, (credit) => credit.Payments)
    Credit: CreditEntity
}