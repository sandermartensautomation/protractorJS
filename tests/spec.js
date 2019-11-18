var HomePage = require('../pages/HomePage');

describe('My first test', function () {

    beforeEach(async function () {
        await HomePage.get();
    });

    it('this is a test', async function () {
        await HomePage.setName('my name');
        expect(await HomePage.getGreetingText()).toEqual('Hello my name!');
    })
})