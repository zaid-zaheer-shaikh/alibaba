import {  Field,  ObjectType, InputType,  } from 'type-graphql';

@ObjectType()
@InputType('Namer')
export class CreateGetUsernameDto {

  @Field()
  firstname: string;
  @Field()
  lastname: string;
  @Field()
  birthday: string;
  @Field()
  username: string;
  @Field()
  password: string;
}

@ObjectType()
@InputType('Jumper')
export class Jumper22 {
  @Field()
  firstname: string;
}
@ObjectType()
@InputType('login')
export class loginCheck {
  @Field()
  username: string;
  @Field()
  password: string;
}
@ObjectType()
@InputType('binary')
export class binaryVote {
  
  @Field()
  statement: string;
  @Field()
  option1: string;
  @Field()
  option2: string;
}

@ObjectType()
@InputType('voteResult11')
export class voteResult {
  @Field()
  hostUsername: string;
  @Field()
  username: string;
  @Field()
  selection: string;
}

@ObjectType()
@InputType('token1')
export class token {
@Field()
token: string;
}
@ObjectType()
@InputType('criteria1')
export class criteria {

@Field()
location: string;
}
@ObjectType()
@InputType('createVote1')
export class createVote {
  @Field()
  criteria: criteria;
  @Field()
  binaryVote: binaryVote;
}
