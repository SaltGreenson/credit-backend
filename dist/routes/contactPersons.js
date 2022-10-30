"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactPersons_1 = require("../controllers/contactPersons");
const router = (0, express_1.Router)();
router.get('/', contactPersons_1.getContactPersons);
exports.default = router;
