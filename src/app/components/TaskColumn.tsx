"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import TaskCard from "./TaskCard";

interface ColumnProps {
  title: string;
}

const TaskColumn: React.FC<ColumnProps> = ({ title }) => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks.filter((task) => task.status === title));

  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow-lg w-1/3">
      <h2 className="text-xl font-bold">{title}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TaskColumn;
