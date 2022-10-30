"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditEntity = void 0;
const typeorm_1 = require("typeorm");
const Client_entity_1 = require("./Client.entity");
const Payment_entity_1 = require("./Payment.entity");
const Forfeit_entity_1 = require("./Forfeit.entity");
let CreditEntity = class CreditEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CreditEntity.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Client_entity_1.ClientEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Client_entity_1.ClientEntity)
], CreditEntity.prototype, "Client", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Forfeit_entity_1.ForfeitEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Forfeit_entity_1.ForfeitEntity)
], CreditEntity.prototype, "Forfeit", void 0);
__decorate([
    (0, typeorm_1.Column)("float"),
    __metadata("design:type", Number)
], CreditEntity.prototype, "Sum", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Number)
], CreditEntity.prototype, "DateOfIssue", void 0);
__decorate([
    (0, typeorm_1.Column)("float"),
    __metadata("design:type", Number)
], CreditEntity.prototype, "RemainingFunds", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Number)
], CreditEntity.prototype, "DateOfActualReturn", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Payment_entity_1.PaymentEntity, (payment) => payment.Credit),
    __metadata("design:type", Array)
], CreditEntity.prototype, "Payments", void 0);
CreditEntity = __decorate([
    (0, typeorm_1.Entity)("Credit")
], CreditEntity);
exports.CreditEntity = CreditEntity;
