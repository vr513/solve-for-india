import React, { useState, useEffect } from "react";
import {
  Container,
  Text,
  Code,
  Link,
  Divider,
  Heading,
  Stack,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";

const CustomLink = ({ linkText, actualLink }) => {
  return (
    <>
      <Link
        px={"15px"}
        borderRadius={"20px"}
        fontWeight={500}
        background={useColorModeValue("black", "white")}
        color={useColorModeValue("white", "black")}
        href={actualLink}
        isExternal
      >
        {linkText}
      </Link>
    </>
  );
};

const Implementation = () => {
  return (
    <>
      <Container maxW="container.lg" mt={16}>
        <Stack spacing={6} pb={"10%"}>
          <Heading as="h1" size="xl">
            Blockchain-based E-Voting App
          </Heading>
          <Text mb={8}>
            This is a blockchain-based e-voting application built for the Geeks
            for Geeks Solving for India hackathon. Unfortunately, we were not
            able to complete the implementation of the project before the
            submission deadline. The frontend of the application is a static
            website that describes the benefits of e-voting based on blockchain
            technology. The frontend is built using Chakra UI and React, and
            deployed at{" "}
            <CustomLink actualLink={'http://34.125.178.251/'} linkText={'http://34.125.178.251/'} />
            . The code for the frontend can be found in the "frontend"
            directory.You can also view the contract on <br/><CustomLink actualLink={'https://sepolia.etherscan.io/address/0x70f51AE75158c8373229D55178416688942d9cA7'} linkText={'Sepolia Etherscan. (Click me to visit)'} />
          </Text>
          <Text mb={8}>
            The server directory of the project contains the Ethereum blockchain
            contract code in the Election contract.sol file. The contract is
            deployed on the Sepolia test network, and the contract address is{" "}
            <Code>0x70f51AE75158c8373229D55178416688942d9cA7</Code>. The code
            for the server can be found in the "server" directory.
          </Text>
          <Divider />
          <Heading as="h2" size="lg" mt={6}>
            Objective
          </Heading>
          <Text mb={8}>
            Building an electronic voting application for the Geeks for Geeks
            Solving for India hackathon is the goal of the mentioned project.
            The program seeks to illustrate the advantages of blockchain-based
            electronic voting, including its greater transparency, immutability,
            and security. The application's frontend is a static website created
            with Chakra UI and React that outlines the advantages of
            blockchain-based electronic voting. The Election contract.sol file,
            which is installed on the Sepolia test network, contains the
            Ethereum blockchain contract code that was used to create the
            application's backend. The project is open to community
            contributions and is released under the MIT Licence.
          </Text>
          <Divider />
          <Heading as="h2" size="lg" mt={6}>
            Methodology
          </Heading>
          <Text mb={8}>
            The contract is a simplified implementation of an election smart
            contract built on the Ethereum blockchain. The objective of this
            contract is to facilitate a secure and transparent election by
            allowing voters to cast their vote for a candidate, and tallying the
            results to determine the winner of the election.
          </Text>
          <Text mb={8}>
            The contract defines a Candidate struct, which stores the
            candidate's ID, name, and vote count. It uses a mapping to associate
            each candidate ID with a Candidate struct, and another mapping to
            keep track of which voters have already cast their vote.
          </Text>
          <Text mb={8}>
            The contract also defines an owner variable, which is set to the
            address of the contract creator. The onlyOwner modifier is used to
            restrict certain functions to be called only by the owner of the
            contract. The constructor initializes the contract by setting the
            owner variable to the address of the contract creator, and adds two
            initial candidates to the candidates mapping. The addCandidate
            function is used by the contract owner to add new candidates to the
            election.
          </Text>
          <Text mb={8}>
            It takes a string parameter representing the name of the new
            candidate, and creates a new Candidate struct with a unique ID and
            vote count of 0. The vote function allows a voter to cast their vote
            for a specific candidate by providing the candidate's ID. It checks
            if the voter has already cast their vote, and if not, it updates the
            candidate's vote count and sets the voter's status to voted. It also
            emits a votedEvent to indicate that a vote has been cast. The
            getCandidateVoteCount function allows anyone to view the vote count
            of a specific candidate by providing the candidate's ID.
          </Text>
          <Text mb={8}>
            The reset function is used by the contract owner to reset the
            election by resetting all candidate vote counts to 0, and setting
            the candidatesCount variable to 0. In summary, the contract defines
            functions for adding candidates, casting votes, and getting vote
            counts. The use of mappings ensures that the election results are
            transparent and secure. The onlyOwner modifier is used to restrict
            certain functions to be called only by the owner of the contract.
          </Text>
          <Divider />

          <Heading as="h2" size="lg" mb={4}>
            Installation
          </Heading>
          <Text mb={4}>
            To run the application, you will need to have Node.js and npm
            installed on your machine.
          </Text>
          <List mb={4}>
            <ListItem>
              Clone the repository:{" "}
              <Code>git clone https://github.com/vr513/solve-for-india</Code>
            </ListItem>
            <ListItem>
              Navigate to the frontend project directory:{" "}
              <Code>cd frontend</Code>
            </ListItem>
            <ListItem>
              Install the dependencies for the frontend using the command:{" "}
              <Code>yarn</Code>
            </ListItem>
            <ListItem>
              Navigate to the server project directory: <Code>cd server</Code>
            </ListItem>
            <ListItem>
              Install the dependencies for the server using the command:{" "}
              <Code>npm install</Code>
            </ListItem>
          </List>
          <Divider />
          <Heading as="h2" size="lg" mb={4}>
            Usage
          </Heading>
          <Text mb={4}>
            To run the frontend, navigate to the "frontend" directory and start
            the development server using the command: <Code>yarn run dev</Code>.
            Once the development server is running, you can access the
            application at <Code>http://localhost:5173/</Code>.
          </Text>
          <Text mb={4}>
            The Election contract is deployed on the Sepolia test network, and
            the contract address is{" "}
            <Code>0x70f51AE75158c8373229D55178416688942d9cA7</Code>. You can
            interact with the contract using a tool like Remix.
          </Text>
          <Divider />
        </Stack>
      </Container>
    </>
  );
};
export default Implementation;
