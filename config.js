// define your environments with the relevant data as a map
const environments = {
    development: {
        baseUrl: 'http://httpbin.org',
        standardUserEmail: 'dev+test@email.com',
        standardUserPassword: 'dev-test-password',
    },
    staging: {
        baseUrl: 'https://staging.example.com',
        standardUserEmail: 'stg+test@email.com',
        standardUserPassword: 'stg-test-password',
    },
    production: {
        baseUrl: 'https://example.com',
        standardUserEmail: 'prod+test@email.com',
        standardUserPassword: 'prod-test-password',
    },
}

// get the environment name from the command line
// or default to development
const getEnvironmentData = () => {
    const environment = process.env.ENVIRONMENT || 'development';
    console.log('Using environment: ', environment);
    // get the environment data from the map
    const environmentData = environments[environment];
    return environmentData;
};

// export the environment data
module.exports = {
    environmentData: getEnvironmentData(),
};
