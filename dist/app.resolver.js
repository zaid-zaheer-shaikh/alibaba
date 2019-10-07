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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const app_service_1 = require("./app.service");
const create_get_username_dto_1 = require("./dto/create-get-username.dto");
const create_get_username_dto_2 = require("./dto/create-get-username.dto");
const common_1 = require("./common");
let AppResolver = class AppResolver {
    constructor(appService) {
        this.appService = appService;
    }
    registerUser(user, context) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appService.createRegistration(user);
            return { firstname: 'zaid', lastname: result.lastname, username: result.username, birthday: result.birthday, password: result.password };
        });
    }
    setToken(token, context) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appService.setToken('kappor', token).catch(error => error);
            return result;
        });
    }
    binaryVote(binaryVote, context) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appService.setBinaryVote(binaryVote, context.username).catch(error => error);
            return result;
        });
    }
    getBinaryVote(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appService.getBinaryVote(username).catch(error => error);
            return result;
        });
    }
    sendMessage(tempNumber, context) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appService.setTempNumber(tempNumber, context.username).catch(error => error);
            if (result instanceof Error) {
                const random = common_1.codeGenerate(4);
                const codeResult = yield this.appService.setCode(random, context.username).catch(error => error);
                if (codeResult instanceof Error) {
                    const data = {
                        body: `Your one time verification code is ${random}`,
                        to: `91${tempNumber}`,
                    };
                    common_1.sendMessageClient(data);
                    return true;
                }
                return codeResult;
            }
            return result;
        });
    }
    verifyCode(code, context) {
        return __awaiter(this, void 0, void 0, function* () {
            const appCode = yield this.appService.getCode(context.username);
            if (appCode && appCode === code) {
                return true;
            }
            return new Error('Code not found');
        });
    }
    resendCode(context) {
        return __awaiter(this, void 0, void 0, function* () {
            const tempNumber = yield this.appService.getTempNumber(context.username);
            if (tempNumber) {
                const random = common_1.codeGenerate(4);
                const codeResult = yield this.appService.setCode(random, context.username);
                if (codeResult) { }
                const data = {
                    body: `Your one time verification code is ${random}`,
                    to: `91${tempNumber}`,
                };
                common_1.sendMessageClient(data);
                return true;
            }
        });
    }
    resetPassword(phone, context) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appService.getPhonenumber(context.username);
            if (result === phone) {
                const random = common_1.codeGenerate(4);
                const codeResult = yield this.appService.setCode(random, context.username);
                const data = {
                    body: `Your one time verification code is ${random}`,
                    to: `91${result}`,
                };
                common_1.sendMessageClient(data);
                return true;
            }
            return false;
        });
    }
    setPassword(password, context) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appService.setPassword(password, context.username).catch(error => error);
            return result;
        });
    }
};
__decorate([
    graphql_1.Mutation(() => create_get_username_dto_1.CreateGetUsernameDto),
    __param(0, graphql_1.Args({ name: 'user', type: () => create_get_username_dto_1.CreateGetUsernameDto })), __param(1, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_get_username_dto_1.CreateGetUsernameDto, Object]),
    __metadata("design:returntype", Promise)
], AppResolver.prototype, "registerUser", null);
__decorate([
    graphql_1.Mutation(() => Boolean),
    __param(0, graphql_1.Args({ name: 'token', type: () => String })), __param(1, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppResolver.prototype, "setToken", null);
__decorate([
    graphql_1.Mutation(() => Boolean),
    __param(0, graphql_1.Args({ name: 'binaryVote', type: () => create_get_username_dto_2.binaryVote })), __param(1, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppResolver.prototype, "binaryVote", null);
__decorate([
    graphql_1.Query(() => create_get_username_dto_2.binaryVote),
    __param(0, graphql_1.Args({ name: 'username', type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppResolver.prototype, "getBinaryVote", null);
__decorate([
    graphql_1.Mutation(() => Boolean),
    __param(0, graphql_1.Args({ name: 'tempNumber', type: () => Number })), __param(1, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppResolver.prototype, "sendMessage", null);
__decorate([
    graphql_1.Mutation(() => Boolean),
    __param(0, graphql_1.Args({ name: 'code', type: () => String })), __param(1, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppResolver.prototype, "verifyCode", null);
__decorate([
    graphql_1.Mutation(() => Boolean),
    __param(0, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppResolver.prototype, "resendCode", null);
__decorate([
    graphql_1.Mutation(() => Boolean),
    __param(0, graphql_1.Args({ name: 'phone', type: () => String })), __param(1, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppResolver.prototype, "resetPassword", null);
__decorate([
    graphql_1.Mutation(() => Boolean),
    __param(0, graphql_1.Args({ name: 'password', type: () => String })), __param(1, graphql_1.Context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppResolver.prototype, "setPassword", null);
AppResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppResolver);
exports.AppResolver = AppResolver;
//# sourceMappingURL=app.resolver.js.map