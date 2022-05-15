import { RiMenuLine } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { Box, Flex } from "@chakra-ui/react";

const MenuToggle = ({ handleSetClick, clicked }) => {
  return (
    <Flex display={{ base: "block", md: "none" }} onClick={handleSetClick}>
      {!clicked ? (
        <RiMenuLine fontSize={28} fontWeight="medium" />
      ) : (
        <FaTimes fontSize={28} fontWeight="medium" />
      )}
    </Flex>
  );
};

export default MenuToggle;
