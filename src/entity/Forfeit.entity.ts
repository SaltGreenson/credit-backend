import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { CreditEntity } from "./Credit.entity";

@Entity("Forfeit")
export class ForfeitEntity {
    @PrimaryGeneratedColumn()
    ID: number

    @Column("float")
    Sum!: number

    @Column("varchar")
    TypeOfForfeit!: string

}