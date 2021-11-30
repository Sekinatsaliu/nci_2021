// create a method that will be called by thw web server

// in this method:
// - read the accounts.txt file
// put the N accounts into an array
// get the totalsupply remaining for the token owner
// calculate 5% of that totalSupply
// loop N times, and execute N transactions transferring the token from owner to address in array
// collect tea and medals

let fs = require("fs");
let BigNumber = require("big-number");

let method = require('./method.js');
let contract = require('./contract.js');
// this sets up my .env file
require('dotenv').config()

infuraToken = process.env.INFURA_TOKEN
contractAddress = process.env.CONTRACT_ADDRESS
ownerAddress = process.env.OWNER_ADDRESS
privateKey = Buffer.from(process.env.SUPER_SECRET_PRIVATE_KEY, 'hex')

const distribute = async() => {
    // read in the file
    let distributionAddresses = fs.readFileSync('./account.txt', 'utf8').split('\n');

    console.log(`distro addresses are: ${ distributionAddresses}`);

    // get the balance of token owner
    let ownerBalance = await contract.getBalanceOfOwner(ownerAddress);
    let ob = new BigNumber(ownerBalance);
    console.log(`owner balance is ${ob}`);

    // get five percent of this balance
    let fivePerCent = ob.div(20);
    console.log(`five per cent of owner balance is ${fivePerCent}`);
    

    // work out how many addresses in file (N)
    let numberOfAddresses = distributionAddresses.length;
    console.log(`number of addresses in file is ${numberOfAddresses}`);
    // divide the 5% by N to get DistroAmount
    // loop through N accounts/addresses
    // for each account, do a transfer (get 5% of balance divide by N)
    
    
    //let bal = new BigNumber(1000000000000000000000000) // this should be owner balance from smart contract
    //let fivePercent = bal.div(20)
    //// then we need to divide fivePercent by the number of addresses in the file
    //let accounts = distributionAddresses.length
    //console.log(`we have ${account} account in our file`)

}
distribute()
//module.exports = { distribute }