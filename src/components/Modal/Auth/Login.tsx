import {
  Button,
  Input,
  chakra,
  Heading,
  Flex,
  Text,
  Divider,
  Box,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import OAuthButtons from "./OAuthButtons";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const onSubmit = () => {};

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //update form state
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <form onSubmit={onSubmit}>
      <Heading as="h1" size="md" mt="50px">
        Log In
      </Heading>
      <chakra.p fontSize="12px" mt="5px" mb="30px">
        By continuing, you agree are setting up a Reddit account and agree to
        our{" "}
        <Link href="https://www.redditinc.com/policies/user-agreement">
          <chakra.a color="blue.500">User Agreement</chakra.a>
        </Link>{" "}
        and{" "}
        <Link href="https://www.reddit.com/policies/privacy-policy">
          <chakra.a color="blue.500"> Privacy Policy</chakra.a>
        </Link>
        .
      </chakra.p>
      <OAuthButtons />

      {/* <Divider orientation="horizontal" colorScheme="facebook" /> */}
      <Center m="25px 0" color="gray.400">
        OR
      </Center>

      <Input
        name="text"
        placeholder="Username"
        type="text"
        mb={4}
        height="46px"
        onChange={onChange}
        borderRadius="20px"
        bg="gray.50"
        _placeholder={{
          fontSize: "13px",
          fontWeight: "500",
        }}
        _hover={{
          border: "1px solid",
          boderColor: "gray.300",
        }}
      />
      <Input
        name="password"
        placeholder="Password"
        type="password"
        mb={6}
        height="46px"
        onChange={onChange}
        borderRadius="20px"
        bg="gray.50"
        _placeholder={{
          fontSize: "13px",
          fontWeight: "500",
        }}
        _hover={{
          border: "1px solid",
          boderColor: "gray.300",
        }}
      />

      <Flex justifyContent="flex-start" mt={4}>
        <Text fontSize="12px" mr={1}>
          Forget your
        </Text>

        <Text
          fontWeight={700}
          color="blue.500"
          cursor="pointer"
          fontSize="12px"
          mr={1}
        >
          username
        </Text>

        <Text fontSize="12px">or</Text>

        <Text
          fontSize="12px"
          color="blue.500"
          cursor="pointer"
          fontWeight={700}
        >
          password ?
        </Text>
      </Flex>

      <Button
        _hover={{
          bg: "orange.600",
        }}
        bg="orange.500"
        width="100%"
        mt="25px"
        type="submit"
      >
        Log In
      </Button>

      <Flex justifyContent="flex-start" height={20} mt={4}>
        <Text fontSize="12px" mr={1}>
          New to Reddit?
        </Text>
        <Text
          fontSize="12px"
          color="blue.500"
          cursor="pointer"
          fontWeight={700}
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "signup",
            }))
          }
        >
          Sign Up
        </Text>
      </Flex>
    </form>
  );
};
export default Login;
