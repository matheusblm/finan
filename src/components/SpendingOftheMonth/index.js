import { Center, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { FaCalendarAlt, FaExclamationCircle } from "react-icons/fa";
import { Doughnut } from "react-chartjs-2";
import { useSpend } from "../../providers/ContextSpend";

export const SpendingOfTheMonth = () => {
  const { arraySpend, arrayNameSpend } = useSpend();

  const dataGrafico = {
    labels: arrayNameSpend,
    options: {
      plugins: {
        labels: {
          responsive: true,
          position: "right",
        },
      },
    },
    datasets: [
      {
        data: arraySpend,
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Stack w="100%" p={4} spacing={2}>
      <Flex justify="space-between" w="100%" color="gray.600" fontWeight="bold">
        <Text fontSize={{ md: "2xl", base: "sm" }}>Gastos do mês: </Text>
        <Icon
          as={FaCalendarAlt}
          fontSize={{ lg: "4xl", md: "2xl", base: "md" }}
        />
      </Flex>
      <Center>
        <Flex h="290px" w={{ base: "250px", md: "300px", lg: "400px" }}>
          {arraySpend.length !== 0 ? (
            <Doughnut data={dataGrafico} />
          ) : (
            <Center h="100%">
              <Flex
                direction="column"
                align="center"
                alignContent="center"
                color="gray.300"
                w="100%"
              >
                <Text>Você não tem gastos cadastrados</Text>
                <Icon as={FaExclamationCircle} my={2} fontSize="xl" />
              </Flex>
            </Center>
          )}
        </Flex>
      </Center>
    </Stack>
  );
};
