import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {ClientEntity} from "./Client.entity";
import {PaymentEntity} from "./Payment.entity";
import {ForfeitEntity} from "./Forfeit.entity";

@Entity("Credit")
export class CreditEntity {
    @PrimaryGeneratedColumn()
    ID: number

    @OneToOne(() => ClientEntity)
    @JoinColumn()
    Client: ClientEntity

    @OneToOne(() => ForfeitEntity)
    @JoinColumn()
    Forfeit!: ForfeitEntity

    @Column("float")
    Sum:number

    @Column("date")
    DateOfIssue: number

    @Column("float")
    RemainingFunds: number

    @Column("date")
    DateOfActualReturn: number

    @OneToMany(() => PaymentEntity, (payment) => payment.Credit)
    Payments!: PaymentEntity[]
}