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
import Header from "../../components/Header";
import { useLimits } from '../../providers/Limits';
import { Users } from "../../providers/Users";
import { formatValue } from "../../utils/formatValue";

const SpendLimit = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { totalSpends, userSpends, totalLimit } = useLimits();

  const { limits } = Users()

  const progressValue = (spend, limit) => {
    return spend / limit * 100
  }

  const { alimentacao, assinaturas, bares, casa, educacao, familia, impostos, lazer, outros, roupas, transportes } = limits;

  // const renderbars = ["alimentacao", "assinaturas", "bares", "casa", "educacao", "familia", "impostos", "lazer", "outros", "roupas", "transportes"]

  const filterLimits = (category) => userSpends.filter((spend) => spend.category === category)

  const spendReduce = (spend) => spend.reduce((acc, value) => { return acc + value.value }, 0);

  const filteredFood = filterLimits("alimentacao")
  const filtroAssinaturas = filterLimits("assinatura")
  const filteredBares = filterLimits("bares")
  const filteredEducacao = filterLimits("educacao")
  const filteredFamilia = filterLimits("familia")
  const filteredImpostos = filterLimits("impostos")
  const filteredCasa = filterLimits("casa")
  const filteredLazer = filterLimits("lazer")
  const filteredOutros = filterLimits("outros")
  const filteredRoupas = filterLimits("roupas")
  const filteredTransportes = filterLimits("transportes")

  const reduceFood = spendReduce(filteredFood)
  const reduceAssinaturas = spendReduce(filtroAssinaturas)
  const reduceBares = spendReduce(filteredBares)
  const reduceEducacao = spendReduce(filteredEducacao)
  const reduceFamilia = spendReduce(filteredFamilia)
  const reduceImpostos = spendReduce(filteredImpostos)
  const reduceCasa = spendReduce(filteredCasa)
  const reduceLazer = spendReduce(filteredLazer)
  const reduceOutros = spendReduce(filteredOutros)
  const reduceRoupas = spendReduce(filteredRoupas)
  const reduceTransportes = spendReduce(filteredTransportes)



  return (
    <>
      <Header />
      <Flex
        w="100%"
        h="100%"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Stack
          spacing={5}
          margin="20px"
          p={5}
          w="360px"
          h="800px"
          shadow="md"
          borderWidth="1px"
          borderRadius="2px"
          justifyContent="flex-start"
          alignItems="center"
        >
          {/* Despesas */}
          <Box w="272px" justifyContent="center">
            <Flex
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
              w="100%"
            >
              <Text fontSize="20px">Despesas</Text>
              <Text alignSelf="flex-end">{formatValue(totalSpends)} - {formatValue(totalLimit)}</Text>
            </Flex>
            <Progress
              value={progressValue(totalSpends, totalLimit) || 0}
              colorScheme="green"
              borderRadius="8px"
              height="28.78px"
            />
          </Box>
          {/* Alimentação */}
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
                <Text fontSize="13px">{formatValue(reduceFood)} - {formatValue(alimentacao) || formatValue(0)}</Text>
              </Flex>
              <Box w="100%">
                <Progress
                  value={progressValue(reduceFood, alimentacao) || 0}
                  colorScheme="green"
                  borderRadius="8px"
                  height="28.78px"
                />
              </Box>
            </Flex>
            <FaPlus onClick={onOpen} w="12px" />
            <Menu isOpen={isOpen} onClose={onClose} categoryName="alimentacao" />
          </Flex>
          {/* Assinaturas */}
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
              <FaTv color="blue" />
            </Flex>
            <Flex w="252px" flexDirection="column">
              <Flex justifyContent="space-between">
                <Text fontSize="15px">Assinaturas</Text>
                <Text fontSize="13px">{formatValue(reduceAssinaturas)} - {formatValue(assinaturas) || formatValue(0)}</Text>
              </Flex>
              <Box w="100%">
                <Progress
                  value={progressValue(reduceAssinaturas, assinaturas) || 0}
                  colorScheme="green"
                  borderRadius="8px"
                  height="28.78px"
                />
              </Box>
            </Flex>
            <FaPlus onClick={onOpen} w="12px" />
            <Menu isOpen={isOpen} onClose={onClose} categoryName="assinaturas" />
          </Flex>
          {/* Bares */}
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
              <FaGlassCheers color="blue" />
            </Flex>
            <Flex w="252px" flexDirection="column">
              <Flex justifyContent="space-between">
                <Text fontSize="15px">Bares</Text>
                <Text fontSize="13px">{formatValue(reduceBares)} - {formatValue(bares) || formatValue(0)}</Text>
              </Flex>
              <Box w="100%">
                <Progress
                  value={progressValue(reduceBares, bares) || 0}
                  colorScheme="green"
                  borderRadius="8px"
                  height="28.78px"
                />
              </Box>
            </Flex>
            <FaPlus onClick={onOpen} w="12px" />
            <Menu isOpen={isOpen} onClose={onClose} categoryName="bares" />
          </Flex>
          {/* Casa */}
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
              <FaHouseDamage color="blue" />
            </Flex>
            <Flex w="252px" flexDirection="column">
              <Flex justifyContent="space-between">
                <Text fontSize="15px">Casa</Text>
                <Text fontSize="13px">{formatValue(reduceCasa)} - {formatValue(casa) || formatValue(0)}</Text>
              </Flex>
              <Box w="100%">
                <Progress
                  value={progressValue(reduceCasa, casa) || 0}
                  colorScheme="green"
                  borderRadius="8px"
                  height="28.78px"
                />
              </Box>
            </Flex>
            <FaPlus onClick={onOpen} w="12px" />
            <Menu isOpen={isOpen} onClose={onClose} categoryName="casa" />
          </Flex>
          {/* Educação */}
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
              <FaUniversity color="blue" />
            </Flex>
            <Flex w="252px" flexDirection="column">
              <Flex justifyContent="space-between">
                <Text fontSize="15px">Educação</Text>
                <Text fontSize="13px">{formatValue(reduceEducacao)} - {formatValue(educacao) || formatValue(0)}</Text>
              </Flex>
              <Box w="100%">
                <Progress
                  value={progressValue(reduceEducacao, educacao) || 0}
                  colorScheme="green"
                  borderRadius="8px"
                  height="28.78px"
                />
              </Box>
            </Flex>
            <FaPlus onClick={onOpen} w="12px" />
            <Menu isOpen={isOpen} onClose={onClose} categoryName="educacao" />
          </Flex>
          {/* Familia */}
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
              <FaUserFriends color="blue" />
            </Flex>
            <Flex w="252px" flexDirection="column">
              <Flex justifyContent="space-between">
                <Text fontSize="15px">Familia</Text>
                <Text fontSize="13px">{formatValue(reduceFamilia)} - {formatValue(familia) || formatValue(0)}</Text>
              </Flex>
              <Box w="100%">
                <Progress
                  value={progressValue(reduceFamilia, familia) || 0}
                  colorScheme="green"
                  borderRadius="8px"
                  height="28.78px"
                />
              </Box>
            </Flex>
            <FaPlus onClick={onOpen} w="12px" />
            <Menu isOpen={isOpen} onClose={onClose} categoryName="familia" />
          </Flex>
          {/* Impostos */}
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
              <FaReceipt color="blue" />
            </Flex>
            <Flex w="252px" flexDirection="column">
              <Flex justifyContent="space-between">
                <Text fontSize="15px">Impostos</Text>
                <Text fontSize="13px">{formatValue(reduceImpostos)} - {formatValue(impostos) || formatValue(0)}</Text>
              </Flex>
              <Box w="100%">
                <Progress
                  value={progressValue(reduceImpostos, impostos) || 0}
                  colorScheme="green"
                  borderRadius="8px"
                  height="28.78px"
                />
              </Box>
            </Flex>
            <FaPlus onClick={onOpen} w="12px" />
            <Menu isOpen={isOpen} onClose={onClose} categoryName="impostos" />
          </Flex>
          {/* Lazer */}
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
              <FaSnowboarding color="blue" />
            </Flex>
            <Flex w="252px" flexDirection="column">
              <Flex justifyContent="space-between">
                <Text fontSize="15px">Lazer</Text>
                <Text fontSize="13px">{formatValue(reduceLazer)} - {formatValue(lazer) || formatValue(0)}</Text>
              </Flex>
              <Box w="100%">
                <Progress
                  value={progressValue(reduceLazer, lazer) || 0}
                  colorScheme="green"
                  borderRadius="8px"
                  height="28.78px"
                />
              </Box>
            </Flex>
            <FaPlus onClick={onOpen} w="12px" />
            <Menu isOpen={isOpen} onClose={onClose} categoryName="lazer" />
          </Flex>
          {/* Roupas */}
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
              <FaTshirt color="blue" />
            </Flex>
            <Flex w="252px" flexDirection="column">
              <Flex justifyContent="space-between">
                <Text fontSize="15px">Roupas</Text>
                <Text fontSize="13px">{formatValue(reduceRoupas)} - {formatValue(roupas) || formatValue(0)}</Text>
              </Flex>
              <Box w="100%">
                <Progress
                  value={progressValue(reduceRoupas, roupas) || 0}
                  colorScheme="green"
                  borderRadius="8px"
                  height="28.78px"
                />
              </Box>
            </Flex>
            <FaPlus onClick={onOpen} w="12px" />
            <Menu isOpen={isOpen} onClose={onClose} categoryName="roupas" />
          </Flex>
          {/* Transportes */}
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
              <FaBus color="blue" />
            </Flex>
            <Flex w="252px" flexDirection="column">
              <Flex justifyContent="space-between">
                <Text fontSize="15px">Transportes</Text>
                <Text fontSize="13px">{formatValue(reduceTransportes)} - {formatValue(transportes) || formatValue(0)}</Text>
              </Flex>
              <Box w="100%">
                <Progress
                  value={progressValue(reduceTransportes, transportes) || 0}
                  colorScheme="green"
                  borderRadius="8px"
                  height="28.78px"
                />
              </Box>
            </Flex>
            <FaPlus onClick={onOpen} w="12px" />
            <Menu isOpen={isOpen} onClose={onClose} categoryName="transportes" />
          </Flex>
          {/* Outros */}
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
              <FaNetworkWired color="blue" />
            </Flex>
            <Flex w="252px" flexDirection="column">
              <Flex justifyContent="space-between">
                <Text fontSize="15px">Outros</Text>
                <Text fontSize="13px">{formatValue(reduceOutros)} - {formatValue(outros) || formatValue(0)}</Text>
              </Flex>
              <Box w="100%">
                <Progress
                  value={progressValue(reduceOutros, outros) || 0}
                  colorScheme="green"
                  borderRadius="8px"
                  height="28.78px"
                />
              </Box>
            </Flex>
            <FaPlus onClick={onOpen} w="12px" />
            <Menu isOpen={isOpen} onClose={onClose} categoryName="outros" />
          </Flex>

        </Stack>
      </Flex>
    </>
  );
};

export default SpendLimit;