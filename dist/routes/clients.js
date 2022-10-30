"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clients_1 = require("../controllers/clients");
const router = (0, express_1.Router)();
router.get('/', clients_1.getClients);
router.delete('/delete/:id', clients_1.deleteClient);
router.post('/change', clients_1.changeClient);
exports.default = router;
