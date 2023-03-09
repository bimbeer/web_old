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
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FiLogIn } from "react-icons/fi";
import { FaDesktop, FaFacebook, FaGooglePlay } from "react-icons/fa";
import LoginModal from "./LoginModal";

export default function LoginForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function Form() {
    return (
      <Card maxWidth="600px" rounded="3xl" boxShadow="none" bgColor="none">
        <CardBody>
          <Center>
            <FormControl mt="1rem" mb="1rem">
              <Flex gap="1rem" flexDirection="column">
                <div>
                  <FormLabel color="whiteAlpha.900">Adres email</FormLabel>
                  <Input
                    borderRadius="100"
                    color="whiteAlpha.900"
                    type="email"
                    id="email"
                    autoComplete="none"
                  />
                </div>
                <div>
                  <FormLabel color="whiteAlpha.900">Hasło</FormLabel>
                  <Input
                    borderRadius="100"
                    color="whiteAlpha.900"
                    type="password"
                    id="password"
                  />
                </div>
                <Button
                  borderRadius="100"
                  p="1.5rem"
                  width="100%"
                  type="submit"
                  bgGradient="linear(to-r, #BBA410, #8CD311)"
                  color="whiteAlpha.800"
                  colorScheme="none"
                  leftIcon={<FiLogIn size="1.5rem" />}
                >
                  Zaloguj
                </Button>
              </Flex>
            </FormControl>
          </Center>
          <HStack width="100%" justify="space-evenly">
            <Button
              leftIcon={<FcGoogle size="1.5rem" />}
              width="100%"
              borderRadius="100"
              p="1.5rem"
            >
              Google
            </Button>
            <Button
              leftIcon={<FaFacebook size="1.5rem" color="#3b5998" />}
              width="100%"
              borderRadius="100"
              p="1.5rem"
            >
              Facebook
            </Button>
          </HStack>
        </CardBody>
      </Card>
    );
  }

  return (
    <Flex width="100%" height="100%" align="center" justify="center">
      <Card maxWidth="600px" rounded="3xl" boxShadow="none" bgColor="none">
        <CardBody>
          <Text
            fontSize="3xl"
            fontWeight="extrabold"
            fontStyle="italic"
            color="whiteAlpha.800"
            textAlign="center"
            mb="2rem"
          >
            Przesuwaj w prawo, aby spotkać bratnią piwowarską duszę.
          </Text>

          <LoginModal
            form={<Form />}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          />

          <VStack width="100%" justify="space-evenly">
            <Button
              colorScheme="none"
              bgGradient="linear(to-r, #BBA410, #8CD311)"
              leftIcon={<FiLogIn />}
              color="whiteAlpha.800"
              borderRadius="100"
              p="1.5rem"
              mb="1.5rem"
              onClick={onOpen}
            >
              Zaloguj się
            </Button>
            <Divider />
            <Text color="whiteAlpha.800" fontStyle="italic" textAlign="center">
              lub
            </Text>
            <Divider />
            <div style={{ marginTop: "1.5rem" }}></div>
            <Button
              colorScheme="gray"
              leftIcon={<FaGooglePlay />}
              borderRadius="100"
              p="1.5rem"
            >
              POBIERZ z Google Play
            </Button>
            <Button
              mt="2rem"
              leftIcon={<FaDesktop />}
              borderRadius="100"
              p="1.5rem"
            >
              POBIERZ na komputer
            </Button>
          </VStack>
        </CardBody>
      </Card>
    </Flex>
  );
}
