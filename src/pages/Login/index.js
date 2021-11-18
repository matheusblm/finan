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
import { FaLinkedin } from "react-icons/fa";

export const Login = () => {
  const history = useHistory();

  const {Login } = Users();

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
        borderRadius="20px"
        overflow="hidden"
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
         bgGradient="linear(to-l, blue.500, gray.100)"
          w={["0%", "50%", "50%"]}
          h="100%"
          as="div"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            w="88%"
            h={["40%","45%","68%"]}
            maxW="480px"
            borderRadius="50%"
            bg="#FEFEFE"
            alignItems="center"
            alignContent="center"
            justifyContent="center"
          >
            <Flex
              height={["30%", "200px", "215px", "85%"]}
              width={["30%", "180px", "185px", "70%"]}
              maxH="380px"
              maxW="336px"
            >
              <Lottie
                options={defaultOptions}
                speed={0.5}
                isStopped={animationState.isStopped}
                isPaused={animationState.isPaused}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
