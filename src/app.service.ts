import { Injectable, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { Registration } from './interface/registration.interface';
import { CreateGetUsernameDto, loginCheck, binaryVote, voteResult, criteria } from './dto/create-get-username.dto';
import { AppModule } from 'dist/app.module';
import Expo from 'expo-server-sdk';
import { strict } from 'assert';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('App') private readonly appModel: Model<Registration>,
  ) {}

  async createRegistration(createObj: CreateGetUsernameDto): Promise<any> {
    const obj = new this.appModel(createObj);
    const result = await obj.save().catch(error => error.message);
    if (typeof result !== 'string') {
        return true;
    }
    return false;
  }

  async checkUsername(createObj: CreateGetUsernameDto): Promise<any> {
    const result = await this.appModel.findOne(
      { username: createObj.username },
      (err, docs) => {
        if (err) {
          return err;
        }
        return docs;
      },
    );
    return result;
  }

  async setCriteria(username: string, criteria: criteria ): Promise<boolean> {
  const result = await this.appModel.findOne({username});
  result.votes.binaryVote.criteria = criteria;
  await result.save();
  if (result) {
  return true;
  }
  return false;
  }
  async getCriteria(username: string): Promise<criteria> {
    const result = await this.appModel.findOne({username});
    return result.votes.binaryVote.criteria;
  }
  async generateVoters(username: string) {
    const result = await this.getCriteria(username);
    const voters = await this.appModel.find({location: result.location});
    return voters;
  }
  async setVoteCount(voters: any[], username  ): Promise <boolean|any> {
    const length = voters.length;
    const result = await this.appModel.findOne({username});
    if (result) {
      result.votes.voteCount = length;
      const finaler = await result.save().catch(error => error);
      if (  finaler instanceof Error) {
         return finaler;
      }
      return true;
    }
    throw new Error('Username doesnt exist');
  }
  async getVoteCount(username: string ): Promise<number|boolean> {
    const result = await this.appModel.findOne({username});
    if (result) {
    return result.votes.voteCount;
    }
    return false;
  }
  async getBinaryResult(username: string): Promise <any[]> {
    const result = await this.appModel.findOne({username});
    return result.votes.binaryVoteResult;
  }
  async checkVotingCompleted(username) {
    const result = await this.appModel.findOne({username});
    const voteCount = await this.appModel.getVoteCount(username);
    const binaryVoteResult = await this.appModel.getBinaryResult(username);
    if (voteCount === binaryVoteResult.length) {
      return true;
    } else {
      return false;
    }
  }
  async setToken(token: string, username: string ): Promise<boolean|any> {
    const result = await this.appModel.findOne({username});
    if (result) {
      result.token = token;
      const finaler = await result.save().catch(error => error);
      if (  finaler instanceof Error) {
         return finaler;
      }
      return true;
    }
    throw new Error('Username doesnt exist');
  }
  async getToken(username: string): Promise <string|boolean> {
     const result = await this.appModel.findOne({username});
     if (result) {
        return result.token;
     }
     return false;
  }
  async setBinaryImage(imageString: string, username: string ): Promise<any> {
    const result = await this.appModel.findOne({username});
    if (result) {
  result.votes.binaryVote.imager = imageString;
  const finaler = await result.save().catch(error => error);
  if (  finaler instanceof Error) {
     return finaler;
  }
  return true;
}
    throw new Error('Username doesnt exist');
  }
  async getBinaryImage(username: string): Promise<string|boolean> {
    const result = await this.appModel.findOne({username});
    if (result) {
    return result.votes.binaryVote.imager;
    }
    return false;
  }
  async setBinaryVote(binaryVote: binaryVote, username): Promise<boolean|any> {

  const result = await this.appModel.findOne({username});
  if (result) {
   result.votes.binaryVote = binaryVote;
   const finaler = await result.save().catch(error => error);
   if (  finaler instanceof Error) {
      return finaler;
   }
   return true;
}
  throw new Error('Username doesnt exist');

}
 async getBinaryVote(username: string): Promise<binaryVote|boolean> {
   const result = await this.appModel.findOne({username});
   if (result) {
    const binaryVoteResult = {
      statement: result.votes.binaryVote.statement,
      option1: result.votes.binaryVote.option1,
      option2: result.votes.binaryVote.option2,
    };
    return binaryVoteResult;
   }
   return false;
 }
 async setTempNumber(tempNumber: number, username: string): Promise<boolean|any> {
  const result = await this.appModel.findOne({username});
  if (result) {
    result.tempNumber = tempNumber;
    const finaler = await result.save().catch(error => error);
    if (  finaler instanceof Error) {
     return finaler;
  }
    return true;
  }
  throw new Error('Username doesnt exist');
 }
 async getTempNumber(username: string): Promise<number|boolean> {
  const result = await this.appModel.findOne({username});
  if (result) {
  return result.tempNumber;
   }
  return false;
}
async setPhoneNumber(phoneNumber: number, username: string): Promise<boolean|any> {
  const result = await this.appModel.findOne({username});
  if (result) {
  result.phone = phoneNumber;
  const finaler = await result.save().catch(error => error);
  if (  finaler instanceof Error) {
     return finaler;
  }
  return true;
}
  throw new Error('Username doesnt exist');
 }

 async setCode(code: string, username: string): Promise<boolean|any > {
  const result = await this.appModel.findOne({username});
  if (result) {
    result.code = code;
    const finaler = await result.save().catch(error => error);
    if (  finaler instanceof Error) {
       return finaler;
    }
    return true;
  }
  throw new Error('Username doesnt exist');
 }
async getPhonenumber(username: string): Promise<string|boolean> {
  const result = await this.appModel.findOne({username});
  if (result) {
  return result.phone;
   }
  return false;
}

 async getCode(username: string): Promise<string|boolean> {
  const result = await this.appModel.findOne({username});
  if (result) {
  return result.code;
   }
  return false;
}

async setPassword(password: string, username: string): Promise<boolean|object> {
const result = await this.appModel.findOne({username});
if (result) {
  result.password = password;
  const finaler = await result.save().catch(error => error);
  if (  finaler instanceof Error) {
     return finaler;
  }
  return true;
}
throw new Error('Username doesnt exist');

}
async getPassword(username: string): Promise<string|any> {
   const result = await this.appModel.findOne({username});
   if (result) {
   return result.password;
   }
   return new Error('Username not found');
}
}
