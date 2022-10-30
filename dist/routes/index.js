"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const credits_1 = __importDefault(require("./credits"));
const clients_1 = __importDefault(require("./clients"));
const payments_1 = __importDefault(require("./payments"));
const forfeits_1 = __importDefault(require("./forfeits"));
const contactPersons_1 = __importDefault(require("./contactPersons"));
const router = (0, express_1.Router)();
router.use('/credits', credits_1.default);
router.use('/clients', clients_1.default);
router.use('/payments', payments_1.default);
router.use('/forfeits', forfeits_1.default);
router.use('/contact-persons', contactPersons_1.default);
exports.default = router;
