import { useState } from "react";

import "./App.css";
import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Text,
  Input,
  HStack,
  Box,
  Divider,
  Stack,
  Button,
  Image,
  VStack,
  FormErrorMessage,
} from "@chakra-ui/react";
import arrow from "./assets/icon-arrow.svg";
import { useEffect } from "react";
import { useFormik } from "formik";
import { ageSchema } from "./Validations/Validation";
import { motion } from "framer-motion";

function App() {
  const [age, setAge] = useState({ year: "", month: "", day: "" });

  const [dob, setDoB] = useState({
    day: "",
    month: "",
    year: "",
  });

  //| Formik
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        day: "",
        month: "",
        year: "",
      },
      validationSchema: ageSchema,
      onSubmit: (values) => {
        const { day, month, year } = dob;
        setDoB({
          day: values.day,
          month: values.month,
          year: values.year,
        });
      },
    });

  //| Get Age
  const getAge = async () => {
    try {
      const DOB = new Date(`${dob?.year}-${dob?.month}-${dob?.day}`);
      const now = new Date();
      let year = now.getFullYear() - DOB.getFullYear();
      let month = now.getMonth() - DOB.getMonth();
      let day = now.getDate() - DOB.getDate();
      console.log(DOB);

      if (day < 0) {
        month--;
        day += new Date(DOB.getFullYear(), DOB.getMonth() + 1, 0).getDate();
      }
      if (month < 0) {
        year--;
        month += 12;
      }
      setAge({ year, month, day });
      // console.log(year, month, day);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (dob.day != "" && dob.month != "" && dob.year != "") {
      getAge();
      // console.warn(dob);
    }
  }, [dob]);

  return (
    <Grid
      as="main"
      placeContent="center"
      maxW="100%"
      minH="100vh"
      // bg={{ base: "teal", sm: "red" }}
      bg="hsl(0, 0%, 86%)"
    >
      {/* <Text>App</Text> */}
      <Stack
        as={motion.div}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition=".3s ease"
        w={{ base: "80%", md: "40rem" }}
        h={{ base: "auto", md: "33rem" }}
        bg="white"
        borderRadius={{ base: "20px 20px 100px", md: "20px 20px 150px" }}
        p={{ base: "5", md: "8" }}
        m={{ base: "auto", md: "0" }}
      >
        {/* Form  */}
        <Flex as="form" direction="column" onSubmit={handleSubmit}>
          <Flex gap={{ base: "1rem", md: "2rem" }} alignSelf="start">
            <FormControl
              h="5rem"
              w={{ base: "auto", md: "7.2rem" }}
              isInvalid={errors.day && touched.day}
            >
              <FormLabel
                fontSize=".6rem"
                mb="1"
                textStyle={errors.day && touched.day ? "error" : "label"}
              >
                DAY
              </FormLabel>
              <Input
                type="number"
                name="day"
                value={values.day}
                onChange={handleChange}
                // onKeyUp={handleSubmit} // get result as fill the input
                layerStyle="input"
                maxW={{ base: "auto", md: "7rem" }}
                h="3rem"
                placeholder="DD"
                _placeholder={{
                  color: "hsl(0, 1%, 44%)",
                  letterSpacing: "1px",
                }}
                focusBorderColor="hsl(259, 100%, 65%)"
                // _focus={{
                //   border: "1px solid pink",
                // }}
                // focusBorderColor="hsl(259, 100%, 65%)"
                isRequired
                onBlur={handleBlur}
              />
              <FormErrorMessage fontSize={{ base: ".4rem", md: ".6rem" }}>
                {errors.day}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              h="5rem"
              w={{ base: "auto", md: "7.2rem" }}
              isInvalid={errors.month && touched.month}
            >
              <FormLabel
                fontSize=".6rem"
                mb="1"
                textStyle={errors.month && touched.month ? "error" : "label"}
              >
                MONTH
              </FormLabel>
              <Input
                type="number"
                name="month"
                value={values.month}
                onChange={handleChange}
                // onKeyUp={handleSubmit} // get result as fill the input
                layerStyle="input"
                maxW={{ base: "auto", md: "7rem" }}
                h="3rem"
                placeholder="MM"
                _placeholder={{
                  color: "hsl(0, 1%, 44%)",
                  letterSpacing: "1px",
                }}
                focusBorderColor="hsl(259, 100%, 65%)"
                isRequired
                onBlur={handleBlur}
              />
              {/* <FormHelperText fontSize='.6rem' textStyle='error'>{errors.month}</FormHelperText> */}

              <FormErrorMessage fontSize={{ base: ".4rem", md: ".6rem" }}>
                {errors.month}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              h="5rem"
              w={{ base: "auto", md: "7.2rem" }}
              isInvalid={errors.year && touched.year}
            >
              <FormLabel
                fontSize=".6rem"
                mb="1"
                textStyle={errors.year && touched.year ? "error" : "label"}
              >
                YEAR
              </FormLabel>
              <Input
                type="number"
                name="year"
                value={values.year}
                onChange={handleChange}
                // onKeyUp={handleSubmit} // get result as fill the input
                layerStyle="input"
                maxW={{ base: "auto", md: "7rem" }}
                h="3rem"
                placeholder="YYYY"
                _placeholder={{
                  color: "hsl(0, 1%, 44%)",
                  letterSpacing: "1px",
                }}
                focusBorderColor="hsl(259, 100%, 65%)"
                isRequired
                onBlur={handleBlur}
              />
              {/* <FormHelperText fontSize='.6rem' textStyle='error'>{errors.year}</FormHelperText> */}

              <FormErrorMessage fontSize={{ base: ".4rem", md: ".6rem" }}>
                {errors.year}
              </FormErrorMessage>
            </FormControl>
          </Flex>
          {/* arrow button  */}
          <HStack spacing="0" position="relative" my="10">
            <Divider />
            <Button
              p={{ base: "3", md: "5" }}
              h="auto"
              type="submit"
              bg="hsl(259, 100%, 65%)"
              borderRadius="full"
              sx={{ aspectRatio: "1" }}
              _hover={{
                bg: "hsl(0, 0%, 8%)",
              }}
              position="absolute"
              right={{ base: "50%", md: "0%" }}
              // left='50%'
              transform={{ base: "translate(50%)", md: "translate(0%)" }}
              // transform='translate()'
            >
              <Image
                src={arrow}
                alt="img"
                maxH={{ base: "1.5rem", md: "3rem" }}
              />
            </Button>
          </HStack>
        </Flex>
        {/* Age Display  */}
        <Flex
          direction="column"
          justifyContent="start"
          gap="1"
          fontSize={{ base: "4xl", md: "6xl" }}
        >
          <Flex gap="1">
            <Text
              as={motion.p}
              key={age.day}
              initial={{ y: 30, opacity: 0, scale: 0 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition="0.3s linear"
              // transitionDelay=".1s"
              textStyle="result"
            >
              {age.year !== "" ? age.year : "--"}
            </Text>
            <Text as="h1" textStyle="res_text">
              years
            </Text>
          </Flex>
          <Flex gap="1">
            <Text
              as={motion.p}
              key={age.month}
              initial={{ y: 30, opacity: 0, scale: 0 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition="0.3s linear"
              transitionDelay="50ms"
              textStyle="result"
            >
              {age.month !== "" ? age.month : "--"}
            </Text>
            <Text textStyle="res_text">months</Text>
          </Flex>
          <Flex gap="1">
            <Text
              as={motion.p}
              key={age.year}
              initial={{ y: 30, opacity: 0, scale: 0 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition="0.3s linear"
              transitionDelay="100ms"
              textStyle="result"
            >
              {age.day !== "" ? age.day : "--"}
            </Text>
            <Text textStyle="res_text">days</Text>
          </Flex>
        </Flex>
      </Stack>
      {/* <Box
      as={motion.div}
      height='40px'
      width='40px'
      bg='orange.400'
      initial={{y:100}}
      animate={{y:0}}
      mt='12'
      drag='x'
      dragConstraints={{ left: -100, right: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition='0.5s linear'
      // not work: transition={{ transition: "0.5", ease: "linear" }}
    /> */}
    </Grid>
  );
}

export default App;
