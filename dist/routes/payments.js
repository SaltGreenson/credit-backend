"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payments_1 = require("../controllers/payments");
const router = (0, express_1.Router)();
router.get('/', payments_1.getPayments);
exports.default = router;
