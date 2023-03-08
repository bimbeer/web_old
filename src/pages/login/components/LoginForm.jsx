import {
  Button,
  Card,
  CardBody,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaDesktop, FaFacebook, FaGooglePlay } from "react-icons/fa";

export default function LoginForm() {
  return (
    <Flex width="100%" height="100%" align="center" justify="center">
      <Card maxWidth="600px" rounded="3xl" boxShadow="none" bgColor="none">
        <CardBody>
          <Text
            fontSize="3xl"
            fontWeight="extrabold"
            fontStyle="italic"
            color="whiteAlpha.800"
          >
            Przesuń w prawo, aby spotkać bratnią piwowarską duszę.
          </Text>

          <Center>
            <FormControl mt="1rem" mb="1rem">
              <Flex gap="1rem" flexDirection="column">
                <div>
                  <FormLabel color="whiteAlpha.900">Adres email</FormLabel>
                  <Input color="whiteAlpha.900" type="email" />
                </div>
                <div>
                  <FormLabel color="whiteAlpha.900">Hasło</FormLabel>
                  <Input color="whiteAlpha.900" type="password" />
                </div>
                <Button width="100%" type="submit">
                  Zaloguj
                </Button>
              </Flex>
            </FormControl>
          </Center>
          <HStack width="100%" justify="space-evenly">
            <Button width="100%">
              <FcGoogle size="1.5rem" />
              <Text ml="10px">Google</Text>
            </Button>
            <Button width="100%">
              <FaFacebook size="1.5rem" color="#3b5998" />
              <Text ml="10px" color="facebook">
                Facebook
              </Text>
            </Button>
          </HStack>
          <Divider mt="1rem" mb="0.5rem" />
          <Center>
            <Text color="whiteAlpha.800">lub</Text>
          </Center>
          <Divider mb="1rem" mt="0.5rem" />
          <HStack width="100%" justify="space-evenly">
            <Button width="100%">
              <FaGooglePlay />
              <Text ml="10px">POBIERZ Z Google Play</Text>
            </Button>
            <Button width="100%">
              <FaDesktop />
              <Text ml="10px">POBIERZ na komputer</Text>
            </Button>
          </HStack>
        </CardBody>
      </Card>
    </Flex>
  );
}
