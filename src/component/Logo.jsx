import { Center, Heading, HStack, Text } from "@chakra-ui/react";
import { FaBeer } from "react-icons/fa";

export default function Logo() {
  return (
    <Heading size="md">
      <Center>
        <HStack>
          <FaBeer color="gold" />
          <Text size="sm" color="white">
            Bimbeer
          </Text>
        </HStack>
      </Center>
    </Heading>
  );
}
