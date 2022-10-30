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
exports.ContactPersonEntity = void 0;
const typeorm_1 = require("typeorm");
const Client_entity_1 = require("./Client.entity");
let ContactPersonEntity = class ContactPersonEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ContactPersonEntity.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    __metadata("design:type", String)
], ContactPersonEntity.prototype, "LastName", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    __metadata("design:type", String)
], ContactPersonEntity.prototype, "Name", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    __metadata("design:type", String)
], ContactPersonEntity.prototype, "MiddleName", void 0);
__decorate([
    (0, typeorm_1.Column)("float"),
    __metadata("design:type", String)
], ContactPersonEntity.prototype, "MonthlySalary", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Client_entity_1.ClientEntity, (client) => client.ContactPerson),
    __metadata("design:type", Array)
], ContactPersonEntity.prototype, "Clients", void 0);
ContactPersonEntity = __decorate([
    (0, typeorm_1.Entity)("ContactPerson")
], ContactPersonEntity);
exports.ContactPersonEntity = ContactPersonEntity;
