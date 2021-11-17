import {
  Flex,
  Button,
  FormControl,
  Input,
  FormLabel,
  InputLeftElement,
  InputGroup,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
import { Center } from "@chakra-ui/layout";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Users } from "../../providers/Users";
import logo from "../../assets/logo1.svg";
import Lottie from "react-lottie";
import animationData from "../../animations/animate-login.json";
import { useState } from "react";

export const Login = () => {
  
  const history = useHistory();

  const { token, errorLogin, Login } = Users();

  const schema = yup.object().shape({
    email: yup.string().required("Item obrigatório"),
    password: yup.string().required("Item obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onLogin = (data) => {
    Login(data);
  };
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="100vw"
      h="100vh"
      bg="#E5E5E5"
    >
      <Box
        onClick={() => history.push("/")}
        w="60px"
        h="60px"
        cursor="pointer"
        position="absolute"
        fontSize="25px"
        top={["40px", "50px", "100px"]}
        left={["40px", "50px", "130px"]}
      >
        <FaArrowLeft />
      </Box>
      <Flex
        w={["100vw", "100vw", "90vw"]}
        bg={["#B7C5DE", "#FEFEFE", "#FEFEFE"]}
        h={["100vh", "100vh", "90vh"]}
        justifyContent="center"
        alignItems="flex-end"
        color="whiteAlpha.900"
        borderRadius={["0px", "0px", "30px"]}
        overflow="hidden"
        boxShadow="xl"
      >
        <Box
          bg={["#FEFEFE", "#FEFEFE", "#FEFEFE"]}
          w={["100%", "50%", "50%"]}
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <FormControl
            as="form"
            w={["90%", "90%", "75%", "50%"]}
            height="100%"
            padding="15px"
            borderRadius="5px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            color="#80807E"
            onSubmit={handleSubmit(onLogin)}
          >
            <Flex height="35%" display="flex" alignContent="center">
              <Image h={["150px", "150px", "120px", "140px"]} src={logo} />
            </Flex>
            <FormLabel
              textAlign="left"
              w="100%"
              paddingLeft="2"
              fontSize="14px"
            >
              Email
            </FormLabel>
            <InputGroup flexDirection="column">
              <InputLeftElement>
                <HiOutlineMail />
              </InputLeftElement>
              <Input
                {...register("email")}
                marginBottom="0.5"
                type="email"
                placeholder="email"
                _placeholder={"fontSize:18px"}
              />
              <Text
                as="p"
                h="10px"
                paddingLeft="2"
                marginBottom="5px"
                fontSize="xs"
              >
                {errors.email?.message}
              </Text>
            </InputGroup>
            <FormLabel
              textAlign="left"
              w="100%"
              paddingLeft="2"
              fontSize="14px"
            >
              Senha
            </FormLabel>
            <InputGroup flexDirection="column">
              <InputLeftElement>
                <FaRegEyeSlash />
              </InputLeftElement>
              <Input
                {...register("password")}
                marginBottom="0.5"
                type="password"
                placeholder="password"
                _placeholder={"fontSize:18px"}
              />
              <Text
                as="p"
                h="10px"
                paddingLeft="2"
                marginBottom="5px"
                fontSize="xs"
              >
                {errors.password?.message}
              </Text>
            </InputGroup>

            <Button
              bg="#16425B"
              color="white"
              w="80%"
              fontSize="20px"
              marginBottom="4"
              marginTop="4"
              type="submit"
              transition="0.5s"
              _hover={{ bg: "#1A1F22" }}
            >
              Login
            </Button>
            <Box
              h={["60px", "60px", "20px"]}
              w="100%"
              textAlign="center"
              fontSize="xs"
            >
              Ainda não possui uma conta?
              <Text
                as="span"
                onClick={() => history.push("/register")}
                cursor="pointer"
                color={"blue.900"}
                transition="0.5s"
                _hover={{
                  color: "gray.200",
                }}
              >
                {" "}
                Clique aqui!
              </Text>
            </Box>
          </FormControl>
        </Box>
        <Flex
          bg="#9BADD0"
          w={["0%", "50%", "50%"]}
          h="100%"
          as="div"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            w="75%"
            h="75%"
            borderRadius="50%"
            bg="#FEFEFE"
            alignItems="center"
            alignContent="center"
            justifyContent="center"
          >
            <Flex
              height={["30%", "50%", "80%", "85%"]}
              width={["30%", "70%", "80%", "70%"]}
            >
              <Lottie
                options={defaultOptions}
                speed={0.5}
                isStopped={animationState.isStopped}
                isPaused={animationState.isPaused}
              />
            </Flex>

            {/* <Image
              src="https://s3-alpha-sig.figma.com/img/6bd4/c077/3073998c6d775893db11cffa4edbdc31?Expires=1637539200&Signature=A-zmXARI16HBl5eQt0M0xxvXTi2xhr9~DP6NaPvXWBtusfd6MdTjIcP1R0PSDjVJFRSOHxlpP~WpLR34Pe4xLqNuwfbd~5FM2M5rjAesz7hHyvrInAQu3B~4rUzl3XlOSciVj4C6kTx-DP5Pp8O3z5W4BHvwH~~fiiGleZu2DyYqL3SYJgtPgaN0yNW1zrp3e5SgSHEncnxrEgKc7u8~F0nnG~PxdqTRuW280czqiDIO~plECw01PnbFFRKFDMA7FveTKUPYEZGvnLi9rhBamlaoWONMyyyutuan60OFp9TL2o5rKVNH-FikwnUAwrI1Y24HjqyIii66JwMBIVUsFw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              
            /> */}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
