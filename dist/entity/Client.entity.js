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
exports.ClientEntity = void 0;
const typeorm_1 = require("typeorm");
const ContactPerson_entity_1 = require("./ContactPerson.entity");
let ClientEntity = class ClientEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ClientEntity.prototype, "ID", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    __metadata("design:type", String)
], ClientEntity.prototype, "LastName", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    __metadata("design:type", String)
], ClientEntity.prototype, "Name", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    __metadata("design:type", String)
], ClientEntity.prototype, "MiddleName", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    __metadata("design:type", String)
], ClientEntity.prototype, "Address", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    __metadata("design:type", String)
], ClientEntity.prototype, "PhoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar"),
    __metadata("design:type", String)
], ClientEntity.prototype, "KindOfProperty", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ContactPerson_entity_1.ContactPersonEntity, (contactPerson) => contactPerson.Clients),
    __metadata("design:type", ContactPerson_entity_1.ContactPersonEntity)
], ClientEntity.prototype, "ContactPerson", void 0);
ClientEntity = __decorate([
    (0, typeorm_1.Entity)("Client")
], ClientEntity);
exports.ClientEntity = ClientEntity;
