import { AppService } from './app.service';
import { CreateGetUsernameDto } from './dto/create-get-username.dto';
export declare class AppResolver {
    private readonly appService;
    constructor(appService: AppService);
    registerUser(user: CreateGetUsernameDto, context: any): Promise<{
        firstname: string;
        lastname: any;
        username: any;
        birthday: any;
        password: any;
    }>;
    setToken(token: string, context: any): Promise<any>;
    binaryVote(binaryVote: any, context: any): Promise<any>;
    getBinaryVote(username: any): Promise<any>;
    sendMessage(tempNumber: any, context: any): Promise<any>;
    verifyCode(code: string, context: any): Promise<true | Error>;
    resendCode(context: any): Promise<boolean>;
    resetPassword(phone: string, context: any): Promise<boolean>;
    setPassword(password: string, context: any): Promise<any>;
}
