"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = exports.getClients = void 0;
const Client_entity_1 = require("../entity/Client.entity");
const data_source_1 = require("../data-source");
const getClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRep = data_source_1.dataSource.getRepository(Client_entity_1.Client);
    const clients = yield clientRep.find({
        relations: {
            ContactPerson: true
        }
    });
    res.json(clients);
});
exports.getClients = getClients;
const createClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.createClient = createClient;
