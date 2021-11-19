import { Flex, Button, Box, Image, Text, Img, Grid } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

import { BsPerson } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { FaArrowLeft, FaEnvelope } from "react-icons/fa";

import { Users } from "../../providers/Users";

import { InputTeste } from "../../components/Input";

import Gif from "../../assets/signupimg/Personal finance-pana.png";
import logo from "../../assets/logo1.svg";

export const Signup = () => {
  const history = useHistory();

  const { SignUp } = Users();

  const schema = yup.object().shape({
    username: yup.string().required("Item obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Item obrigatório"),
    // .matches(
    //   /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    //   "Senha deve ter letras maíuscula, mínuscula, numero e caracter"
    // ),
    passwordConfirm: yup
      .string()
      .required("Item obrigatório")
      .oneOf([yup.ref("password")], "As senhas nao combinam!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSignup = (data) => {
    SignUp(data);
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
        top={["40px", "50px", "110px"]}
        left={["40px", "50px", "110px"]}
      >
        <FaArrowLeft />
      </Box>
      <Flex
        w={["100vw", "100vw", "90vw"]}
        h={["100vh", "100vh", "90vh"]}
        justifyContent="center"
        alignItems="flex-end"
        color="whiteAlpha.900"
        borderRadius={["0px", "0px", "30px"]}
        boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
        backDropFilter="blur( 0px )"
        border="1px solid rgba( 255, 255, 255, 0.18 )"
        overflow="hidden"
      >
        <Flex
          bgGradient="linear(to-l, blue.500, gray.100)"
          w={["0%", "0%", "50%", "50%"]}
          h="100%"
          as="div"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            w={["80%", "90%", "80%", "80%"]}
            h={["80%", "90%", "80%", "80%"]}
            bg="gray.50"
            borderRadius="50%"
            overflow="hidden"
            display="flex"
            justifyContent="center"
            alignContent="center"
          >
            <Img src={Gif} />
          </Box>
        </Flex>
        <Box
          bg={["#FEFEFE", "#FEFEFE", "#FEFEFE"]}
          w={["100%", "80%", "50%"]}
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            as="form"
            w={["90%", "60%", "75%", "50%"]}
            padding="15px"
            borderRadius="5px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            color="#80807E"
            onSubmit={handleSubmit(onSignup)}
          >
            <Image src={logo} h={["150px", "150px", "120px", "140px"]} />

            <Box w="100%" mt="20px">
              <InputTeste
                label="Nome de usuário"
                placeholder="username"
                type="username"
                error={errors.username}
                icon={BsPerson}
                {...register("username")}
              />
            </Box>
            <Box w="100%" mt="20px">
              <InputTeste
                placeholder="Digite seu login"
                type="email"
                label="Login"
                error={errors.email}
                icon={FaEnvelope}
                {...register("email")}
              />
            </Box>

            <Box w="100%" mt="20px">
              <InputTeste
                label="Senha"
                type="password"
                placeholder="Digite sua Senha"
                error={errors.password}
                icon={FaLock}
                {...register("password")}
              />
            </Box>

            <Box w="100%" mt="20px">
              <InputTeste
                label="Senha"
                type="password"
                placeholder="Confirme sua Senha"
                error={errors.passwordConfirm}
                icon={FaLock}
                {...register("passwordConfirm")}
              />
            </Box>

            <Button
              bg={"blue.900"}
              color="white"
              w="80%"
              fontSize="20px"
              marginBottom="4"
              marginTop="4"
              type="submit"
              transition="0.5s"
              _hover={{ bg: "#1A1F22" }}
            >
              Cadastrar
            </Button>
            <Box
              h={["60px", "60px", "20px"]}
              w="100%"
              textAlign="center"
              fontSize="xs"
            >
              Já possui uma conta?
              <Text
                as="span"
                onClick={() => history.push("/login")}
                cursor="pointer"
                color={"blue.900"}
                transition="0.5s"
                _hover={{
                  color: "gray.200",
                }}
              >
                Clique aqui!
              </Text>
            </Box>
          </Grid>
        </Box>
      </Flex>
    </Flex>
  );
};
