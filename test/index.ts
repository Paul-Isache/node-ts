import { Greeter } from '../lib'

const test = (() => {
    const mock = new Greeter('new');

    mock.greet();
    mock.notGreet({ a: 1 });
});
test();