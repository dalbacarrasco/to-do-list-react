import {
  Card,
  CardContent,
  Typography,
  Checkbox,
  IconButton,
} from "@mui/material";
import type { Task } from "../types/task";
import { Delete } from "@mui/icons-material";

interface Props {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function TaskItem({ task, tasks, setTasks }: Props) {
  const toggleTask = () => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const deleteTask = () => {
    const filteredTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(filteredTasks);
  };

  return (
    <Card sx={{ mb: 1 }}>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Checkbox checked={task.completed} onChange={toggleTask} />

        <Typography
          sx={{
            textDecoration: task.completed ? "line-through" : "none",
            flexGrow: 1,
          }}
        >
          {task.title}
        </Typography>

        <IconButton onClick={deleteTask}>
          <Delete></Delete>
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default TaskItem;
