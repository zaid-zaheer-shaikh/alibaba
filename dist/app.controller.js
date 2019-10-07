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
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const app_service_1 = require("./app.service");
const create_get_username_dto_1 = require("./dto/create-get-username.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    checkUsername(createObj) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appService.checkUsername(createObj);
            if (result) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    checkHello() {
        return __awaiter(this, void 0, void 0, function* () {
            return 'Hello world';
        });
    }
    getHello() {
        return __awaiter(this, void 0, void 0, function* () {
            return "namer";
        });
    }
    uploadFile(file, username) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(username);
            const result = yield this.appService.setBinaryImage(username, file.filename);
            return result;
        });
    }
    getBinaryImage(username, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(username);
            res.sendFile(`/Users/zaidshaikh/votexserver/src/images/b39ea10ef50212d7161b2fd6a28ef4104zaid.png`);
        });
    }
};
__decorate([
    common_1.Post('checkusername'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_get_username_dto_1.CreateGetUsernameDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "checkUsername", null);
__decorate([
    common_1.Get('checkHello'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "checkHello", null);
__decorate([
    common_1.Get('namer'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getHello", null);
__decorate([
    common_1.Post(':username'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file')),
    __param(0, common_1.UploadedFile()), __param(1, common_1.Param('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "uploadFile", null);
__decorate([
    common_1.Get(':username'),
    __param(0, common_1.Param('username')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getBinaryImage", null);
AppController = __decorate([
    common_1.Controller('binaryImage'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map