import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

type SearchInputProps = {
  //user
};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <Flex align="center" flexGrow={1} mr={2} justify="center">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.400" />
        </InputLeftElement>
        <Input
          placeholder="Search Reddit"
          // size="xs"

          bg="gray.100"
          width={{ base: "350px", md: "530px", lg: "440px" }}
          height="40px"
          borderRadius="20px"
          _placeholder={{
            color: "gray.500",
            fontSize: "14px",
          }}
          _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
          _focus={{
            outline: "none",
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          fontSize="16px"
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
