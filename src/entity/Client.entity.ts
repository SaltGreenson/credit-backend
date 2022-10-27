import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne} from "typeorm"
import {ContactPersonEntity} from "./ContactPerson.entity";
import {CreditEntity} from "./Credit.entity";

@Entity("Client")
export class ClientEntity {
    @PrimaryGeneratedColumn()
    ID: number

    @Column("varchar")
    LastName!: string

    @Column("varchar")
    Name!: string

    @Column("varchar")
    MiddleName!: string

    @Column("varchar")
    Address!: string

    @Column("varchar")
    PhoneNumber!: string

    @Column("varchar")
    KindOfProperty!: string

    @ManyToOne(() => ContactPersonEntity, (contactPerson) => contactPerson.Clients)
    ContactPerson: ContactPersonEntity

}