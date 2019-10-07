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
var _a;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AppService = class AppService {
    constructor(appModel) {
        this.appModel = appModel;
    }
    createRegistration(createObj) {
        return __awaiter(this, void 0, void 0, function* () {
            const obj = new this.appModel(createObj);
            const result = yield obj.save().catch(error => error.message);
            if (typeof result !== 'string') {
                return true;
            }
            return false;
        });
    }
    checkUsername(createObj) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appModel.findOne({ username: createObj.username }, (err, docs) => {
                if (err) {
                    return err;
                }
                return docs;
            });
            return result;
        });
    }
    setCriteria(username, criteria) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appModel.findOne({ username });
            result.votes.binaryVote.criteria = criteria;
            yield result.save();
            if (result) {
                return true;
            }
            return false;
        });
    }
    getCriteria(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appModel.findOne({ username });
            return result.votes.binaryVote.criteria;
        });
    }
    generateVoters(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.getCriteria(username);
            const voters = yield this.appModel.find({ location: result.location });
            return voters;
        });
    }
    setVoteCount(voters, username) {
        return __awaiter(this, void 0, void 0, function* () {
            const length = voters.length;
            const result = yield this.appModel.findOne({ username });
            if (result) {
                result.votes.voteCount = length;
                const finaler = yield result.save().catch(error => error);
                if (finaler instanceof Error) {
                    return finaler;
                }
                return true;
            }
            throw new Error('Username doesnt exist');
        });
    }
    getVoteCount(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appModel.findOne({ username });
            if (result) {
                return result.votes.voteCount;
            }
            return false;
        });
    }
    getBinaryResult(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appModel.findOne({ username });
            return result.votes.binaryVoteResult;
        });
    }
    checkVotingCompleted(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appModel.findOne({ username });
            const voteCount = yield this.appModel.getVoteCount(username);
            const binaryVoteResult = yield this.appModel.getBinaryResult(username);
            if (voteCount === binaryVoteResult.length) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    setToken(token, username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appModel.findOne({ username });
            if (result) {
                result.token = token;
                const finaler = yield result.save().catch(error => error);
                if (finaler instanceof Error) {
                    return finaler;
                }
                return true;
            }
            throw new Error('Username doesnt exist');
        });
    }
    getToken(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appModel.findOne({ username });
            if (result) {
                return result.token;
            }
            return false;
        });
    }
    setBinaryImage(imageString, username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appModel.findOne({ username });
            if (result) {
                result.votes.binaryVote.imager = imageString;
                const finaler = yield result.save().catch(error => error);
                if (finaler instanceof Error) {
                    return finaler;
                }
                return true;
            }
            throw new Error('Username doesnt exist');
        });
    }
    getBinaryImage(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appModel.findOne({ username });
            if (result) {
                return result.votes.binaryVote.imager;
            }
            return false;
        });
    }
    setBinaryVote(binaryVote, username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appModel.findOne({ username });
            if (result) {
                result.votes.binaryVote = binaryVote;
                const finaler = yield result.save().catch(error => error);
                if (finaler instanceof Error) {
                    return finaler;
                }
                return true;
            }
            throw new Error('Username doesnt exist');
        });
    }
    getBinaryVote(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appModel.findOne({ username });
            if (result) {
                const binaryVoteResult = {
                    statement: result.votes.binaryVote.statement,
                    option1: result.votes.binaryVote.option1,
                    option2: result.votes.binaryVote.option2,
                };
                return binaryVoteResult;
            }
            return false;
        });
    }
    setTempNumber(tempNumber, username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appModel.findOne({ username });
            if (result) {
                result.tempNumber = tempNumber;
                const finaler = yield result.save().catch(error => error);
                if (finaler instanceof Error) {
                    return finaler;
                }
                return true;
            }
            throw new Error('Username doesnt exist');
        });
    }
    getTempNumber(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appModel.findOne({ username });
            if (result) {
                return result.tempNumber;
            }
            return false;
        });
    }
    setPhoneNumber(phoneNumber, username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appModel.findOne({ username });
            if (result) {
                result.phone = phoneNumber;
                const finaler = yield result.save().catch(error => error);
                if (finaler instanceof Error) {
                    return finaler;
                }
                return true;
            }
            throw new Error('Username doesnt exist');
        });
    }
    setCode(code, username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appModel.findOne({ username });
            if (result) {
                result.code = code;
                const finaler = yield result.save().catch(error => error);
                if (finaler instanceof Error) {
                    return finaler;
                }
                return true;
            }
            throw new Error('Username doesnt exist');
        });
    }
    getPhonenumber(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appModel.findOne({ username });
            if (result) {
                return result.phone;
            }
            return false;
        });
    }
    getCode(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appModel.findOne({ username });
            if (result) {
                return result.code;
            }
            return false;
        });
    }
    setPassword(password, username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appModel.findOne({ username });
            if (result) {
                result.password = password;
                const finaler = yield result.save().catch(error => error);
                if (finaler instanceof Error) {
                    return finaler;
                }
                return true;
            }
            throw new Error('Username doesnt exist');
        });
    }
    getPassword(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.appModel.findOne({ username });
            if (result) {
                return result.password;
            }
            return new Error('Username not found');
        });
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('App')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map