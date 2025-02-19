import React from "react";
import TaskColumn from "./TaskColumn";

const TaskBoard = () => {
  return (
    <div className="flex gap-4 p-4">
      <TaskColumn title="Not Started" />
      <TaskColumn title="To Do" />
      <TaskColumn title="In Progress" />
    </div>
  );
};

export default TaskBoard;
