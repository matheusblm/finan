import {
  Flex,
  Box,
  Stack,
  Progress,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaPizzaSlice,
  FaGlassCheers,
  FaTv,
  FaHouseDamage,
  FaUniversity,
  FaUserFriends,
  FaReceipt,
  FaSnowboarding,
  FaTshirt,
  FaBus,
  FaNetworkWired,
  FaPlus,
  FaEdit,
} from "react-icons/fa";
import { Menu } from "../../components/LimitDrawer";

const SpendLimit = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      w="100%"
      h="100%"
      backgroundColor="#e5e5e5"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Stack
        spacing={5}
        margin="20px"
        p={5}
        w="331px"
        h="663px"
        shadow="md"
        borderWidth="1px"
        borderRadius="2px"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Box w="272px" justifyContent="center">
          <Flex
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            w="100%"
          >
            <Text fontSize="20px">Despesas</Text>
            <Text alignSelf="flex-end">20,00 - 1.000,00</Text>
          </Flex>
          <Progress
            value={2}
            colorScheme="green"
            borderRadius="8px"
            height="28.78px"
          />
        </Box>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          h="38px"
          w="310px"
        >
          <Flex
            backgroundColor="white"
            borderRadius="100%"
            w="30px"
            h="30px"
            justifyContent="center"
            alignItems="center"
          >
            <FaPizzaSlice color="blue" />
          </Flex>
          <Flex w="252px" flexDirection="column">
            <Flex justifyContent="space-between">
              <Text fontSize="15px">Alimentação</Text>
              <Text fontSize="13px">20,00 - 100,00</Text>
            </Flex>
            <Box w="100%">
              <Progress
                value={20}
                colorScheme="green"
                borderRadius="8px"
                height="28.78px"
              />
            </Box>
          </Flex>
          <FaPlus onClick={onOpen} w="12px" />
          <Menu isOpen={isOpen} onClose={onClose} />
        </Flex>
      </Stack>
    </Flex>
  );
};

export default SpendLimit;
