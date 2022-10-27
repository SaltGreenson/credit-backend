import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("Forfeit")
export class ForfeitEntity {
    @PrimaryGeneratedColumn()
    ID: number

    @Column("float")
    Sum!: number

    @Column("varchar")
    TypeOfForfeit!: string
}