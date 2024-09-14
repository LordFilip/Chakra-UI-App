import {
  Flex,
  Box,
  Heading,
  Spacer,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" alignItems="center">
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />

      <HStack>
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>gmail@gmail.com</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  );
}
