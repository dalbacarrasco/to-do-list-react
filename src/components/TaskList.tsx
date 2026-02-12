import type { Task } from "../types/task";
import TaskItem from "./TaskItem";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function TaskList({ tasks, setTasks }: Props) {
  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </>
  );
}

export default TaskList;
