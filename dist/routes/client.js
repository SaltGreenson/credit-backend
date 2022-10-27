"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("../controllers/client");
const router = (0, express_1.Router)();
router.get('/', client_1.getClients);
exports.default = router;
