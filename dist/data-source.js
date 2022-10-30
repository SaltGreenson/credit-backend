"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
const path_1 = require("path");
const keys_1 = __importDefault(require("./keys"));
exports.dataSource = new typeorm_1.DataSource({
    type: "mssql",
    host: keys_1.default.DATABASE_HOST,
    username: keys_1.default.DATABASE_USERNAME,
    password: keys_1.default.DATABASE_PASSWORD,
    database: keys_1.default.DATABASE_NAME,
    synchronize: true,
    entities: [(0, path_1.resolve)(__dirname, './entity', '*.ts')],
    options: { encrypt: false },
});
