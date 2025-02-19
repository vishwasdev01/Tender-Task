import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Not Started";
  assignee: string;
  priority: "Low" | "Medium" | "High";
  dueDate: string;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [
    {
      id: uuidv4(),
      title: "Construction Tender 1",
      description: "Description goes here about the tender",
      status: "To Do",
      assignee: "John Doe",
      priority: "Low",
      dueDate: "2024-12-22",
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    updateTaskStatus: (state, action: PayloadAction<{ id: string; status: Task["status"] }>) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.status = action.payload.status;
      }
    },
  },
});

export const { addTask, updateTaskStatus } = taskSlice.actions;
export default taskSlice.reducer;
