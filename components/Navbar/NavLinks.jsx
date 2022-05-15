import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const NavLinks = () => {
  return (
    <Flex
      alignItems="center"
      justify={["center", "center", "space-between", "space-between"]}
      flexDirection={["column", "column", "row", "row"]}
      pt={[4, 4, 0, 0]}
    >
      <Link href="/home">
        <a>
          <Text
            mx={2}
            px={2}
            py={[3, 3, 0, 0]}
            w={["100%", "100%", "auto", "auto"]}
            _hover={{ bg: "text" }}
            fontWeight="medium"
          >
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
    </Flex>
  );
};

export default NavLinks;
