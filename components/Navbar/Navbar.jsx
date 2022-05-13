import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { RiMenuLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <Flex justify="space-between" my={5} align="center" w="100%">
      <Heading>Llegal</Heading>
      <Flex alignItems="center">
        <Link href="/home">
          <a>
            <Text mx={2} px={2} fontWeight="medium">
              Home
            </Text>
          </a>
        </Link>
        <Link href="/product">
          <a>
            <Text mx={2} px={2} fontWeight="medium">
              product
            </Text>
          </a>
        </Link>
        <Link href="/pricing">
          <a>
            <Text mx={2} px={2} fontWeight="medium">
              pricing
            </Text>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <Text mr={4} mx={2} px={2} fontWeight="medium">
              contact
            </Text>
          </a>
        </Link>
        <RiMenuLine
          display={["hidden", "block"]}
          fontSize={28}
          fontWeight="medium"
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;
