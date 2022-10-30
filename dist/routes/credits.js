"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const credits_1 = require("../controllers/credits");
const router = (0, express_1.Router)();
router.get('/', credits_1.getCredits);
exports.default = router;
