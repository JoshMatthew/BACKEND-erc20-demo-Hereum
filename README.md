# erc20-demo-Hereum API-
A simple Backend for [Hereum](https://github.com/JoshMatthew/CLIENT-erc20-hereum) app and ERC20 token interaction using Metmask wallet.

## Installation
This installation guide is a continuation of the [frontend](https://github.com/JoshMatthew/CLIENT-erc20-hereum). Please consider going there first.

### 1. Set up file structure
First, go back to the root folder and once you're there, type this
```console
user@me:~$ mkdir server && cd server
```
Now you're in the server directory.

### 1. Initialize npm and git
You can initialize npm by
```console
user@me:~$ npm init --y
```
Once npm is initialized you can now initialize a local git repo by
```console
user@me:~$ git init
```
Boom! Done!

### 2. Install dependencies
Now we have both npm and git initialized we can now clone this repo and install its dependencies. <br><br>
First we have to clone this repo, kindly type
```console
user@me:~$ git clone https://github.com/JoshMatthew/API-erc20-demo-Hereum-.git
```
After that, we can now install our dependencies by doing
```console
user@me:~$ npm i
```
### 3. Install truffle Globally
Truffle is a framework for creating smart contracts.
```console
user@me:~$ npm install truffle -g
```

### 4. Install Nodemon Globally
Let's also install this guy globally and save it as a dev dependency by
```console
user@me:~$ npm install nodemon -g -D
```

### 5. Set up Configuration Files
In this server, for this to be able to run, we need to create an account in [infura](https://infura.io/register) and also [mongodb](https://www.mongodb.com/try).<br>
<br>
#### Infura
Go to [infura](https://infura.io/register) and create a new account. Once created, click the **Ethereum** button on the upper left of the window. After that, go and click the **Create new project** in the upper right, a modal with show that's waiting you to name your project. You can name it anything you want. Now you will be in the **Project Details** Window. <br><br>
Look at the **Endpoints** section and choose Ropsten from the select input, then copy the https link below it. Now go to `.env` file and paste your infura url there.
### MongoDB
Go to [mongodb](https://www.mongodb.com/try) and create a new account if you don't have yet. Once created, look at the top right and click on **Create a new Cluster**. Select the **MO Sandbox** from tiers and go the very bottom and change the cluster name to anything you want. Once created, click the **connect** after that, select **Connect your application** and click copy. <br><br>

Copy that mongo uri and then paste it to the `.env` file as well.<br><br>

You also have to get your metamask public and private key by opening your metamask wallet and also paste that in the `.env` file.

### 6. Get free ETH for your Ropsten test acc
In your metamask wallet, kindly copy your public key and go to this [website](https://faucet.ropsten.be/), paste your public key and click on **Send me test Ether**. Do not spam the button to avoid you from getting temporarily blocked. 

### 7. Deployment of ERC20 to Ropsten
Now your `.env` file should be something like this
```javascript
ADDRESS = "0x2573F143d3674D995C339Af3682Fc4cc29eb7882"
PRIVATE_KEY = "//YOUR PRIVATE KEY"
INFURA_URL = "https://ropsten.infura.io/v3/<API_KEY>"
DATABASE_URI = "Your MONGO URI"
```
Now in the server directory, type this in your command line
```console
user@me:~$ truffle migrate --network ropsten --reset
```
If you did it all right, it should not give errors.

### 8. Peewpeew Integration
For the **Play Peewpeew** button to work, you also have to clone [peewpeew](https://github.com/JoshMatthew/PeewPeew) anywhere in your machine.
```console
user@me:~$ git clone https://github.com/JoshMatthew/PeewPeew.git
```
Then on `docs/scripts/actions.js` line 84, change the url from the post request to `http://localhost:8080/peewpeew/points_add`. To make it able to open on button click, copy its path and paste it on `erc20demo/client/src/components/Home/Section1.js` line 36, in the url of `window.open` method.

## Congratulations! You've now a backend that will support our frontend! You also have deployed the erc20token to the Ropsten Network!
