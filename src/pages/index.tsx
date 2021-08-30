import React, { FormEvent, useEffect, useState } from "react";

import { createTask } from "../store/taskSlice";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";

const Home: React.FC = () => {
  const [allTasks, setAllTasks] = useState("");
  const dispatch = useDispatch();

  const toEdit = useSelector((state: any) => state.task.toEdit);
  const isCompleted = useSelector((state: any) => state.task.isCompleted);
  const tasks = useSelector((state: any) => state.task.task);

  const handleAddTask = (event: FormEvent) => {
    event.preventDefault();

    dispatch(createTask(allTasks));
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      as="main"
      w="100%"
      minHeight="100vh"
      bg="#202024"
    >
      <Box bg="#121214" color="white" w="90%" m="2% 0" p="3% 0" borderRadius="2rem" minHeight="90vh">
        <FormControl
          as="form"
          onSubmit={handleAddTask}
          id="add-task"
          isRequired
        >
          <Flex as="div" justifyContent="center" m="2% 0">
            <Input
              placeholder="Add task"
              w="60%"
              bg="#202024"
              border="0"
              value={allTasks}
              onChange={(event: any) => setAllTasks(event.target.value)}
            />
            <Button bg="#78b75e" ml="-2" type="submit">
              ADD
            </Button>
          </Flex>
        </FormControl>

        {!toEdit ? (
          <Flex justifyContent="center" flexWrap="wrap">
            {tasks.map((task) => (
              <Flex
                w="60%"
                h="45px"
                as="div"
                justifyContent="left"
                m="2% 0"
                bg="#202024"
                color="white"
                borderRadius="0.57rem"
                key={task}
              >
                <List spacing={5} p="0.62rem 1.5rem">
                  <ListItem>{task}</ListItem>
                </List>
              </Flex>
            ))}
          </Flex>
        ) : (
          <Flex justifyContent="center">
            <Input
              placeholder="Add task"
              w="50%"
              bg="#202024"
              border="0"
              value={allTasks}
              onChange={(event: any) => setAllTasks(event.target.value)}
            />
            <Button bg="#78b75e" ml="-2" type="submit">
              Save
            </Button>
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default Home;
