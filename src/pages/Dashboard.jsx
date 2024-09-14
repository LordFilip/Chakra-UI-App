import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  CardFooter,
  CardHeader,
  SimpleGrid,
  Text,
  Card,
  CardBody,
  Flex,
  Heading,
  Spacer,
  HStack,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const tasks = useLoaderData();
  return (
    <SimpleGrid spacing={10} minChildWidth={"300px"}>
      {tasks &&
        tasks.map((task) => (
          <Card key={task.id}>
            <CardHeader>
              <Flex gap={5}>
                <Box w="50px" h="50px">
                  <Text>av</Text>
                </Box>

                <Box>
                  <Heading as="h3" size="small">
                    {task.title}{" "}
                  </Heading>
                  <Text>By: {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color="gray.500">
              <Text>{task.description}</Text>
            </CardBody>
            <Divider borderColor="gray.200" />
            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
      ;
    </SimpleGrid>
  );
}

export const tasksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");

  return res.json();
};
