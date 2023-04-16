import React from "react";
import {
  Heading,
  Avatar,
  Box,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Container,
  Link,
} from "@chakra-ui/react";
import Sid from "../assets/team/sid.jpg";
import Varad from "../assets/team/varad.jpg";
import Aman from "../assets/team/aman.jpg";
import Aarya from "../assets/team/aarya.jpg";
const Team = () => {
  return (
    <>
      <Flex padding="3.5rem">
        <Container margin="20px" py={6}>
          <Box
            maxW={"270px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"120px"}
              w={"full"}
              src={
                "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              }
              objectFit={"cover"}
            />
            <Flex justify={"center"} mt={-12}>
              <Avatar
                size={"xl"}
                src={Sid}
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5}>
                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                  Siddharth Rakshe
                </Heading>
                <Text color={"gray.500"}>Frontend Developer</Text>
              </Stack>
              <Link
                isExternal
                href={"https://www.linkedin.com/in/siddharth-rakshe/"}
              >
                <Button
                  w={"full"}
                  mt={8}
                  bg={useColorModeValue("#151f21", "gray.700")}
                  color={"white"}
                  rounded={"md"}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                >
                  Follow
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>

        {/* Aman Deshpande  */}

        <Container margin="20px" py={6}>
          <Box
            maxW={"270px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"120px"}
              w={"full"}
              src={
                "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              }
              objectFit={"cover"}
            />
            <Flex justify={"center"} mt={-12}>
              <Avatar
                size={"xl"}
                src={Aman}
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5}>
                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                  Aman Deshpande
                </Heading>
                <Text color={"gray.500"}>Frontend Developer</Text>
              </Stack>
              <Link
                isExternal
                href={"https://www.linkedin.com/in/aman-deshpande/"}
              >
                <Button
                  w={"full"}
                  mt={8}
                  bg={useColorModeValue("#151f21", "gray.700")}
                  color={"white"}
                  rounded={"md"}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                >
                  Follow
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>

        {/*aarya   */}

        <Container margin="20px" py={6}>
          <Box
            maxW={"270px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"120px"}
              w={"full"}
              src={
                "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              }
              objectFit={"cover"}
            />
            <Flex justify={"center"} mt={-12}>
              <Avatar
                size={"xl"}
                src={Aarya}
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5}>
                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                  Aarya Gode
                </Heading>
                <Text color={"gray.500"}>Full Stack Developer</Text>
              </Stack>
              <Link
                isExternal
                href={"https://www.linkedin.com/in/aarya-gode-710567162/"}
              >
                <Button
                  w={"full"}
                  mt={8}
                  bg={useColorModeValue("#151f21", "gray.700")}
                  color={"white"}
                  rounded={"md"}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                >
                  Follow
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
        {/*varad  */}
        <Container margin="20px" py={6}>
          <Box
            maxW={"270px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Image
              h={"120px"}
              w={"full"}
              src={
                "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              }
              objectFit={"cover"}
            />
            <Flex justify={"center"} mt={-12}>
              <Avatar
                size={"xl"}
                src={Varad}
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5}>
                <Heading fontSize={"23px"} fontWeight={500} fontFamily={"body"}>
                  Varad Rajopadhye
                </Heading>
                <Text color={"gray.500"}>Full Stack Developer</Text>
              </Stack>

              <Link
                isExternal
                href={"https://www.linkedin.com/in/varad-rajopadhye/"}
              >
                <Button
                  w={"full"}
                  mt={8}
                  bg={useColorModeValue("#151f21", "gray.700")}
                  color={"white"}
                  rounded={"md"}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                >
                  Follow
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default Team;
