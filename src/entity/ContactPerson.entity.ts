import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm"
import {ClientEntity} from "./Client.entity";

@Entity("ContactPerson")
export class ContactPersonEntity {
    @PrimaryGeneratedColumn()
    ID: number

    @Column("varchar")
    LastName!: string

    @Column("varchar")
    Name!: string

    @Column("varchar")
    MiddleName!: string

    @Column("float")
    MonthlySalary!: string

    @OneToMany(() => ClientEntity, (client) => client.ContactPerson)
    Clients: ClientEntity[]
}