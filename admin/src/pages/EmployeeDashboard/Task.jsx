import React from "react";

const Task = ({ employeeId }) => {
  return (
    <div className="bg-[#1d1f23] text-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-[#1746ff]">📝 Task Section</h2>
      <p className="text-gray-400">
        Coming soon: task list for employee ID {employeeId}
      </p>
    </div>
  );
};

export default Task;
