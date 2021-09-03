import React, { FormEvent, useEffect, useState } from "react";

import { useTheme } from "../hooks/useTheme";
import dark from "../styles/theme/dark";
import light from "../styles/theme/light";

import { useDispatch, useSelector } from "react-redux";
import { addTask, toggleComplete } from "../store/taskSlice";

import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
} from "@chakra-ui/react";

import { SunIcon } from "@chakra-ui/icons";
import { MoonIcon } from "@chakra-ui/icons";
import { CheckCircleIcon } from "@chakra-ui/icons";

interface Tasks {
  id: number;
  title: string;
  completed: boolean;
}

const Home: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const [newTasks, setNewTasks] = useState();
  const dispatch = useDispatch();

  const stateTasks = useSelector((state: any) => state.task);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    dispatch(
      addTask({
        title: newTasks,
      })
    );
  };

  const handleCompleteClick = (id: number, completed: boolean) => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  return (
    <Flex
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      as="div"
      w="100%"
      minHeight="100vh"
      bg="gray.800"
    >
      {theme === dark ? (
        <>
          <Flex
            as="header"
            w="100%"
            h="200px"
            bgRepeat="no-repeat"
            bgImage={`/images/bg-mobile-dark.jpg`}
            bgSize="cover"
            justifyContent="space-between"
          >
            <Heading fontSize="3xl" p={["1%", "3%"]} color="#ffffff">
              Todo List
            </Heading>
            <Button
              fontSize="2xl"
              p={["1%", "3%"]}
              mt="1rem"
              color="#ffffff"
              bg="transparent"
              _active={{ bg: "transparent" }}
              _focus={{ border: 0 }}
              _hover={{ bg: "none", color: "hsl(280, 87%, 65%)" }}
              leftIcon={<SunIcon />}
              onClick={toggleTheme}
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
                    bg="gray.700"
                    value={newTasks}
                    onChange={(event: any) => setNewTasks(event.target.value)}
                  />
                  <Button
                    border="0"
                    h="40px"
                    ml="-0.3rem"
                    bg="blue.300"
                    _active={{ bg: "transparent" }}
                    _focus={{ border: 0 }}
                    _hover={{ bg: "blue.400" }}
                    onClick={handleSubmit}
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
                bg="gray.700"
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
                  color="gray.400"
                >
                  {stateTasks.map((task: Tasks) => (
                    <React.Fragment key={task.id}>
                      <Flex
                        as="div"
                        w="100%"
                        minH="40px"
                        m="2% 0"
                        align="center"
                      >
                        {task.completed === false ? (
                          <>
                            <Button
                              textAlign="center"
                              fontSize="1.5rem"
                              bg="transparent"
                              _active={{ bg: "transparent" }}
                              _focus={{ border: 0 }}
                              _hover={{ bg: "none", color: "blue.400" }}
                              leftIcon={<CheckCircleIcon />}
                              onClick={() =>
                                handleCompleteClick(task.id, task.completed)
                              }
                            ></Button>
                            <Box
                              fontSize={["sm", "lg"]}
                              as="div"
                              w="90%"
                              h="auto"
                              p="2%"
                            >
                              {task.title}
                            </Box>
                          </>
                        ) : (
                          <>
                            <Button
                              textAlign="center"
                              fontSize="1.5rem"
                              bg="transparent"
                              color="gray.600"
                              _active={{ bg: "transparent" }}
                              _focus={{ border: 0 }}
                              _hover={{ bg: "none", color: "purple.500" }}
                              leftIcon={<CheckCircleIcon />}
                              onClick={() =>
                                handleCompleteClick(task.id, task.completed)
                              }
                            ></Button>
                            <Box
                              fontSize={["sm", "lg"]}
                              textDecoration="line-through"
                              as="div"
                              w="90%"
                              h="auto"
                              p="2%"
                              color="gray.600"
                            >
                              {task.title}
                            </Box>
                          </>
                        )}
                      </Flex>
                      <Box as="div" w="100%" h="1px" bg="gray.400"></Box>
                    </React.Fragment>
                  ))}
                </Flex>
              </Box>
            </Box>
          </Flex>
        </>
      ) : (
        <>
          <Flex
            as="header"
            w="100%"
            h="200px"
            bgRepeat="no-repeat"
            bgImage={`/images/bg-mobile-light.jpg`}
            bgSize="cover"
            justifyContent="space-between"
          >
            <Heading fontSize="3xl" p={["1%", "3%"]} color="#ffffff">
              Todo List
            </Heading>
            <Button
              fontSize="2xl"
              p={["1%", "3%"]}
              mt="1rem"
              color="#ffffff"
              bg="transparent"
              _active={{ bg: "transparent" }}
              _focus={{ border: 0 }}
              _hover={{ bg: "none", color: "hsl(280, 87%, 65%)" }}
              leftIcon={<MoonIcon />}
              onClick={toggleTheme}
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
                    bg="gray.700"
                    value={newTasks}
                    onChange={(event: any) => setNewTasks(event.target.value)}
                  />
                  <Button
                    border="0"
                    h="40px"
                    ml="-0.3rem"
                    bg="blue.300"
                    _active={{ bg: "transparent" }}
                    _focus={{ border: 0 }}
                    _hover={{ bg: "blue.400" }}
                    onClick={handleSubmit}
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
                bg="gray.700"
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
                  color="gray.400"
                >
                  {stateTasks.map((task: Tasks) => (
                    <React.Fragment key={task.id}>
                      <Flex
                        as="div"
                        w="100%"
                        minH="40px"
                        m="2% 0"
                        align="center"
                      >
                        {task.completed === false ? (
                          <>
                            <Button
                              textAlign="center"
                              fontSize="1.5rem"
                              bg="transparent"
                              _active={{ bg: "transparent" }}
                              _focus={{ border: 0 }}
                              _hover={{ bg: "none", color: "blue.400" }}
                              leftIcon={<CheckCircleIcon />}
                              onClick={() =>
                                handleCompleteClick(task.id, task.completed)
                              }
                            ></Button>
                            <Box
                              fontSize={["sm", "lg"]}
                              as="div"
                              w="90%"
                              h="auto"
                              p="2%"
                            >
                              {task.title}
                            </Box>
                          </>
                        ) : (
                          <>
                            <Button
                              textAlign="center"
                              fontSize="1.5rem"
                              bg="transparent"
                              color="gray.600"
                              _active={{ bg: "transparent" }}
                              _focus={{ border: 0 }}
                              _hover={{ bg: "none", color: "purple.500" }}
                              leftIcon={<CheckCircleIcon />}
                              onClick={() =>
                                handleCompleteClick(task.id, task.completed)
                              }
                            ></Button>
                            <Box
                              fontSize={["sm", "lg"]}
                              textDecoration="line-through"
                              as="div"
                              w="90%"
                              h="auto"
                              p="2%"
                              color="gray.600"
                            >
                              {task.title}
                            </Box>
                          </>
                        )}
                      </Flex>
                      <Box as="div" w="100%" h="1px" bg="gray.400"></Box>
                    </React.Fragment>
                  ))}
                </Flex>
              </Box>
            </Box>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default Home;
