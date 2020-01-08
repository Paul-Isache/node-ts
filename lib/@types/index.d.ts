interface INotNow {
    [key: string]: string | number;
}
declare type INotNowResponseItem = Array<string | number>;
declare type INotNowResponse = Array<INotNowResponseItem>;
export declare class Greeter {
    private greeting;
    constructor(message: string);
    greet(): string;
    notGreet(data: INotNow): INotNowResponse;
}
export {};
