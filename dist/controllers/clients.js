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
exports.createClient = exports.deleteClient = exports.changeClient = exports.getClients = void 0;
const Client_entity_1 = require("../entity/Client.entity");
const data_source_1 = require("../data-source");
const getClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientRep = data_source_1.dataSource.getRepository(Client_entity_1.ClientEntity);
        const clients = yield clientRep.find({
            relations: {
                ContactPerson: true
            }
        });
        res
            .status(200)
            .json(clients);
    }
    catch (err) {
        res.status(500).end("Uncaught error");
    }
});
exports.getClients = getClients;
const changeClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientRep = data_source_1.dataSource.getRepository(Client_entity_1.ClientEntity);
        const { client } = req.body;
        yield clientRep.update({ ID: client.ID }, req.body);
    }
    catch (err) {
        console.log(err);
    }
});
exports.changeClient = changeClient;
const deleteClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientRep = data_source_1.dataSource.getRepository(Client_entity_1.ClientEntity);
        const { id } = req.params;
        yield clientRep.delete(+{ id });
        res.status(200).end();
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
});
exports.deleteClient = deleteClient;
const createClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientRep = data_source_1.dataSource.getRepository(Client_entity_1.ClientEntity);
        const { client } = req.body;
        clientRep.create(Object.assign({}, client));
        res.status(200).end();
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
});
exports.createClient = createClient;
