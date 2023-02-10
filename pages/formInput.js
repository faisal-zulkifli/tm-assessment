import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

export default function FormInput() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");

  const isEmailError = email === "";
  const isNameError = name === "";
  const isMobileError = mobile === "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userPayload = {
      name,
      email,
      mobile,
    };

    console.log("Payload: ", userPayload);

    try {
      const { data } = await axios({
        url: "/api/userInput",
        method: "POST",
        data: userPayload,
      });

      console.log("Response Back:", data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Form
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            TM Frontend Junior Assessment
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel> Name</FormLabel>
                  <Input
                    type="text"
                    value={name}
                    required
                    onChange={(e) => setname(e.target.value)}
                  />
                  {!isNameError ? (
                <FormHelperText>
                  Please enter fullname
                </FormHelperText>
              ) : (
                <FormErrorMessage>Name is not valid.</FormErrorMessage>
              )}
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="example@mail.com"
                value={email}
                required
                onChange={(e) => setemail(e.target.value)}
              />
              {!isEmailError ? (
                <FormHelperText>
                  Please enter valid email address
                </FormHelperText>
              ) : (
                <FormErrorMessage>Email is not valid.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl id="mobile" isRequired>
              <FormLabel>Mobile Number</FormLabel>
              <Input
                type="number"
                placeholder="(+60) __-______"
                value={mobile}
                required
                onChange={(e) => setmobile(e.target.value)}
              />
              {!isMobileError ? (
                <FormHelperText>
                  Please enter Mobile Number
                </FormHelperText>
              ) : (
                <FormErrorMessage>Mobile Number is not valid.</FormErrorMessage>
              )}
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                onClick={handleSubmit}
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
