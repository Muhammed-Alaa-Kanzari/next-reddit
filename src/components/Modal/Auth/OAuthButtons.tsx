import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

type OAuthButtonsProps = {};

const OAuthButtons: React.FC = () => {
  return (
    <Flex direction="column" width="100%">
      <Button
        bg="white"
        border="1px solid gray"
        color="gray.800"
        fontWeight="700"
        // leftIcon={<FaGoogle />}
        mb={3}
        _hover={{
          bg: "blue.50",
        }}
      >
        <Image
          src="/images/googlelogo.jpg"
          alt="googelogo"
          height="20px"
          mr={4}
        />
        Continue With Google
      </Button>
      <Button
        // leftIcon={<FaApple />}
        // mb={8}
        bg="white"
        border="1px solid gray"
        color="gray.800"
        fontWeight="700"
        _hover={{
          bg: "blue.50",
        }}
      >
        <Image
          src="/images/applelogo.png"
          alt="applelogo"
          height="20px"
          mr={4}
        />
        Continue With Apple
      </Button>
    </Flex>
  );
};
export default OAuthButtons;
