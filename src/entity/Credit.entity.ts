import {Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {ClientEntity} from "./Client.entity";
import {PaymentEntity} from "./Payment.entity";
import {ForfeitEntity} from "./Forfeit.entity";

@Entity("Credit")
export class CreditEntity {
    @PrimaryGeneratedColumn()
    ID: number

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
    
    @OneToOne(() => ForfeitEntity)
    @JoinColumn()
    Forfeit!: ForfeitEntity

    @OneToOne(() => ClientEntity)
    @JoinColumn()
    Client: ClientEntity

}