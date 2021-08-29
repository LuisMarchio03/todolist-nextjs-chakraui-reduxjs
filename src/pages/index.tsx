import React, { FormEvent, useEffect, useState } from "react";

import { createTask } from "../store/taskSlice";
import { useDispatch } from "react-redux";

import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
} from "@chakra-ui/react";

const Home: React.FC = () => {
  const [allTasks, setAllTasks] = useState(['OLA']);
  const dispatch = useDispatch();

  const handleAddTask = (event: FormEvent) => {
    event.preventDefault();

    dispatch(createTask(allTasks))
  }

  useEffect(() => {
    console.log(allTasks)
  }, [])

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      as="main"
      w="100%"
      h="100vh"
      bg="#202024"
    >
      <Box bg="#121214" color="white" w="90%" h="90vh">
        <FormControl as="form" onSubmit={handleAddTask} id="add-task" isRequired>
          <Flex as="div" justifyContent="center" m="2% 0">
            <Input placeholder="Add task" w="60%" bg="#202024" border="0" value={allTasks} onChange={(event: any) => setAllTasks(event.target.value)} />
            <Button bg="#78b75e" ml="-2" type="submit">ADD</Button>
          </Flex>
        </FormControl>
      </Box>

      <Box>
      </Box>
    </Flex>
  );
};

export default Home;
