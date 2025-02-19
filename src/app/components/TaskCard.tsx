import React from "react";
import { useDispatch } from "react-redux";
import { updateTaskStatus } from "@/app/features/tasks/taskSlice";

interface TaskProps {
  id: string;
  title: string;
  description: string;
  status: string;
  assignee: string;
  priority: string;
  dueDate: string;
}

const TaskCard: React.FC<TaskProps> = ({ id, title, description, assignee, dueDate }) => {
  const dispatch = useDispatch();

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">{description}</p>
      <p className="text-sm">Assigned to: {assignee}</p>
      <p className="text-sm">Due: {dueDate}</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => dispatch(updateTaskStatus({ id, status: "In Progress" }))}
      >
        Move to In Progress
      </button>
    </div>
  );
};

export default TaskCard;
