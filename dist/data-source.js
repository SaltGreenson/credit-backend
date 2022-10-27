"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const Client_entity_1 = require("./entity/Client.entity");
const ContactPerson_entity_1 = require("./entity/ContactPerson.entity");
exports.dataSource = new typeorm_1.DataSource({
    type: "mssql",
    host: "localhost\\SQLEXPRESS",
    username: "admin",
    password: "admin",
    database: "Credit_node",
    synchronize: true,
    entities: [Client_entity_1.Client, ContactPerson_entity_1.ContactPerson],
    options: { encrypt: false },
});
