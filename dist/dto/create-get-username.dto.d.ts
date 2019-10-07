export declare class CreateGetUsernameDto {
    firstname: string;
    lastname: string;
    birthday: string;
    username: string;
    password: string;
}
export declare class Jumper22 {
    firstname: string;
}
export declare class loginCheck {
    username: string;
    password: string;
}
export declare class binaryVote {
    statement: string;
    option1: string;
    option2: string;
}
export declare class voteResult {
    hostUsername: string;
    username: string;
    selection: string;
}
export declare class token {
    token: string;
}
export declare class criteria {
    location: string;
}
export declare class createVote {
    criteria: criteria;
    binaryVote: binaryVote;
}
