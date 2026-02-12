import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import type { Task } from "../types/task";
import { Add } from "@mui/icons-material";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function TaskForm({ tasks, setTasks }: Props) {
  const [newTask, setNewTask] = useState<string>("");

  const handleAddTask = () => {
    if (!newTask.trim()) return;

    const task: Task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  return (
    <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
      <TextField
        fullWidth
        label="Nueva tarea"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button variant="contained" onClick={handleAddTask}  disabled={!newTask.trim()}>
        <Add />
      </Button>
    </Box>
  );
}

export default TaskForm;
