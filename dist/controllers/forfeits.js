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
exports.getForfeits = void 0;
const data_source_1 = require("../data-source");
const Forfeit_entity_1 = require("../entity/Forfeit.entity");
const getForfeits = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const forfeitRep = data_source_1.dataSource.getRepository(Forfeit_entity_1.ForfeitEntity);
    const forfeits = yield forfeitRep.find();
    res.json(forfeits);
});
exports.getForfeits = getForfeits;