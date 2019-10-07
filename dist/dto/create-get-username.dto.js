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
const type_graphql_1 = require("type-graphql");
let CreateGetUsernameDto = class CreateGetUsernameDto {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreateGetUsernameDto.prototype, "firstname", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreateGetUsernameDto.prototype, "lastname", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreateGetUsernameDto.prototype, "birthday", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreateGetUsernameDto.prototype, "username", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreateGetUsernameDto.prototype, "password", void 0);
CreateGetUsernameDto = __decorate([
    type_graphql_1.ObjectType(),
    type_graphql_1.InputType('Namer')
], CreateGetUsernameDto);
exports.CreateGetUsernameDto = CreateGetUsernameDto;
let Jumper22 = class Jumper22 {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Jumper22.prototype, "firstname", void 0);
Jumper22 = __decorate([
    type_graphql_1.ObjectType(),
    type_graphql_1.InputType('Jumper')
], Jumper22);
exports.Jumper22 = Jumper22;
let loginCheck = class loginCheck {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], loginCheck.prototype, "username", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], loginCheck.prototype, "password", void 0);
loginCheck = __decorate([
    type_graphql_1.ObjectType(),
    type_graphql_1.InputType('login')
], loginCheck);
exports.loginCheck = loginCheck;
let binaryVote = class binaryVote {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], binaryVote.prototype, "statement", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], binaryVote.prototype, "option1", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], binaryVote.prototype, "option2", void 0);
binaryVote = __decorate([
    type_graphql_1.ObjectType(),
    type_graphql_1.InputType('binary')
], binaryVote);
exports.binaryVote = binaryVote;
let voteResult = class voteResult {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], voteResult.prototype, "hostUsername", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], voteResult.prototype, "username", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], voteResult.prototype, "selection", void 0);
voteResult = __decorate([
    type_graphql_1.ObjectType(),
    type_graphql_1.InputType('voteResult11')
], voteResult);
exports.voteResult = voteResult;
let token = class token {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], token.prototype, "token", void 0);
token = __decorate([
    type_graphql_1.ObjectType(),
    type_graphql_1.InputType('token1')
], token);
exports.token = token;
let criteria = class criteria {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], criteria.prototype, "location", void 0);
criteria = __decorate([
    type_graphql_1.ObjectType(),
    type_graphql_1.InputType('criteria1')
], criteria);
exports.criteria = criteria;
let createVote = class createVote {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", criteria)
], createVote.prototype, "criteria", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", binaryVote)
], createVote.prototype, "binaryVote", void 0);
createVote = __decorate([
    type_graphql_1.ObjectType(),
    type_graphql_1.InputType('createVote1')
], createVote);
exports.createVote = createVote;
//# sourceMappingURL=create-get-username.dto.js.map