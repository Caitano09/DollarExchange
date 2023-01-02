export default class ErrorWithResponse{
    public readonly message: string;
    public readonly code: number;
    public readonly id: string;

    constructor(message: string, code = 400, idError = 'bad-request' ){
        this.message = message;
        this.id = idError;
        this.code = code;
    }
}