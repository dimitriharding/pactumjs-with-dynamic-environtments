# pactumjs-with-dynamic-environtments
For a stackoverflow example: https://stackoverflow.com/questions/73292730/typescript-how-to-access-constants-based-on-environment-like-cypress-env-ou

## Install 
1. Clone repo : `git clone https://github.com/dimitriharding/pactumjs-with-dynamic-environtments.git`
2. Go to folder: `cd pactumjs-with-dynamic-environtments`
3. Install dependencies: `npm i`

## Usage

Running test
```sh
npm run test # uses development environment by default
```

Switching environments by specifying an `EVIRONMENT` environmental vairable using `development|staging|production`
```
EVIRONMENT=development npm run test
EVIRONMENT=staging npm run test
EVIRONMENT=production npm run test
```
> there are 3 environments based on the environments map in `config.js`.
