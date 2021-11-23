// create a method that will be called by thw web server

// in this method:
// - read the accounts.txt file
// put the N accounts into an array
// get the totalsupply for the token owner
// calculate 5% of that totalSupply
// loop N times, and execute N transactions transferring the token
// collect tea and medals

var fs = require("fs")

let method = require('./method.js');

require('dotenv').config()

infuraToken = process.env.INFURA_TOKEN
contractAddress = process.env.CONTRACT_ADDRESS
ownerAddress = process.env.OWNER_ADDRESS
privateKey = Buffer.from(process.env.SUPER_SECRET_PRIVATE_KEY, 'hex')

const distribute = async() => {
    // read in the file
    let distributionAddresses = fs.readFileSync('./account.txt', 'utf8').split('\n');
    console.log(`distro addresses are: ${ distributionAddresses}`);

}

module.exports = { distribute }