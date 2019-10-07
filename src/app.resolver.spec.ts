import { AppService } from './app.service';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { AppResolver } from './app.resolver';

describe('app resolver', async () => {

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

    describe('set password', () => {
         test('Sets the password in the database', async () => {
              expect(await appresolver.setPassword('chemistry', {username: 'kappor'})).toBe(true);
              expect(await appservice.getPassword('kappor')).toBe('chemistry');
         });
         test('Returns false if the usename doesnt exist', async () => {
             expect(await appresolver.setPassword('chemistry', {username: 'kappor1'})).toBeInstanceOf(Error);
         });

      });
    describe('BinaryVote', () => {
        const binary = {
           statement: 'Best footbalelr',
           option1: 'Ronaldo',
           option2: 'Messi',
        };
        test('Sets BinaryVote in the database', async () => {
             expect(await appresolver.binaryVote(binary, {username: 'kappor'})).toBe(true);
             expect(await appservice.getBinaryVote('kappor')).toEqual(binary);
        });
        test('Throws error if the usename doesnt exist', async () => {
            expect(await appresolver.binaryVote(binary, {username: 'kappor1'})).toBeInstanceOf(Error);
        });

     });

    afterAll(async () => {
    await app.close();
  });

});
