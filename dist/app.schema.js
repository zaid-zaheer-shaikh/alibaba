"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const binaryVoteResult = new mongoose.Schema({
    username: String,
    selection: String,
});
const criteria = new mongoose.Schema({
    location: String,
});
const binaryVote = new mongoose.Schema({
    imager: String,
    statement: String,
    option1: String,
    option2: String,
    criteria,
});
exports.AppSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    tempNumber: Number,
    phone: Number,
    code: String,
    lastname: String,
    birthday: String,
    username: {
        type: String,
        required: [true, 'Username is required'],
    },
    password: { type: String },
    token: String,
    location: String,
    votes: {
        voteCount: Number,
        binaryVote,
    },
    binaryVoteResult: [binaryVoteResult],
}, { strict: false });
function duplicate(error, doc, next) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (error.code === 11000) {
                reject(new Error('Duplicate key found'));
            }
            else {
                resolve(true);
            }
        });
    });
}
exports.AppSchema.post('save', function (error, doc, next) {
    return duplicate(error, doc, next);
});
//# sourceMappingURL=app.schema.js.map