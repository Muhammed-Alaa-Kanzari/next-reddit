import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { FaGoogle, FaApple } from "react-icons/fa";

type OAuthButtonsProps = {};

const OAuthButtons: React.FC = () => {
  return (
    <Flex direction="column" width="100%">
      <Button
        bg="white"
        border="1px solid gray"
        color="gray.800"
        fontWeight="700"
        leftIcon={<FaGoogle />}
        mb={3}
        _hover={{
          bg: "blue.50",
        }}
      >
        Continue With Google
      </Button>
      <Button leftIcon={<FaApple />} mb={8}>
        Continue With Apple
      </Button>
    </Flex>
  );
};
export default OAuthButtons;
