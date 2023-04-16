# README - Blockchain-based E-Voting App

This is a blockchain-based e-voting application built for the Geeks for Geeks Solving for India hackathon. Unfortunately, we were not able to complete the implementation of the project before the submission deadline. The frontend of the application is a static website that describes the benefits of e-voting based on blockchain technology. The frontend is built using Chakra UI and React, and deployed at `http://34.125.178.251/`. The code for the frontend can be found in the "frontend" directory.

The server directory of the project contains the Ethereum blockchain contract code in the Election contract.sol file. The contract is deployed on the Goerli test network, and the contract address is `0x70f51AE75158c8373229D55178416688942d9cA7`. The code for the server can be found in the "server" directory.

If our project gets shortlisted for the next round of the competition, we will make sure to develop a working prototype.

## Objective

Building an electronic voting application for the Geeks for Geeks Solving for India hackathon is the goal of the mentioned project. The program seeks to illustrate the advantages of blockchain-based electronic voting, including its greater transparency, immutability, and security. The application's frontend is a static website created with Chakra UI and React that outlines the advantages of blockchain-based electronic voting. The Election contract.sol file, which is installed on the Goerli test network, contains the Ethereum blockchain contract code that was used to create the application's backend. The project is open to community contributions and is released under the MIT Licence.

## Methodology

The contract is a simplified implementation of an election smart contract built on the Ethereum blockchain. The objective of this contract is to facilitate a secure and transparent election by allowing voters to cast their vote for a candidate, and tallying the results to determine the winner of the election.

The contract defines a Candidate struct, which stores the candidate's ID, name, and vote count. It uses a mapping to associate each candidate ID with a Candidate struct, and another mapping to keep track of which voters have already cast their vote.

The contract also defines an owner variable, which is set to the address of the contract creator. The onlyOwner modifier is used to restrict certain functions to be called only by the owner of the contract.

The constructor initializes the contract by setting the owner variable to the address of the contract creator, and adds two initial candidates to the candidates mapping.

The addCandidate function is used by the contract owner to add new candidates to the election. It takes a string parameter representing the name of the new candidate, and creates a new Candidate struct with a unique ID and vote count of 0.

The vote function allows a voter to cast their vote for a specific candidate by providing the candidate's ID. It checks if the voter has already cast their vote, and if not, it updates the candidate's vote count and sets the voter's status to voted. It also emits a votedEvent to indicate that a vote has been cast.

The getCandidateVoteCount function allows anyone to view the vote count of a specific candidate by providing the candidate's ID.

The reset function is used by the contract owner to reset the election by resetting all candidate vote counts to 0, and setting the candidatesCount variable to 0.

In summary, the contract defines functions for adding candidates, casting votes, and getting vote counts. The use of mappings ensures that the election results are transparent and secure. The onlyOwner modifier is used to restrict certain functions to be called only by the owner of the contract.

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
