# README - Blockchain-based E-Voting App

This is a blockchain-based e-voting application built for the Geeks for Geeks Solving for India hackathon. Unfortunately, we were not able to complete the implementation of the project before the submission deadline. The frontend of the application is a static website that describes the benefits of e-voting based on blockchain technology. The frontend is built using Chakra UI and React, and deployed at `http://34.125.178.251/`. The code for the frontend can be found in the "frontend" directory.

The server directory of the project contains the Ethereum blockchain contract code in the Election contract.sol file. The contract is deployed on the Goerli test network, and the contract address is `0x70f51AE75158c8373229D55178416688942d9cA7`. The code for the server can be found in the "server" directory.

If our project gets shortlisted for the next round of the competition, we will make sure to develop a working prototype.

## Installation

To run the application, you will need to have Node.js and npm installed on your machine.

1. Clone the repository
2. Navigate to the frontend project directory
    `cd frontend`
3. Install the dependencies for the frontend using the command `yarn` in the "frontend" directory
4. Navigate to the server project directory
    `cd server`
4. Install the dependencies for the server using the command `npm install` in the "server" directory

## Usage

To run the frontend, navigate to the "frontend" directory and start the development server using the command `yarn run dev`. Once the development server is running, you can access the application at `http://localhost:5173/`. 

The Election contract is deployed on the Goerli test network, and the contract address is `0x70f51AE75158c8373229D55178416688942d9cA7`. You can interact with the contract using a tool like Remix.

## Contributing

Contributions to this project are welcome. If you find any issues or have any suggestions for improvements, please open an issue or a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
