import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import type { Task } from "../types/task";

function Home() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ mt: 2, mb: 2 }}>
        Todo List
      </Typography>
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </Container>
  );
}

export default Home;
