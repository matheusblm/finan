import {
  Button,
  Center,
  Checkbox,
  Flex,
  HStack,
  Icon,
  Progress,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Doughnut } from "react-chartjs-2";
import {
  FaPlus,
  FaMinus,
  FaCalendarAlt,
  FaWallet,
  FaMoneyBillAlt,
  FaLandmark,
  FaCreditCard,
  FaReceipt,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import { ModalCreateRecive } from "../../components/ModalCreateRecive";
import { ModalCreateSpend } from "../../components/ModalCreateSpend";
import { useListDashboard } from "../../providers/Dashboard";


export const Dashboard = () => {
  const { receive, spend } = useListDashboard()

  const loan = spend.filter((card) => card.account === "Empréstimos")
  const creditCard = spend.filter((card) => card.account === "Catão de Crédito")

  const spendTotal = spend.reduce((acc, bill) => acc + bill.value, 0)

  console.log({ creditCard, loan, spend })

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

  return (
    <>
      <Center>
        <Stack py={4} w={"80%"}>
          <Flex
            h={{ xs: "500px", sm: "500px", base: "230px" }}
            bgGradient="linear(to-l, blue.500 0%, gray.50 99.65%)"
            p={2}
            borderRadius="lg"
            overflow="auto"
            boxShadow="lg"
          >
            <HeaderDashboard onOpenCreateRecive={onOpenCreateRecive} onOpenCreateSpend={onOpenCreateSpend} spendTotal={spendTotal} />
          </Flex>
          <Flex direction={{ md: "row", base: "column" }}>
            <Stack w={{ md: "45%", base: "100%" }} h="548px" mx={2}>
              <Flex
                w="100%"
                h={{ sm: "270px", base: "75px" }}
                flex={1}
                p={2}
                borderRadius="lg"
                overflow="auto"
                boxShadow="lg"
              >
                <WalletDashboard />
              </Flex>
              <Flex
                w="100%"
                h={{ sm: "270px", base: "75px" }}
                flex={1}
                p={2}
                borderRadius="lg"
                overflow="auto"
                boxShadow="lg"
              >
                <CreditCardDashboard />
              </Flex>
            </Stack>
            <Flex
              w="100%"
              h="548px"
              flex={1}
              p={2}
              borderRadius="lg"
              overflow="auto"
              boxShadow="lg"
              mx={2}
            >
              <SpendingOfTheMonth />
            </Flex>
          </Flex>
          <Flex direction={{ md: "row", base: "column" }}>
            <Flex
              w="100%"
              h="548px"
              flex={1}
              p={2}
              borderRadius="lg"
              overflow="auto"
              boxShadow="lg"
              mx={2}
            >
              <BillsToPay />
            </Flex>
            <Stack w={{ md: "45%", base: "100%" }} h="548px" mx={2}>
              <Flex
                w="100%"
                h={{ sm: "270px", base: "75px" }}
                flex={1}
                p={2}
                borderRadius="lg"
                overflow="auto"
                boxShadow="lg"
              >
                <ProgressBar />
              </Flex>
              <Flex
                w="100%"
                h={{ sm: "270px", base: "75px" }}
                flex={1}
                p={2}
                borderRadius="lg"
                overflow="auto"
                boxShadow="lg"
              >
                <BillsToReceive />
              </Flex>
            </Stack>
          </Flex>
        </Stack>
      </Center>
      <ModalCreateRecive
        isOpen={isOpenCreateRecive}
        onClose={onCloseCreateRecive}
      />
      <ModalCreateSpend
        isOpen={isOpenCreateSpend}
        onClose={onCloseCreateSpend}
      />
    </>
  );
};

const HeaderDashboard = ({ onOpenCreateRecive, onOpenCreateSpend, spendTotal }) => {
  return (
    <Flex
      direction={{ md: "row", base: "column" }}
      justify="space-between"
      w="100%"
    >
      <Flex
        direction="column"
        flex="2"
        justify="space-around"
        px={4}
        align={{ lg: "flex-start", base: "center" }}
      >
        <Text color="gray.600" fontSize="lg">
          Bem Vindo,
          <br /> Usuário
        </Text>
        <Flex direction={{ lg: "row", base: "column" }}>
          <Stack bg="white" borderRadius="lg" py={2} px={6} m={2}>
            <Text fontSize="sm" color="gray.600">
              Receita Mensal:
            </Text>
            <Text color="green" fontSize="sm">
              R$ 1.000.000,00
            </Text>
          </Stack>
          <Stack bg="white" borderRadius="lg" py={2} px={6} m={2}>
            <Text fontSize="sm" color="gray.600">
              Despesa Mensal:
            </Text>
            <Text color="red.300" fontSize="sm">
              R$ {spendTotal.toFixed(2)}
            </Text>
          </Stack>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        align="center"
        justify="center"
        flex="1"
        px={4}
        borderX={{ md: "2px solid #9e9ea7" }}
        my={{ base: "2" }}
      >
        <Flex
          direction="column"
          align="center"
          bg="white"
          borderRadius="lg"
          py={4}
          px={6}
        >
          <Text fontSize="sm" color="gray.600">
            Saldo Total:
          </Text>
          <Text fontSize="sm">R$ 1.000.000,00</Text>
        </Flex>
      </Flex>
      <Flex direction="column" flex="1" justify="center">
        <Stack py={4} px={8} spacing={12}>
          <Flex justify={{ base: "center", md: "flex-start" }}>
            <Text color="gray.600" fontSize="lg" fontWeight="bold">
              Acesso Rápido:
            </Text>
          </Flex>
          <Flex justify="space-around">
            <Button bg="white" w="94px" h="70" mx={1} >
              <Flex direction="column" align="center" justify="center" onClick={onOpenCreateRecive}>
                <Icon
                  bg="green"
                  color="white"
                  w="40px"
                  h="40px"
                  p={2}
                  borderRadius="lg"
                  as={FaPlus}
                  mb="4px"
                />
                <Text fontWeight="medium" fontSize="sm" color="gray.600">
                  Receita
                </Text>
              </Flex>
            </Button>
            <Button bg="white" w="94px" h="70" mx={1} onClick={onOpenCreateSpend}>
              <Flex direction="column" align="center" justify="center">
                <Icon
                  bg="red.300"
                  color="white"
                  w="40px"
                  h="40px"
                  p={2}
                  borderRadius="lg"
                  as={FaMinus}
                  mb="4px"
                />
                <Text fontWeight="medium" fontSize="sm" color="gray.600">
                  Despesa
                </Text>
              </Flex>
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
};

const WalletDashboard = () => {
  return (
    <Stack w="100%" p={4} spacing={2}>
      <Flex justify="space-between" w="100%" color="gray.600" fontWeight="bold">
        <Text fontSize={{ md: "2xl", base: "sm" }}>Carteira: </Text>
        <Icon as={FaWallet} fontSize={{ lg: "4xl", md: "2xl", base: "md" }} />
      </Flex>
      <Flex justify="space-between" color="gray.300">
        <HStack spacing={2}>
          <Icon as={FaLandmark} />
          <Text fontSize={{ lg: "lg", md: "md", base: "sm" }}>Conta Caixa</Text>
        </HStack>
        <HStack spacing={2}>
          <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>R$</Text>
          <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>3.000,00</Text>
        </HStack>
      </Flex>
    </Stack>
  );
};

const CreditCardDashboard = () => {
  return (
    <Stack w="100%" p={4} spacing={2}>
      <Flex justify="space-between" w="100%" color="gray.600" fontWeight="bold">
        <Text fontSize={{ md: "2xl", base: "sm" }}>Cartão de Crédito: </Text>
        <Icon
          as={FaCreditCard}
          fontSize={{ lg: "4xl", md: "2xl", base: "md" }}
        />
      </Flex>
      <Flex justify="space-between" color="gray.300">
        <HStack spacing={2}>
          <Icon as={FaCreditCard} color="red.300" w="30px" />
          <Stack spacing={0}>
            <Text fontSize={{ lg: "lg", md: "md", base: "sm" }}>
              Conta Caixa
            </Text>
            <Text
              display={["none", "none", "none", "block"]}
              fontSize={{ md: "sm", lg: "md" }}
            >
              Data Vencimento
            </Text>
            <Text
              display={["none", "none", "none", "block"]}
              fontSize={{ md: "sm", lg: "md" }}
            >
              10-11-21
            </Text>
          </Stack>
        </HStack>
        <HStack spacing={2}>
          <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>R$</Text>
          <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>3.000,00</Text>
          <Checkbox />
        </HStack>
      </Flex>
    </Stack>
  );
};

const SpendingOfTheMonth = () => {
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
          <Doughnut data={dataGrafico} />
        </Flex>
      </Center>
    </Stack>
  );
};

const ProgressBar = () => {
  return (
    <Stack w="100%" p={4} spacing={12}>
      <Flex justify="space-between" w="100%" color="gray.600" fontWeight="bold">
        <Text fontSize={{ md: "2xl", base: "sm" }}>Balanço do mês: </Text>
        <Icon
          as={FaCalendarAlt}
          fontSize={{ lg: "4xl", md: "2xl", base: "md" }}
        />
      </Flex>
      <Stack spacing={2}>
        <HStack>
          <Progress value={20} size="lg" colorScheme="red" w="80%" />
          <Text
            as="span"
            fontSize={{ lg: "md", md: "sm", base: "xs" }}
            color="gray.300"
          >
            20,00
          </Text>
        </HStack>
        <HStack>
          <Progress value={80} size="lg" colorScheme="green" w="80%" />
          <Text
            as="span"
            fontSize={{ lg: "md", md: "sm", base: "xs" }}
            color="gray.300"
          >
            80,00
          </Text>
        </HStack>
      </Stack>
    </Stack>
  );
};

const BillsToPay = () => {
  return (
    <Stack w="100%" p={4} spacing={2}>
      <Flex justify="space-between" w="100%" color="gray.600" fontWeight="bold">
        <Text fontSize={{ md: "2xl", base: "sm" }}>Contas a Pagar: </Text>
        <Icon
          as={FaMoneyBillAlt}
          fontSize={{ lg: "4xl", md: "2xl", base: "md" }}
        />
      </Flex>
      <Flex justify="space-between" color="gray.300">
        <HStack spacing={2}>
          <Icon as={FaFileInvoiceDollar} color="red.300" w="30px" />
          <Stack spacing={0}>
            <Text fontSize={{ lg: "lg", md: "md", base: "sm" }}>Água</Text>
            <Text
              display={["none", "none", "none", "block"]}
              fontSize={{ md: "sm", lg: "md" }}
            >
              10-11-21
            </Text>
          </Stack>
        </HStack>
        <HStack spacing={2}>
          <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>R$</Text>
          <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>3.000,00</Text>
          <Checkbox />
        </HStack>
      </Flex>
      <Flex justify="space-between" color="gray.300">
        <HStack spacing={2}>
          <Icon as={FaFileInvoiceDollar} color="red.300" w="30px" />
          <Stack spacing={0}>
            <Text fontSize={{ lg: "lg", md: "md", base: "sm" }}>Água</Text>
            <Text
              display={["none", "none", "none", "block"]}
              fontSize={{ md: "sm", lg: "md" }}
            >
              10-11-21
            </Text>
          </Stack>
        </HStack>
        <HStack spacing={2}>
          <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>R$</Text>
          <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>3.000,00</Text>
          <Checkbox />
        </HStack>
      </Flex>
    </Stack>
  );
};

const BillsToReceive = () => {
  return (
    <Stack w="100%" p={4} spacing={2}>
      <Flex justify="space-between" w="100%" color="gray.600" fontWeight="bold">
        <Text fontSize={{ md: "2xl", base: "sm" }}>Contas a Receber: </Text>
        <Icon
          as={FaMoneyBillAlt}
          fontSize={{ lg: "4xl", md: "2xl", base: "md" }}
        />
      </Flex>
      <Flex justify="space-between" color="gray">
        <HStack spacing={2}>
          <Icon as={FaReceipt} color="green" w="30px" />
          <Stack spacing={0}>
            <Text fontSize={{ lg: "lg", md: "md", base: "sm" }}>
              Salário Kenzie
            </Text>
            <Text
              display={["none", "none", "none", "block"]}
              fontSize={{ md: "sm", lg: "md" }}
            >
              10-11-21
            </Text>
          </Stack>
        </HStack>
        <HStack spacing={2}>
          <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>R$</Text>
          <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>3.500,00</Text>
          <Checkbox />
        </HStack>
      </Flex>
    </Stack>
  );
};

const dataGrafico = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
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
      data: [12, 19, 3, 5, 2],
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
