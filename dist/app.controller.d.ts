import { AppService } from './app.service';
import { CreateGetUsernameDto } from './dto/create-get-username.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    checkUsername(createObj: CreateGetUsernameDto): Promise<boolean>;
    checkHello(): Promise<string>;
    getHello(): Promise<string>;
    uploadFile(file: any, username: any): Promise<any>;
    getBinaryImage(username: any, res: any): Promise<any>;
}
