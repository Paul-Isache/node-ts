interface INotNow {
    [key: string]: string | number
}

type INotNowResponseItem = Array<string|number>
type INotNowResponse = Array<INotNowResponseItem>


export class Greeter{
    private greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    public greet(): string {
        return `Bonjour, ${this.greeting}!`;
    }

    public notGreet(data: INotNow): INotNowResponse {
        return Object.entries(data)
    }
}