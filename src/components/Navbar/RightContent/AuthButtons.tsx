import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/AuthModalAtom";

type AuthButtonsProps = {};

const AuthButtons: React.FC<AuthButtonsProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  return (
    <>
      <Button
        // by default it's solid
        variant="outline"
        fontSize="15px"
        lineHeight="15px"
        fontWeight="650"
        borderRadius="20px"
        h="32px"
        width={{ base: "85px", lg: "84px" }}
        mr={{ base: "4px", lg: "12px" }}
        onClick={() => setAuthModalState({ open: true, view: "signup" })}
      >
        Sign Up
      </Button>
      <Button
        borderRadius="20px"
        fontSize="15px"
        lineHeight="15px"
        fontWeight="650"
        h="32px"
        width={{ base: "75px", lg: "84px" }}
        // bg=""
        onClick={() => setAuthModalState({ open: true, view: "login" })}
      >
        Log In
      </Button>
    </>
  );
};
export default AuthButtons;
