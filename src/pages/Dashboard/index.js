import {
  Button,
  Center,
  Checkbox,
  Flex,
  HStack,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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
  FaReceipt,
  FaFileInvoiceDollar,
  FaExclamationCircle,
  FaPlusSquare,
  FaTimes,
} from "react-icons/fa";
import { ModalCreateRecive } from "../../components/ModalCreateRecive";
import { ModalCreateSpend } from "../../components/ModalCreateSpend";
import { useListDashboard } from "../../providers/Dashboard";
import { formatValue } from "../../utils/formatValue";
import Header from "../../components/Header";
import { useReceive } from "../../providers/ContextReceives";
import { useSpend } from "../../providers/ContextSpend";
import { Users } from "../../providers/Users";
import { Account } from "../../providers/Account";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";



export const Dashboard = () => {

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
      <Header />
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
            <HeaderDashboard
              onOpenCreateRecive={onOpenCreateRecive}
              onOpenCreateSpend={onOpenCreateSpend}
            />
          </Flex>
          <Flex direction={{ md: "row", base: "column" }}>
            <Stack w={{ md: "45%", base: "100%" }} h="548px" mx={[0, 0, 2]}>
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
                <ProgressBar />
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
              mx={[0, 0, 2]}
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
              mx={[0, 0, 2]}
            >
              <BillsToPay />
            </Flex>

            <Flex
              w="100%"
              h="548px"
              flex={1}
              p={2}
              borderRadius="lg"
              overflow="auto"
              boxShadow="lg"
              mx={[0, 0, 2]}
            >
              <BillsToReceive />
            </Flex>
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

const HeaderDashboard = ({
  onOpenCreateRecive,
  onOpenCreateSpend,
}) => {

  const {
    receivedTotal,
    spendedTotal,
    spendTotal,
    receiveTotal
  } = useListDashboard();

  const { username } = Users();

  const Saldo = receivedTotal - spendedTotal;

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
          Bem Vindo, {username.toUpperCase()}
        </Text>
        <Flex direction={{ lg: "row", base: "column" }}>
          <Stack bg="white" borderRadius="lg" py={2} px={6} m={2}>
            <Text fontSize="sm" color="gray.600">
              Receita Mensal:
            </Text>
            <Text color="green" fontSize="sm">
              {formatValue(receivedTotal)}
            </Text>
          </Stack>
          <Stack bg="white" borderRadius="lg" py={2} px={6} m={2}>
            <Text fontSize="sm" color="gray.600">
              Despesa Mensal:
            </Text>
            <Text color="red.300" fontSize="sm">
              {formatValue(spendedTotal)}
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
          <Text fontSize="sm" color={Saldo > 0 ? "green" : "red"}>
            {formatValue(Saldo)}
          </Text>
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
            <Button bg="white" w="94px" h="70" mx={1}>
              <Flex
                direction="column"
                align="center"
                justify="center"
                onClick={onOpenCreateRecive}
              >
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
            <Button
              bg="white"
              w="94px"
              h="70"
              mx={1}
              onClick={onOpenCreateSpend}
            >
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

  const { openModalWallet, handleModalWallet } = useListDashboard()

  const {id,token} = Users()

  const {account,getAccount} = Account()

  useEffect(() => {
    const userId = id || localStorage.getItem("idfinan");
    getAccount(userId, token);
  }, []);

  console.log(account)
  return (
    <Stack w="100%" p={4} spacing={2}>
      <Flex justify="space-between" w="100%" color="gray.600" fontWeight="bold">
        <Text fontSize={{ md: "2xl", base: "sm" }}>Carteira: </Text>
        <HStack spacing={8}>
          <Button onClick={handleModalWallet}>
            <Icon as={FaPlusSquare} my={2} fontSize={{ lg: "2xl", md: "xl", base: "lg" }} color="green" />
          </Button>
          <Icon as={FaWallet} fontSize={{ lg: "4xl", md: "2xl", base: "md" }} />
        </HStack>
      </Flex>
      { account ? 
       account.map((acc,index)=>
              <Flex justify="space-between" color="gray.300" key={index} >
                <HStack spacing={2}>
                  <Icon as={FaLandmark} />
                  <Text fontSize={{ lg: "lg", md: "md", base: "sm" }}>
                    {acc.bank}
                  </Text>
                </HStack>
                <HStack spacing={2}>
                  <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>R$</Text>
                  <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>
                    {acc.over}
                  </Text>
                </HStack>
              </Flex>)
        :
        <Center h="100%">
             <Flex
               direction="column"
               align="center"
               alignContent="center"
               color="gray.300"
               w="100%"
             >
               <Text>Você não tem contas cadastradas ainda</Text>
               <Icon as={FaExclamationCircle} my={2} fontSize="xl" />
             </Flex>
           </Center>
      
        // false ? (
        //   <Flex justify="space-between" color="gray.300">
        //     <HStack spacing={2}>
        //       <Icon as={FaLandmark} />
        //       <Text fontSize={{ lg: "lg", md: "md", base: "sm" }}>
        //         Conta Caixa
        //       </Text>
        //     </HStack>
        //     <HStack spacing={2}>
        //       <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>R$</Text>
        //       <Text fontSize={{ lg: "md", md: "sm", base: "xs" }}>
        //         3.000,00
        //       </Text>
        //     </HStack>
        //   </Flex>
        // ) : (
        //   <Center h="100%">
        //     <Flex
        //       direction="column"
        //       align="center"
        //       alignContent="center"
        //       color="gray.300"
        //       w="100%"
        //     >
        //       <Text>Você não tem contas cadastradas ainda</Text>
        //       <Icon as={FaExclamationCircle} my={2} fontSize="xl" />
        //     </Flex>
        //   </Center>
        // )
      }
      {
        openModalWallet &&
        <ModalWallet />
      }
    </Stack>
  );
};


const createTaskSchema = yup.object().shape({
  bank: yup.string().required("Campo obrigatório"),
  value: yup.string().required("Campo obrigatório"),
});

const ModalWallet = () => {

  const { openModalWallet, handleModalWallet } = useListDashboard()

  const {getAccount,letAccount} = Account()

  const {id,token} = Users()

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(createTaskSchema),
  });

  const handleWallet = ({bank,value}) => {
      const over = Number(value)
      const userId = id || localStorage.getItem("idfinan");
      const newData = {bank,over,userId}
      letAccount(newData,token)
      getAccount(token)
  }

  return (
    <Modal isOpen={openModalWallet}>
      <ModalOverlay />
      <ModalContent
        as="form"
        onSubmit={handleSubmit(handleWallet)}
        padding="2"
        bg="white"
        color="gray.800"
      >
        <ModalHeader display="flex">
          <Text fontWeight="bold" ml="2">
            Nova Carteira
          </Text>
          <Center
            onClick={handleModalWallet}
            as="button"
            ml="auto"
            w="32px"
            h="32px"
            bg="red.600"
            fontSize="lg"
            borderRadius="md"
          >
            <FaTimes color="white" />
          </Center>
        </ModalHeader>

        <ModalBody textAlign="center">
          <Stack spacing="5">
            <Input {...register("bank")} placeholder="Digite o banco" />
            <Input {...register("value")} placeholder="Valor da Receita" />
          </Stack>
        </ModalBody>

        <ModalFooter flexDirection="column">
          <Button
            as="button"
            type="submit"
            bg="blue.900"
            color="white"
            w="100%"
            h="40px"
            _hover={{ bg: "blue.800" }}
          >
            Criar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

const SpendingOfTheMonth = () => {

  const {
    arraySpend,
    arrayNameSpend
  } = useListDashboard();

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
            <Center h="100%" w="100%">
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

const ProgressBar = () => {

  const {
    spendTotal,
    receiveTotal
  } = useListDashboard();


  const total = receiveTotal + spendTotal;

  const spendProgress = spendTotal !== 0 ? (spendTotal / total) * 100 : 0;
  const receiveProgress = receiveTotal !== 0 ? (receiveTotal / total) * 100 : 0;

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
          <Progress
            value={spendProgress.toFixed(2)}
            size="lg"
            colorScheme="red"
            w="80%"
          />
          <Text
            as="span"
            fontSize={{ lg: "md", md: "sm", base: "xs" }}
            color="gray.300"
          >
            {!!spendProgress && spendProgress.toFixed(2) + " %"}
          </Text>
        </HStack>
        <HStack>
          <Progress
            value={receiveProgress.toFixed(2)}
            size="lg"
            colorScheme="green"
            w="80%"
          />
          <Text
            as="span"
            fontSize={{ lg: "md", md: "sm", base: "xs" }}
            color="gray.300"
          >
            {!!receiveProgress && receiveProgress.toFixed(2) + " %"}
          </Text>
        </HStack>
      </Stack>
    </Stack>
  );
};

const BillsToPay = () => {
  const { editSpend, deleteSpend } = useSpend();
  const { token } = Users();

  const {
    newSpend,
    getAllSpend
  } = useListDashboard();

  return (
    <Stack w="100%" p={4} spacing={2}>
      <Flex justify="space-between" w="100%" color="gray.600" fontWeight="bold">
        <Text fontSize={{ md: "2xl", base: "sm" }}>Contas a Pagar: </Text>
        <Icon
          as={FaMoneyBillAlt}
          fontSize={{ lg: "4xl", md: "2xl", base: "md" }}
        />
      </Flex>
      {!!newSpend.length ? (
        newSpend.map((item, idx) => (
          <Flex key={idx} justify="space-between" color="gray.300">
            <HStack spacing={2}>
              <Icon as={FaFileInvoiceDollar} color="red.300" w="30px" />
              <Stack spacing={0}>
                <Text fontSize={{ lg: "lg", md: "md", base: "sm" }}>
                  {item.account}
                </Text>
                <Text
                  display={["none", "none", "block", "block"]}
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
              <Checkbox onChange={() => {
                editSpend(item.id, token)
                getAllSpend()
              }} />
              <Icon onClick={()=> {
                deleteSpend(item.id, token)
                getAllSpend()
              }} as={FaTimes} my={2} fontSize={{ lg: "md", md: "sm", base: "xs" }} color="red" />
            </HStack>
          </Flex>
        ))
      ) : (
        <Center h="100%">
          <Flex direction="column" align="center" color="gray.300">
            <Text>Você não tem contas a pagar</Text>
            <Icon as={FaExclamationCircle} my={2} fontSize="xl" />
          </Flex>
        </Center>
      )}
    </Stack>
  );
};

const BillsToReceive = () => {
  const { editReceive,deleteReceive } = useReceive();

  const { token } = Users();

  const {
    newReceive,
    getAllReceive
  } = useListDashboard();

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
              <Checkbox onChange={() => {
                editReceive(item.id, token)
                getAllReceive()
              }} />
              <Icon onClick={()=>{
                deleteReceive(item.id,token)
                getAllReceive()
              }} as={FaTimes} my={2} fontSize={{ lg: "md", md: "sm", base: "xs" }} color="red" />
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
