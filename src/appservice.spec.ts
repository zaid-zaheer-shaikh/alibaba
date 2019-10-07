import { AppService } from './app.service';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { AppResolver } from './app.resolver';

describe('Cats', async () => {

    let app: INestApplication;
    let appservice: AppService;
    let appresolver: AppResolver;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
          imports: [AppModule],
        })
          .overrideProvider(AppService)
          .useValue(appservice)
          .compile();
        appservice = await module.get<AppService>(AppService);
        appresolver = await module.get<AppResolver>(AppResolver);
        app = await module.createNestApplication();
        await app.init();
      });
    describe('setPassowrd', () => {
           test('sets the token in the database', async () => {
                expect(await appservice.setPassword('jumper', 'kappor')).toBe(true);
                expect(await appservice.getPassword('kappor')).toBe('jumper');
           });
           test('returns false if the username doesnt not exist', async () => {

               await expect(appservice.setPassword('jumper', 'kappor1')).rejects.toThrow(Error);
          });
      });
    describe('setPassowrd', () => {
          test('sets the token in the database', async () => {
               expect(await appservice.setPassword('jumper', 'kappor')).toBe(true);
               expect(await appservice.getPassword('kappor')).toBe('jumper');
          });
          test('returns false if the username doesnt not exist', async () => {

              await expect(appservice.setPassword('jumper', 'kappor1')).rejects.toThrow(Error);
         });
     });
    describe('setPhone', () => {
          test('sets the PhoneNumber in the database', async () => {
               expect(await appservice.setPhoneNumber(1234, 'kappor')).toBe(true);
               expect(await appservice.getPhonenumber('kappor')).toBe(1234);
          });
          test('returns false if the username doesnt not exist', async () => {
               await expect(appservice.setPhoneNumber(1234, 'kappor1')).rejects.toThrow(Error);

          });
      });
    describe('setCode', () => {
          test('sets the phoneNumber in the database', async () => {
               expect(await appservice.setCode('1234', 'kappor')).toBe(true);
               expect(await appservice.getCode('kappor')).toBe('1234');
          });
          test('returns false if the username doesnt not exist', async () => {
               await expect(appservice.setCode('jumper', 'kappor1')).rejects.toThrow(Error);
          });
      });
    describe('setTempNumber', () => {
          test('sets the Tempnumber in the database', async () => {
               expect(await appservice.setTempNumber(1234, 'kappor')).toBe(true);
               expect(await appservice.getTempNumber('kappor')).toBe(1234);
          });
          test('returns false if the username doesnt not exist', async () => {
               await expect(appservice.setTempNumber(1234, 'kappor1')).rejects.toThrow(Error);
          });
      });
    describe('setBinaryVote', () => {
     const binary = {
          statement: 'Best footballer',
          option1: 'Messi',
          option2: 'Ronaldo',
     };
     test('sets the binaryVote in the database', async () => {

               expect(await appservice.setBinaryVote(binary, 'kappor')).toBe(true);
               expect(await appservice.getBinaryVote('kappor')).toEqual(binary);
          });
     test('returns false if the username doesnt not exist', async () => {
               await expect(appservice.setBinaryVote(binary, 'kappor1')).rejects.toThrow(Error);
          });
      });
    describe('setBinaryImage', () => {
          test('sets the binaryImage in the database', async () => {
               expect(await appservice.setBinaryImage('1234', 'kappor')).toBe(true);
               expect(await appservice.getBinaryImage('kappor')).toBe('1234');
          });
          test('returns false if the username doesnt not exist', async () => {
               await expect(appservice.setBinaryImage('jumper', 'kappor1')).rejects.toThrow(Error);
          });
      });
    describe('setToken', () => {
     test('sets the voter count in the database', async () => {
          expect(await appservice.setToken('namer', 'kappor')).toBe(true);
          expect(await appservice.getToken('kappor')).toBe('namer');
     });
     test('returns false if the username doesnt not exist', async () => {
               await expect(appservice.setToken('jumper', 'kappor1')).rejects.toThrow(Error);
     });
      });
    describe('setVoters', () => {
          test('sets the voter count in the database', async () => {
               expect(await appservice.setVoteCount(['namer'], 'kappor')).toBe(true);
               expect(await appservice.getVoteCount('kappor')).toBe(1);
          });
          test('returns false if the username doesnt not exist', async () => {
               await expect(appservice.setVoteCount(['jumper'], 'kappor1')).rejects.toThrow(Error);
          });
      });

    afterAll(async () => {
    await app.close();
  });

});
