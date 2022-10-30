"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const forfeits_1 = require("../controllers/forfeits");
const router = (0, express_1.Router)();
router.get('/', forfeits_1.getForfeits);
exports.default = router;
