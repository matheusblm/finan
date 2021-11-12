import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import {
  Center,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { FaPlusSquare, FaSearch, FaExclamationCircle } from "react-icons/fa";
import { CardEntry } from "../../components/CardEntry";
import { ModalCreateRecive } from "../../components/ModalCreateRecive";
import { ModalCreateSpend } from "../../components/ModalCreateSpend";

export const Entry = () => {
  const loading = false;
  const {
    isOpen: isOpenCreateRecive,
    onOpen: onOpenCreateRecive,
    onClose: onCloseCreateRecive,
  } = useDisclosure();
  const {
    isOpen: isOpenCreateSpend,
    onOpen: onOpenCreateSpend,
    onClose: onCloseCreateSpend,
  } = useDisclosure();

  const itens = [
    {
      title: "salario",
      valor: 100.0,
      completed: false,
      entry: true,
    },
    {
      title: "salario",
      valor: 10.0,
      completed: true,
      entry: false,
    },
    {
      title: "pizza",
      valor: 10.0,
      completed: false,
      entry: false,
    },
  ];

  return (
    <Flex w="100%" justifyContent="center" alignItems="center">
      <Flex
        padding="30px 15px"
        border="3px solid"
        borderColor="gray.100"
        bg="white"
        color="gray.900"
        mt="10"
        w={["100%", "100%", "40%", "40%"]}
        flexDirection="column"
        boxShadow="lg"
      >
        <Flex>
          <Heading size="md" color="gModalCreateReciveray.600">
            Lançamentos
          </Heading>
          <Center
            borderRadius="8px"
            as="button"
            w="30px"
            h="20px"
            alignSelf="start"
            fontSize="3xl"
            color="blue.800"
            _hover={{ color: "blue.900" }}
          >
            <Menu isLazy>
              <MenuButton>
                <FaPlusSquare />
              </MenuButton>
              <MenuList fontSize="xs" color="gray.900">
                <MenuItem
                  onClick={onOpenCreateRecive}
                  _hover={{ bg: "#DAFBDA" }}
                >
                  Nova Receita
                </MenuItem>
                <MenuItem
                  onClick={onOpenCreateSpend}
                  _hover={{ bg: " #F0E4E3" }}
                >
                  Nova Despesa
                </MenuItem>
              </MenuList>
            </Menu>
          </Center>
        </Flex>
        <HStack mt="6" spacing="2">
          <Flex w="100%">
            <InputGroup>
              <Input w="100%" placeholder="Filtrar..." />
              <InputRightElement w="9xl">
                <Button
                  fontSize="xl"
                  bg="transparent"
                  color="gray.600"
                  fontWeight="bold"
                  _hover={{ bg: "transparent", color: "gray.300" }}
                >
                  <FaSearch />
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
        </HStack>
        <VStack mt="5" padding="3">
          {loading ? (
            <div>Loading</div>
          ) : itens.length > 0 ? (
            itens.map((item) => <CardEntry item={item} />)
          ) : (
            <Flex flexDirection="column" color="gray.600">
              <Text>Voce ainda nao tem nenhum Lançamento</Text>
              <Center fontSize="xl">
                <FaExclamationCircle />
              </Center>
            </Flex>
          )}

          <Divider orientation="horizontal" />

          <Flex
            justifyContent="space-between"
            w="80%"
            padding="1"
            color="gray.600"
          >
            <Flex flexDirection="column">
              <Text>Saldo</Text>
              <Text>Previsto</Text>
            </Flex>
            <Flex flexDirection="column" fontWeight="bold">
              <Text>R$ 1000</Text>
              <Text>R$ 800</Text>
            </Flex>
          </Flex>
        </VStack>
      </Flex>
      <ModalCreateRecive
        isOpen={isOpenCreateRecive}
        onClose={onCloseCreateRecive}
      />
      <ModalCreateSpend
        isOpen={isOpenCreateSpend}
        onClose={onCloseCreateSpend}
      />
    </Flex>
  );
};
