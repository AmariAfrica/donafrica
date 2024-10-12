# Sample Hardhat Project

To run the project on your local machine, follow these instructions

First, open a terminal and clone the repo

```shell
git clone https://github.com/ignatiusratemo26/DonorSmartContract.git
```

Install packages
```shell
npm install --legacy-peer-deps
```
To compile your contracts, run the following command in the terminal
```shell
npx hardhat compile
```
To deploy the contracts, first ensure you have your private key in the .env file, see env.example for an example. Then run this command

To deploy to localhost open a new terminal and run this command
```shell
npx hardhat node
```
This will start a local node, open a new terminal and run this command
```shell
npx hardhat run scripts/deploy.js --network base-local

```
To deploy to Base Sepolia run this command
```shell
npx hardhat run scripts/deploy.js --network base-sepolia

```
To run tests
```shell
npx hardhat test

```