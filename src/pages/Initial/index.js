import logo from "../../assets/logo.png";
import pizza from "../../assets/grafico-de-pizza 1.png";
import phone from "../../assets/mockupIphone.png";
import mobile from "../../assets/initialPage.png";
import { Flex, Center, Box, Image, Heading, Button } from "@chakra-ui/react";
import { HStack, Text, VStack } from "@chakra-ui/layout";
import { FaLinkedin } from "react-icons/fa";
import Wave from "react-wavify";
import ChakraCarousel from "../../components/ChakraCarrousel";
import { StarIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";
import victorImg from "../../assets/victorImg.jpeg";
import matheusImg from "../../assets/1622549941138.jpeg";
import felipeImg from "../../assets/1637016651484.jpeg";
import joaoImg from "../../assets/1630896288365.jpeg";
import rafaImg from "../../assets/1609942514853.jpeg";
const Initial = () => {
  const history = useHistory();
  const team = [
    {
      nome: "Matheus Bueno",
      linkedin: "https://www.linkedin.com/in/matheus-b-648aaa111/",
      img: matheusImg,
    },
    {
      nome: "Felipe Larson",
      linkedin: "https://www.linkedin.com/in/felipe-larson-da-silveira/",
      img: felipeImg,
    },
    {
      nome: "Joao Pedro Nonato",
      linkedin:
        "https://www.linkedin.com/in/joao-pedro-nonato-santos-2b8aa851/",
      img: joaoImg,
    },
    {
      nome: "Victor Scherer",
      linkedin: "https://www.linkedin.com/in/victorscherer/",
      img: victorImg,
    },
    {
      nome: "Rafael Sousa",
      linkedin: "https://www.linkedin.com/in/rafael-sousa-61b654112/",
      img: rafaImg,
    },
  ];

  const reviews = [
    {
      name: "Renato",
      comment:
        "Esquece qualquer outro app, este sem dúvida é o mais intuitivo e eficiente. Fácil de manipular e vincular seus gastos com dashboard de verdade",
      note: 5,
    },
    {
      name: "Victor",
      comment:
        "Excelente App. Só falta mesmo, a integração com os Apps dos bancos e cartões de créditos.",
      note: 5,
    },
    {
      name: "Manu",
      comment:
        "O aplicativo é simples de usar e bem organizado, mais importante pra mim é a simplicidade do app diferente de outros que baixei onde tinha uma complexidade muito alta. Parabéns aos desenvolvedores.",
      note: 5,
    },
    {
      name: "Madu",
      comment:
        "Simplesmente excelente, bem simples de usar. Consigo ter uma ideia dos gastos tudo bem certinho. O aplicativo é ótimo!",
      note: 5,
    },
    {
      name: "Matheus",
      comment:
        "Um aplicativo simples, bonito e fácil de usar. Para mim é perfeito para controlar minhas finanças e ver com o que estou gastando mais o meu dinheiro. A única opção que faltou para mim foi poder colocar uma meta como algo que eu queira comprar no futuro e esteja guardando dinheiro para isso. Com essa opção ficaria perfeito!",
      note: 5,
    },
    {
      name: "Laudemir",
      comment:
        "Muito intuitivo e fácil de usar. Até o momento está atendendo as espectativas. Recomendo!",
      note: 5,
    },
    {
      name: "William",
      comment:
        "App excelente para se manter no controle das finanças, com toda opção de detalhamento acerca das despesas e receitas, além da fatura do cartão de crédito e limites de investimentos, fora a interface do app que é super intuitiva e prática.",
      note: 5,
    },
    {
      name: "Felipe",
      comment:
        "Eu gosto. Simples e eficaz. Não trava não tem anúncios E ele e bem completo pra mim né. Atende bem minhas necessidades",
      note: 5,
    },
    {
      name: "Davis",
      comment: "Só faltava sincronizar as contas em tempo real com o banco.",
      note: 5,
    },
    {
      name: "Junia",
      comment:
        "Muito bom, economiza muito tempo, antes fazia tudo manual, agora facilita minha vida. Possui ótimas funcionalidade, muitas opções, é bem fácil saber como funciona, recomendo o app.",
      note: 5,
    },
  ];

  return (
    <>
      <Flex h={["300px", "400px", "500px"]} padding="30px">
        <Flex
          w={["100%", "50%"]}
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          flexWrap="wrap"
        >
          <Image
            src={logo}
            alt="finan"
            height={["200px", "300px", "300px"]}
            w="300px"
            _hover={{ cursor: "pointer" }}
            onClick={() => history.push("/login")}
          />{" "}
          <Button
            bg="#16425B"
            color="white"
            w={["50%", "50%", "50%", "30%"]}
            h="40px"
            fontSize="md"
            type="submit"
            transition="0.5s"
            _hover={{ bg: "#1A1F22" }}
            onClick={() => history.push("/register")}
          >
            começar agora!
          </Button>
        </Flex>
        <Box
          w="248px"
          display={["", "block"]}
          marginLeft={["0px", "0px", "100px"]}
          marginRight={["0px", "10px"]}
          position="absolute"
          top={["350px", "0", "0"]}
          right={["50px", "50px", "100px", "300px"]}
        >
          <Center
            position="relative"
            zIndex="3"
            marginTop="8px"
            bg="gray.50"
            w={["143px", "143px", "200px"]}
            h={["105px", "105px", "140px"]}
            padding="20px"
            borderRadius="20px"
            boxShadow="0px 2px 4px #80807E"
          >
            <Heading
              color="gray.600"
              textAlign="left"
              fontSize={["xs", "xs", "md"]}
              fontWeight="bold"
            >
              Um site para voce ter as suas financas na palma da sua mao!
            </Heading>
          </Center>
          <Center
            position="relative"
            bottom="22px"
            zIndex="2"
            left={["100px", "100px", "100px", "140px"]}
            bg="gray.50"
            w={["143px", "143px", "200px"]}
            h={["105px", "105px", "140px"]}
            padding="20px"
            borderRadius="20px"
            boxShadow="0px 2px 4px #80807E"
          >
            <Heading
              color="gray.600"
              textAlign="left"
              fontSize={["xs", "xs", "md"]}
              fontWeight="bold"
            >
              Aprender a controlar seu orçamento é o modo mais prático de cortar
              gastos e começar a investir.
            </Heading>
          </Center>
          <Center
            position="relative"
            bottom="45px"
            zIndex="1"
            bg="gray.50"
            w={["143px", "143px", "220px"]}
            h={["105px", "105px", "140px"]}
            padding="20px"
            borderRadius="20px"
            boxShadow="0px 2px 4px #80807E"
          >
            <Heading
              color="gray.600"
              textAlign="left"
              fontSize={["xs", "xs", "md"]}
              fontWeight="bold"
            >
              Graficos representativos que te ajudam na compreencao!
            </Heading>
            <Image src={pizza} alt="finan" w="50%" />
          </Center>
        </Box>
      </Flex>
      <Box h="100px">
        <Wave
          fill="url(#gradient)"
          paused={false}
          options={{
            height: 10,
            amplitude: 40,
            speed: 0.15,
            points: 7,
          }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(100)">
              <stop offset="10%" stopColor="#D8E2F3 " />
              <stop offset="80%" stopColor="#f6f6f7" />
            </linearGradient>
          </defs>
        </Wave>
      </Box>

      <Flex
        bg="gray.50"
        h="700px"
        justifyContent={["space-evenly"]}
        flexDirection={["column", "row"]}
        alignContent="center"
        alignItems="center"
      >
        <Flex
          w="65%"
          marginTop="10px"
          maxW={["210px", "250px", "500px"]}
          justifyContent="center"
          flexDirection={["column"]}
          alignItems={["center"]}
        >
          <Heading
            fontSize={["2xl", "4xl", "6xl"]}
            marginLeft="8px"
            color="gray.600"
            width={["202px", "235px", "370px"]}
          >
            Quando voce tem <Text color="blue.800">controle</Text> tudo fica
            mais <Text color="blue.800">calmo!</Text>
          </Heading>
        </Flex>

        <Flex
          w={["40%", "40%", "25%"]}
          alignItems="center"
          display={["none", "flex"]}
          justifyContent="center"
          transform="rotate( 
            3deg)"
          mr="5"
        >
          <Image
            src={mobile}
            zIndex="0"
            alt="finan"
            w={["100px", "100px", "120px", "165px"]}
            h="365px"
            position="absolute"
            borderRadius="12px 12px 20px 20px"
          />
          <Image
            src={phone}
            zIndex="1"
            alt="finan"
            w={["200px", "215px"]}
            h="386px"
          />
        </Flex>
      </Flex>
      <Flex alignItems="center" flexDirection="column" h="700px">
        <Heading
          color="blue.800"
          marginTop="10px"
          marginBottom={["5px", "15px"]}
          fontSize={["xs", "md", "xl"]}
          height={["10%"]}
        >
          Time de desenvolvimento
        </Heading>

        <Flex
          flexWrap="wrap"
          justifyContent="center"
          w={["320px", "550px"]}
          h={["300px", "550px"]}
        >
          {team.map((person) => (
            <>
              <Flex alignItems="center" flexDirection="column" padding="10px">
                <Image
                  w={["90px", "100px", "130px", "150px"]}
                  h={["90px", "100px", "130px", "150px"]}
                  borderRadius="100%"
                  boxShadow="#80807e 1px 1px 4px 0px"
                  src={person.img}
                />
                <Heading
                  fontSize={["xs", "md", "md"]}
                  marginTop={["0px", "10px"]}
                >
                  {person.nome}
                </Heading>
                <Box
                  as="a"
                  href={person.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  fontSize={["20px", "30px"]}
                >
                  <FaLinkedin />
                </Box>
              </Flex>
            </>
          ))}
        </Flex>
      </Flex>

      <Flex
        h="500px"
        bgGradient="linear(to-l, blue.500, gray.50)"
        w="100%"
        borderRadius="20px"
        alignContent="center"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="column"
        padding="20px"
      >
        <Heading fontSize="2xl" color="blue.900">
          O que os Usuarios tem falado:
        </Heading>
        <ChakraCarousel gap={32}>
          {reviews.map((item, index) => (
            <Flex
              key={index}
              boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
              justifyContent="space-between"
              flexDirection="column"
              overflow="hidden"
              color="gray.300"
              bg="base.d100"
              rounded={5}
              flex={1}
              p={5}
            >
              <VStack mb={6}>
                <Heading
                  fontSize={{ base: "xl", md: "2xl" }}
                  textAlign="left"
                  w="full"
                  mb={2}
                >
                  {item.name}
                </Heading>
                <Text w="full">{item.comment}</Text>
              </VStack>

              <Flex justifyContent="space-between">
                <HStack spacing={2}>
                  <StarIcon color="yellow.500" />
                  <StarIcon color="yellow.500" />
                  <StarIcon color="yellow.500" />
                  <StarIcon color="yellow.500" />
                  <StarIcon color="yellow.500" />
                </HStack>
              </Flex>
            </Flex>
          ))}
        </ChakraCarousel>
      </Flex>
    </>
  );
};

export default Initial;
