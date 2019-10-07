import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { Int, ObjectType, Field } from 'type-graphql';
import { AppService } from './app.service';
import { CreateGetUsernameDto, Jumper22, voteResult, token, criteria, createVote } from './dto/create-get-username.dto';
import { loginCheck, binaryVote } from './dto/create-get-username.dto';
import { HighlightSpanKind, ListFormat } from 'typescript';
import { GraphQLUpload } from 'graphql-upload';
import {codeGenerate, sendMessageClient} from './common';

@Resolver()
export class AppResolver {
    constructor(private readonly appService: AppService,

     ) { }

    @Mutation(() => CreateGetUsernameDto)
    async registerUser(@Args({name: 'user', type: () => CreateGetUsernameDto}) user: CreateGetUsernameDto, @Context() context) {
         const result = await this.appService.createRegistration(user);
         return {firstname: 'zaid', lastname: result.lastname, username: result.username, birthday: result.birthday, password: result.password};
    }

    @Mutation(() => Boolean)
    async setToken(@Args({name: 'token', type: () => String}) token: string, @Context() context) {
    const result = await this.appService.setToken('kappor', token).catch(error => error);
    return result;
    }

    @Mutation(() => Boolean)
    async binaryVote(@Args({name: 'binaryVote', type: () => binaryVote}) binaryVote, @Context() context) {
        const result = await this.appService.setBinaryVote(binaryVote, context.username ).catch(error => error);
        return result;
    }
    @Query(() => binaryVote)
    async getBinaryVote(@Args({name: 'username', type: () => String}) username) {
        const result = await this.appService.getBinaryVote(username).catch(error => error);
        return result;
    }
    @Mutation(() => Boolean)
    async sendMessage(@Args({name: 'tempNumber', type: () => Number}) tempNumber, @Context() context) {
      const result = await this.appService.setTempNumber(tempNumber, context.username).catch(error => error);
      if (result !instanceof Error) {
        const random = codeGenerate(4);
        const codeResult = await this.appService.setCode(random, context.username).catch(error => error); 
        if (codeResult ! instanceof Error) {
            const data = {
                body: `Your one time verification code is ${random}`,
                to: `91${tempNumber}`,
            };
            sendMessageClient(data);
            return true;
        }
        return codeResult;
      }
      return result;
    }
    @Mutation(() => Boolean)
    async verifyCode(@Args({name: 'code', type: () => String}) code: string, @Context() context) {
     const appCode = await this.appService.getCode(context.username);
     if (appCode && appCode === code) {
         return true;
     }
     return new Error('Code not found');
    }

    @Mutation(() => Boolean)
    async resendCode(@Context() context) {
        const tempNumber = await this.appService.getTempNumber(context.username);
        if (tempNumber) {
            const random = codeGenerate(4);
            const codeResult = await this.appService.setCode(random, context.username);
            if (codeResult) { }
            const data = {
               body: `Your one time verification code is ${random}`,
               to: `91${tempNumber}`,
           };
            sendMessageClient(data);
            return true;
        }

    }
    @Mutation(() => Boolean)
    async resetPassword(@Args({name: 'phone', type: () => String}) phone: string, @Context() context) {
       const result = await this.appService.getPhonenumber(context.username);
       if (result === phone) {
        const random = codeGenerate(4);
        const codeResult = await this.appService.setCode(random, context.username);
        const data = {
           body: `Your one time verification code is ${random}`,
           to: `91${result}`,
       };
        sendMessageClient(data);
        return true;
       }
       return false;
    }
    @Mutation(() => Boolean)
    async setPassword(@Args({name: 'password', type: () => String}) password: string, @Context() context) {
    const result = await this.appService.setPassword(password, context.username).catch(error => error )
    return result;
    }
}
