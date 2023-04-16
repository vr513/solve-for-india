import { Box, Container, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  return (
    <Container maxW={"container.xl"}>
      <Accordion allowMultiple>
        <AccordionItem mt={"5"}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontSize={"xl"}> Introduction</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              1. A blockchain-based dApp for e-voting is a decentralized
              application built on a blockchain network that allows for secure,
              transparent, and tamper-proof electronic voting.
            </Text>
            <Text>
              2. Such a dApp can utilize the unique features of blockchain, such
              as immutability, transparency, and consensus, to address the
              challenges of traditional voting systems, such as fraud,
              manipulation, and lack of transparency.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mt={"5"}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontSize={"xl"}> How it Works</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text mt={"2"}>
              1. Setup: The e-voting system is set up on a blockchain network,
              which could be a public blockchain (e.g., Ethereum, EOS) or a
              private blockchain (e.g., Hyperledger Fabric, Quorum). The smart
              contracts that define the rules and processes of the e-voting
              system are deployed on the blockchain.{" "}
            </Text>
            <Text mt={"2"}>
              2. Voter Registration: Eligible voters register on the e-voting
              dApp, providing their identity information, which is verified
              through cryptographic techniques. Once verified, the voter's
              identity is recorded on the blockchain, creating a transparent and
              tamper-proof record of registered voters.
            </Text>
            <Text mt={"2"}>
              3. Voting Process: During the voting period, registered voters can
              cast their votes using the dApp. The dApp provides a user-friendly
              interface for voters to securely cast their votes electronically.
              The votes are encrypted to ensure privacy and integrity.
            </Text>
            <Text mt={"2"}>
              4. Smart Contract Execution: The smart contracts on the blockchain
              enforce the rules of the e-voting system, such as verifying voter
              eligibility, checking for double voting, and validating the
              integrity of the votes. The smart contracts automatically execute
              the voting process according to the predefined rules.
            </Text>
            <Text mt={"2"}>
              5. Consensus and Recording of Votes: The votes cast by the voters
              are recorded as transactions on the blockchain. The blockchain's
              consensus mechanism, which could be proof-of-work, proof-of-stake,
              or other consensus algorithms, ensures that the transactions are
              validated, agreed upon, and added to the blockchain in a
              transparent and tamper-proof manner.
            </Text>
            <Text mt={"2"}>
              6. Transparency and Auditing: The votes recorded on the blockchain
              are transparent and auditable by stakeholders, such as voters,
              election organizers, and auditors. The integrity of the votes can
              be verified through the blockchain's transparency, as the votes
              are immutable and cannot be tampered with without consensus
              agreement.
            </Text>
            <Text mt={"2"}>
              7. Election Results: Once the voting period ends, the smart
              contracts automatically tally the votes and determine the election
              results. The results are recorded on the blockchain, creating a
              transparent and tamper-proof record of the outcome.
            </Text>
            <Text mt={"2"}>
              8. Post-Election Auditing: The blockchain-based e-voting dApp
              allows for post-election auditing, where stakeholders can verify
              the integrity of the election results by auditing the recorded
              votes on the blockchain. This enhances transparency and trust in
              the election process.
            </Text>
            <Text mt={"2"}>
              9. Security: The use of blockchain technology provides enhanced
              security to the e-voting system through features such as
              immutability, consensus-based validation, and cryptographic
              techniques for identity verification and vote encryption, which
              helps prevent fraud, tampering, and unauthorized access.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mt={"5"}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontSize={"xl"}>
                  {" "}
                  Benefits of blockchain-based e-voting
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>1. Transparency and Audibility</Text>
            <Text>2. Security and Tamper-proofing</Text>
            <Text>3. Trust and Integrity</Text>
            <Text>4. Increased Accessibility</Text>
            <Text>5. Efficiency and Cost-effectiveness</Text>
            <Text>6. Increased Voter Confidence</Text>
            <Text>7. Tamper-proof Voter Identity Management</Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mt={"5"}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontSize={"xl"}> Security features</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>1. Decentralization</Text>
            <Text>2. Cryptographic Security</Text>
            <Text>3. Immutable Records</Text>
            <Text>4. Consensus Mechanism</Text>
            <Text>5. Voter Anonymity</Text>
            <Text>6. Access Control</Text>
            <Text>7. Transparent Auditing</Text>
            <Text>8. Disaster Recovery</Text>
            <Text>9. Open Source and Code Audits</Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mt={"5"}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontSize={"xl"}> Accessibility</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>1. User-friendly Interface</Text>
            <Text>2. Support for Assistive Technologies</Text>
            <Text>3. Multilingual Support</Text>
            <Text>4. Voter Verification and Authentication</Text>
            <Text>5. Clear Instructions and Help</Text>
            <Text>6. Testing with Diverse User Groups</Text>
            <Text>7. Compliance with Accessibility Standards</Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mt={"5"}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontSize={"xl"}> User-friendly interface</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>1. Intuitive Navigation</Text>
            <Text>2. Clear and Concise Instructions</Text>
            <Text>3. Responsive Design</Text>
            <Text>4. Visual Design</Text>
            <Text>5. Error Handling</Text>
            <Text>6. Feedback and Confirmation</Text>
            <Text>7. User Testing and Feedback</Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem mt={"5"}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontSize={"xl"}> Transparency</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>1. Immutable and Transparent Recordkeeping</Text>
            <Text>2. Publicly Verifiable Votes</Text>
            <Text>3. Decentralized Consensus</Text>
            <Text>4. Auditable and Open Source Code</Text>
            <Text>5. Public Monitoring</Text>
            <Text>6. Transparency in Voter Registration</Text>
            <Text>7. Audit Trails and Logs</Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem mt={"5"}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontSize={"xl"}> Scalability</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>1. Layered Architectures</Text>
            <Text>2. Off-chain Transactions</Text>
            <Text>3. Consensus Algorithms</Text>
            <Text>4. Sharding</Text>
            <Text>5. Optimal Data Storage</Text>
            <Text>6. Regular Audits</Text>
            <Text>7. Future Technological Advancements</Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem mt={"5"}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text fontSize={"xl"}> Future developments</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>1. Integration with other emerging technologies</Text>
            <Text>
              2. Interoperability between different blockchain networks
            </Text>
            <Text>3. Enhanced privacy features</Text>
            <Text>4. Enhanced user experience</Text>
            <Text>5. Greater adoption and standardization</Text>
            <Text>6. Improved scalability and performance</Text>
            <Text>7. Increased regulatory and legal frameworks</Text>
            <Text>8. Collaborative efforts and partnerships</Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem mt={"5"}>
          <Link to={"/team"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"xl"}> Contact information </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
          </Link>
          <AccordionPanel pb={4}></AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default ProjectDetails;
