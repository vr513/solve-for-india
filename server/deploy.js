const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3')
const {interface , bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'pond define combine strong siren tip below melody grit approve entire record',
    'https://sepolia.infura.io/v3/bd9d718cade246668d498a4d0c5cd457'
);

const web3 = new Web3(provider);

const deploy = async() => {
    const accounts =  await web3.eth.getAccounts();
    console.log('Attempting to deploy from '+accounts[0]);
    const inbox = await new web3.eth.Contract(interface).deploy({
        data : bytecode , arguments : []
    }).send({gas : '1000000' , from : accounts[0], gasPrice: '5000000000'})

    console.log('Contract deployed to - ', inbox.options.address);
}

deploy();