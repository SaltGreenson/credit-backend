import {DataSource} from "typeorm"
import {ClientEntity} from "./entity/Client.entity";
import {ContactPersonEntity} from "./entity/ContactPerson.entity";
import {resolve} from 'path'

export const dataSource = new DataSource({
    type: "mssql",
    host: "localhost\\SQLEXPRESS",
    username: "admin",
    password: "admin",
    database: "Credit_node",
    synchronize: true,
    entities: [resolve(__dirname, './entity', '*.ts')],
    options: { encrypt: false },
})