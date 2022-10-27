"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: "mssql",
    host: "localhost\\SQLEXPRESS",
    username: "admin",
    password: "admin",
    database: "Credit",
    synchronize: true,
    options: { encrypt: false },
});
exports.AppDataSource = AppDataSource;
