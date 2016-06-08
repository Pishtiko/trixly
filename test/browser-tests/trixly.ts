const Trixly = require('../../src/index').default;

describe('Trixly', () => {

    it('should run a simple TypeScript test #1', () => {
        expect(true).to.be.true;
    });

    it('should run a simple TypeScript test #2', () => {

        const greeter = new Trixly('Hello, world!');

        expect(greeter.greeting).to.eql('Hello, world!');
    });

    it('should be an object', () => {
        expect(Trixly).to.be.a.object;
    });
});