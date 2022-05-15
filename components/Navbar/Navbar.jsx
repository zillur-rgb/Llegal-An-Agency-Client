import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import MenuToggle from "./MenuToggle";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleSetClick = () => setClicked(!clicked);
  return (
    <Flex justify="space-between" my={5} w="100%">
      <Heading>Llegal</Heading>
      <NavLinks handleSetClick={handleSetClick} clicked={clicked} />
      <MenuToggle handleSetClick={handleSetClick} clicked={clicked} />
    </Flex>
  );
};

export default Navbar;
