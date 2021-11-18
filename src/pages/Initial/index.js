import logo from "../../assets/logo.png";
import pizza from "../../assets/grafico-de-pizza 1.png";
import phone from "../../assets/mockupIphone.png";
import mobile from "../../assets/Mobile-Dash-page.jpg";

import { Flex, Center, Box, Image, Heading, Button } from "@chakra-ui/react";
import { HStack, Text, VStack } from "@chakra-ui/layout";

import { FaLinkedin } from "react-icons/fa";

import Wave from "react-wavify";
import ChakraCarousel from "../../components/ChakraCarrousel";
import { StarIcon } from "@chakra-ui/icons";

const Initial = () => {
  const team = [
    {
      nome: "Matheus Bueno",
      linkedin: "https://www.linkedin.com/in/matheus-b-648aaa111/",
      img: "https://media-exp1.licdn.com/dms/image/C4D03AQHVj5Ys3ni2MA/profile-displayphoto-shrink_800_800/0/1622549941138?e=1642636800&v=beta&t=Z8zSXuU7894zw65NCgBg5krmuRhNahhLWxhkbfb_3ow",
    },
    {
      nome: "Felipe Larson",
      linkedin: "https://www.linkedin.com/in/felipe-larson-da-silveira/",
      img: "https://media-exp1.licdn.com/dms/image/C4E03AQG8oUBueY7oug/profile-displayphoto-shrink_800_800/0/1637016651484?e=1642636800&v=beta&t=oUJ6aLOEwwkqOtpgC67efWWH6FHV8c5Hur3ibPxS7hs",
    },
    {
      nome: "Joao Pedro Nonato",
      linkedin:
        "https://www.linkedin.com/in/joao-pedro-nonato-santos-2b8aa851/",
      img: "https://media-exp1.licdn.com/dms/image/C4E03AQFxiM18dNj_1w/profile-displayphoto-shrink_800_800/0/1630896288365?e=1642636800&v=beta&t=vMF6nVSYW1sRnu5G7iwo1Btyx3c1330foRF9wDsE5-A",
    },
    {
      nome: "Victor Scherer",
      linkedin: "https://www.linkedin.com/in/victorscherer/",
      img: "https://media-exp1.licdn.com/dms/image/C4E03AQExwt2v9tzooA/profile-displayphoto-shrink_800_800/0/1616803614659?e=1642636800&v=beta&t=fnSI2PZOcaz1zkGdvlIop_o5ZitB6b8744RLp3dGIMg",
    },
    {
      nome: "Rafael Sousa",
      linkedin: "https://www.linkedin.com/in/rafael-sousa-61b654112/",
      img: "https://media-exp1.licdn.com/dms/image/C4E03AQHv5UolgU4ZyA/profile-displayphoto-shrink_800_800/0/1609942514853?e=1642636800&v=beta&t=z1uOyMc5GDJYMtQIrLS-jF_Tp2Q63gNit8AEL9WJXVA",
    },
  ];

  const reviews = [
    {
      name: "Renato",
      comment: "App muito bom!",
      note: 5,
    },
    {
      name: "Victor",
      comment: "App muito bom!",
      note: 5,
    },
    {
      name: "Manu",
      comment: "App muito bom!",
      note: 5,
    },
    {
      name: "Madu",
      comment: "App muito bom!",
      note: 5,
    },
    {
      name: "Matheus",
      comment: "App muito bom!",
      note: 5,
    },
    {
      name: "Laudemir",
      comment: "App muito bom!",
      note: 5,
    },
    {
      name: "William",
      comment: "App muito bom!",
      note: 5,
    },
    {
      name: "Felipe",
      comment: "App muito bom!",
      note: 5,
    },
    {
      name: "Davis",
      comment: "App muito bom!",
      note: 5,
    },
    {
      name: "Davis",
      comment: "App muito bom!",
      note: 5,
    },
  ];
  return (
    <>
      <Flex h={["22vh", "40.5vh", "500px"]} padding="30px">
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
          />{" "}
          <Button
            bg="#16425B"
            color="white"
            w="30%"
            h="40px"
            fontSize="md"
            type="submit"
            transition="0.5s"
            _hover={{ bg: "#1A1F22" }}
          >
            começar agora!
          </Button>
        </Flex>
        <Box
          w="248px"
          display={["none", "block"]}
          marginLeft={["0px", "0px", "100px"]}
          marginRight={["0px", "10px"]}
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
        justifyContent={["space-evenly", "space-between"]}
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
            Quando voce tem controle, tudo fica mais calmo!
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
