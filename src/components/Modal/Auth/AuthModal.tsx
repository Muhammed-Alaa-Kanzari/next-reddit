import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import { authModalState } from "../../../atoms/AuthModalAtom";
import AuthInputs from "./AuthInputs";

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };
  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>
           
          </ModalHeader> */}
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyItems="center"
          >
            <Flex
              direction="column"
              align="center"
              justify="center"
              width="70%"
            >
              {/* <chakra.h1>
                {" "}
                {modalState.view === "login" && "Log In"}
                {modalState.view === "signup" && "Sign Up"}
                {modalState.view === "resetPassword" && "Reset Password"}
              </chakra.h1> */}
              <AuthInputs />

              {/* <ResetPassword /> */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
