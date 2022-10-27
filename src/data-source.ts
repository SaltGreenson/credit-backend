import {DataSource} from "typeorm"
import {resolve} from 'path'
import keys from './keys'

export const dataSource = new DataSource({
    type: "mssql",
    host: keys.DATABASE_HOST,
    username: keys.DATABASE_USERNAME,
    password: keys.DATABASE_PASSWORD,
    database: keys.DATABASE_NAME,
    synchronize: true,
    entities: [resolve(__dirname, './entity', '*.ts')],
    options: { encrypt: false },
})