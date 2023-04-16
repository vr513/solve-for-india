const assert = require('assert')
const ganache = require('ganache-cli');
const { beforeEach } = require('mocha');
const Web3 = require('web3');
const {interface , bytecode} = require('../compile');

const provider = ganache.provider();
const web3 =  new Web3(provider);

let accounts;
let inbox;

beforeEach(async() => {
    accounts = await web3.eth.getAccounts();
    console.log(accounts);
    inbox = await new web3.eth.Contract(interface).deploy({
        data : bytecode , arguments : ['Hi there !']
    }).send({from : accounts[0] , gas: '1000000'});
    inbox.setProvider(provider);
    //console.log(inbox);
})

describe('Inbox',() => {
    it('deploys a contract',() => assert.ok(inbox.options.address));

    it('has a default message',async() => {
        console.log(await inbox.methods.message().call())
        assert.ok(await inbox.methods.message().call())
    })
})