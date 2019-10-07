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
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const app_schema_1 = require("./app.schema");
const auth_module_1 = require("./auth/auth.module");
const graphql_1 = require("@nestjs/graphql");
const app_resolver_1 = require("./app.resolver");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let AppModule = class AppModule {
    constructor() {
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: 'schema.gql',
                debug: false,
                playground: true,
                context: ({ req }) => __awaiter(this, void 0, void 0, function* () {
                    const token = req.headers.authorization || '';
                    const username = req.headers.username || '';
                    return { username };
                }),
            }),
            mongoose_1.MongooseModule.forRoot("mongodb://zaid123:chemistry1Zu!@ds121295.mlab.com:21295/oneminute", { useNewUrlParser: true }),
            mongoose_1.MongooseModule.forFeature([{ name: 'App', schema: app_schema_1.AppSchema, }]),
            auth_module_1.AuthModule,
            platform_express_1.MulterModule.register({
                storage: multer_1.diskStorage({
                    destination: './src/images/',
                    filename: (req, file, cb) => {
                        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                        cb(null, `${randomName}${file.originalname}`);
                    },
                }),
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, app_resolver_1.AppResolver],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map