import {
  Center,
  Checkbox,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaMoneyBillAlt,
  FaReceipt,
  FaExclamationCircle,
  FaTimes,
} from "react-icons/fa";

import { useReceive } from "../../providers/ContextReceives";
import { Users } from "../../providers/Users";

import { formatValue } from "../../utils/formatValue";
import { useEffect, useState } from "react";

export const BillsToReceive = () => {
  const { token, id } = Users();
  const { loadReceives, editReceive, newReceive } = useReceive();
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = id | localStorage.getItem("idfinan");
    loadReceives(userId, token).then((res) => {
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Stack w="100%" p={4} spacing={2}>
      <Flex justify="space-between" w="100%" color="gray.600" fontWeight="bold">
        <Text fontSize={{ md: "2xl", base: "sm" }}>Contas a Receber: </Text>
        <Icon
          as={FaMoneyBillAlt}
          fontSize={{ lg: "4xl", md: "2xl", base: "md" }}
        />
      </Flex>
      {!!newReceive.length ? (
        newReceive.map((item, idx) => (
          <Flex justify="space-between" color="gray" key={idx}>
            <HStack spacing={2}>
              <Icon as={FaReceipt} color="green" w="30px" />
              <Stack spacing={0}>
                <Text fontSize={{ lg: "lg", md: "md", base: "sm" }}>
                  {item.account}
                </Text>
                <Text
                  display={["none", "none", "none", "block"]}
                  fontSize={{ md: "sm", lg: "md" }}
                >
                  {item.data}
                </Text>
              </Stack>
            </HStack>
            <HStack spacing={2}>
              <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>
                {formatValue(item.value)}
              </Text>
              <Checkbox
                onChange={() => {
                  editReceive(item.id, token);
                  const userId = id | localStorage.getItem("idfinan");
                  loadReceives(userId, token);
                }}
              />
              <Icon
                as={FaTimes}
                my={2}
                fontSize={{ lg: "md", md: "sm", base: "xs" }}
                color="red"
              />
            </HStack>
          </Flex>
        ))
      ) : (
        <Center h="100%">
          <Flex direction="column" align="center" color="gray.300">
            <Text>Você não tem contas a receber</Text>
            <Icon as={FaExclamationCircle} my={2} fontSize="xl" />
          </Flex>
        </Center>
      )}
    </Stack>
  );
};
