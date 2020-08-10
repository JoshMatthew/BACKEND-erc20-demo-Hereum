# erc20-demo-Hereum API-
A simple ERC20 interaction using Metmask wallet. This will serve as the api for the app.

## Installation

### 1. Initialize npm
```javascript
$ npm init --y
```
### 2. Install dependencies
```javascript
$ npm install
```
### 3. Install truffle Globally
Truffle is a framework for creating smart contracts
```javascript
$ npm install truffle -g
```

### 4. Install Nodemon Globally
```javascript
$ npm install nodemon -g
```

## Deployment of ERC20 to Ropsten
In the .env file, kindly replace all the credentials.
In your  root directory, type this in your command line
```javascript
$ truffle migrate --network ropsten --reset
```

## Start localhost
In your  root directory, type this in your command line
```javascript
$ npm run dev
```
## Congratulations! You've now a backend that will support our frontend! You also have deployed the erc20token to the Ropsten Network!
