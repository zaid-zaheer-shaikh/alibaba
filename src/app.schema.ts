import * as mongoose from 'mongoose';
import { resolve } from 'url';
import { Next } from '@nestjs/common';
import { rejects } from 'assert';

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

export const AppSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  tempNumber: Number ,
  phone: Number,
  code: String,
  lastname: String,
  birthday: String,
  username: {
    type: String,
    required: [true, 'Username is required'],
  },
  password: {type: String},
  token: String,
  location: String,
  votes: {
  voteCount: Number,
  binaryVote,
  },
  binaryVoteResult: [binaryVoteResult],
}, {strict: false});

async function duplicate(error, doc, next)  {
  return new Promise((resolve, reject) => {
    if (error.code === 11000) {

      reject(new Error('Duplicate key found'));
    } else {
      resolve(true);
    }
 });
}
AppSchema.post('save', function(error, doc, next) {
   return duplicate(error, doc, next);
});

