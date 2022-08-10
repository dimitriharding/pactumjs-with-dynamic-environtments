const { spec, request } = require('pactum');
const { environmentData } = require('../config');

before(() => {
    request.setBaseUrl(environmentData.baseUrl);
    console.log(environmentData.standardUserEmail);
    console.log(environmentData.standardUserPassword);
});

it('should get a response with status code 200', async () => {
    await spec()
        .get('/status/200')
        .expectStatus(200);
});