const path = require('path');
const fs = require('fs');
const solc = require('solc')

const filePath = path.resolve(__dirname,'contracts','Election.sol');
const source = fs.readFileSync(filePath,'utf8')

const input = {
    language: 'Solidity',
    sources: {
      'Election.sol': {
        content: source
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['abi', 'evm.bytecode']
        }
      },
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: 'istanbul',
      metadata: {
        useLiteralContent: true,
      },
      libraries: {},
    },
  };
  const output = JSON.parse(solc.compile(JSON.stringify(input))); 
  console.log(output.contracts);

  exports.interface = output.contracts['Election.sol']['Election'].abi;
  exports.bytecode = output.contracts['Election.sol']['Election'].evm.bytecode.object