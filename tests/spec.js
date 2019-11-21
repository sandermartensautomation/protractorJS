const HomePage = require('../pages/HomePage');

describe('My first test', function () {

    var homePage = new HomePage();

    beforeEach(async function () {
        await homePage.open();
    });

    it('this is a test', async function () {
        await homePage.setName('my name');
        expect(await homePage.getGreetingText()).toEqual('Hello my name!');
    })
})