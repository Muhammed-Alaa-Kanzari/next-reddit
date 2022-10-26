import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import RightContent from "./RightContent";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  return (
    // renders a `div` element.
    <Flex bg="white" height="49px" padding="6px 12px">
      <Flex align="center" width={{ base: "76px", md: "150px", lg: "330px" }}>
        <Image
          src="/images/redditLogo.svg"
          ml={{ base: "9px" }}
          height="32px"
          alt="Reddit Logo"
        />
        <Image
          src="/images/redditText.svg"
          display={{ base: "none", md: "unset" }}
          height="18px"
          alt="Reddit"
          ml="5.25px"
        />
      </Flex>
      <SearchInput />
      <RightContent />
      {/* <Directory /> */}
    </Flex>
  );
};
export default Navbar;
