import React, { FormEvent, useEffect, useState } from "react";

import { completedTask, createTask } from "../store/taskSlice";
import { useDispatch, useSelector } from "react-redux";

import { jsx, css } from "@emotion/react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
} from "@chakra-ui/react";

import { SunIcon } from "@chakra-ui/icons";
import { CheckCircleIcon } from "@chakra-ui/icons";
import CheckIcon from "../assets/icon-check.svg";

import style from "./home.module.css";

interface Tasks {
  id: number;
  title: string;
}

const Home: React.FC = () => {
  const tasks = useSelector((state: any) => state.task.task);

  const [allTasks, setAllTasks] = useState("");
  const [taskCompleted, setTaskCompleted] = useState(false);

  const dispatch = useDispatch();

  const handleAddTask = (event: FormEvent) => {
    event.preventDefault();

    dispatch(createTask({ id: Math.random(), title: allTasks, completed: false, }));
  };

  const handleCompletedTask = () => {
   
  }

  return (
    <Flex
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      as="div"
      w="100%"
      minHeight="100vh"
      bg="#161620"
    >
      <Flex
        as="header"
        w="100%"
        h="200px"
        bgRepeat="no-repeat"
        bgImage={`/images/bg-mobile-dark.jpg`}
        bgSize="cover"
        justifyContent="space-between"
      >
        <Heading fontSize="3xl" p="5%" color="white">
          Todo List
        </Heading>
        <Button
          fontSize="2xl"
          mt="1.6rem"
          color="white"
          bg="transparent"
          _active={{ bg: "transparent" }}
          _focus={{ border: 0 }}
          _hover={{ bg: "none", color: "hsl(280, 87%, 65%)" }}
          leftIcon={<SunIcon />}
        ></Button>
      </Flex>

      <Flex
        flexWrap="wrap"
        as="main"
        w="90%"
        minH="90vh"
        p="1% 0"
        m="2% 0"
        mt="-6rem"
      >
        <Box w="100%" as="div">
          <FormControl as="form" mb="1rem" id="text">
            <Flex as="div">
              <Input
                w="100%"
                h="40px"
                type="text"
                border="0"
                color="white"
                bg="#25273c"
                value={allTasks}
                onChange={(event: any) => setAllTasks(event.target.value)}
              />
              <Button
                onClick={handleAddTask}
                border="0"
                h="40px"
                ml="-0.3rem"
                bg="hsl(192, 100%, 67%)"
                _active={{ bg: "transparent" }}
                _focus={{ border: 0 }}
                _hover={{ bg: "hsl(220, 98%, 61%)" }}
              >
                Add
              </Button>
            </Flex>
          </FormControl>

          <Box
            borderRadius="8px"
            as="article"
            w="100%"
            minH="90vh"
            bg="#25273c"
            p="2%"
          >
            <Flex
              flexWrap="wrap"
              as="div"
              align="center"
              p="0 2%"
              justifyContent="space-between"
              w="100%"
              minH="40px"
              color="#888aa1"
            >
              {taskCompleted == false
                ? tasks.map((task: Tasks) => (
                    <React.Fragment key={task.title}>
                      <Flex
                        key={task.id}
                        as="div"
                        w="100%"
                        minH="40px"
                        m="2% 0"
                        align="center"
                      >
                        <Button
                          textAlign="center"
                          fontSize="1.5rem"
                          bg="transparent"
                          _active={{ bg: "transparent" }}
                          _focus={{ border: 0 }}
                          _hover={{ bg: "none", color: "hsl(220, 98%, 61%)" }}
                          leftIcon={<CheckCircleIcon />}
                          onClick={() => handleCompletedTask()}
                        ></Button>
                        <Box as="div" w="90%" h="auto" p="2%">
                          {task.title}
                        </Box>
                      </Flex>
                      <Box as="div" w="100%" h="1px" bg="#888aa1"></Box>
                    </React.Fragment>
                  ))
                : tasks.map((task: Tasks) => (
                    <React.Fragment key={task.title}>
                      <Flex
                        as="div"
                        w="100%"
                        minH="40px"
                        m="2% 0"
                        align="center"
                      >
                        <Button
                          fontSize="1.5rem"
                          bg="transparent"
                          _active={{ bg: "transparent" }}
                          _focus={{ border: 0 }}
                          _hover={{ bg: "none", color: "hsl(220, 98%, 61%)" }}
                          leftIcon={<CheckCircleIcon />}
                        ></Button>
                        <Box
                          color="#595959"
                          textDecoration="line-through"
                          as="div"
                          w="90%"
                          h="auto"
                          p="2%"
                        >
                          {task.title}
                        </Box>
                      </Flex>
                      <Box as="div" w="100%" h="1px" bg="#888aa1"></Box>
                    </React.Fragment>
                  ))}
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
