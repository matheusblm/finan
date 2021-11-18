import { Flex, Button, FormControl, Box, Image, Text } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Users } from "../../providers/Users";
import logo from "../../assets/logo1.svg";
import Lottie from "react-lottie";
import animationData from "../../animations/animate-login.json";
import { useState } from "react";
import { InputBase } from "../../components/Input";

export const Login = () => {
  const history = useHistory();
  const { Login } = Users();

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
  const [animationState] = useState({
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
    <Flex justifyContent="center" alignItems="center" w="100vw" h="100vh">
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
        bg={[
          "#B7C5DE",
          "rgba( 255, 255, 255, 0.15 )",
          "rgba( 255, 255, 255, 0.15 )",
        ]}
        h={["100vh", "100vh", "90vh"]}
        justifyContent="center"
        alignItems="flex-end"
        color="whiteAlpha.900"
        overflow="hidden"
        borderRadius={["0px", "0px", "30px"]}
        boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
        backDropFilter="blur( 0px )"
        border="1px solid rgba( 255, 255, 255, 0.18 )"
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
            <Box w="100%">
              <InputBase
                placeholder="Digite seu login"
                type="email"
                label="Login"
                error={errors.email}
                icon={FaEnvelope}
                {...register("email")}
              />
            </Box>
            <Box w="100%" mt="20px">
              <InputBase
                label="Senha"
                type="password"
                placeholder="Digite sua Senha"
                error={errors.password}
                icon={FaLock}
                {...register("password")}
              />
            </Box>

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
            h={["40%", "45%", "68%"]}
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
