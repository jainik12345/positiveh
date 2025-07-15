import React, { useEffect, useState } from "react";
import axios from "axios";
import BE_URL from "../../config";

const Task = ({ employeeId }) => {
  const [designationName, setDesignationName] = useState("");
  const [taskPDF, setTaskPDF] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        setLoading(true);

        // 1. Fetch employee data
        const empRes = await axios.get(
          `${BE_URL}/employeeDataName/data/${employeeId}`
        );
        const employee = empRes?.data?.data?.[0];

        if (!employee) {
          setError("Employee not found");
          return;
        }

        const designationId = Number(employee.designation);

        // 2. Fetch all designations
        const desigRes = await axios.get(`${BE_URL}/employeeDesignation`);
        const allDesignations = desigRes?.data?.data;

        const matchedDesignation = allDesignations.find(
          (d) => Number(d.id) === designationId
        );

        if (!matchedDesignation) {
          setError("Designation not found for this employee.");
          return;
        }

        setDesignationName(matchedDesignation.name);
        setTaskPDF(
          `${BE_URL}/Images/EmployeeDataImages/EmployeeDesignation/${matchedDesignation.task_pdf}`
        );
      } catch (err) {
        console.error("Failed to load task PDF", err);
        setError("Something went wrong while fetching task details.");
      } finally {
        setLoading(false);
      }
    };

    fetchTaskDetails();
  }, [employeeId]);

  return (
    <div className="bg-[#1d1f23] text-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-[#1746ff]">📝 Task Section</h2>

      {loading ? (
        <p className="text-gray-400">Loading task info...</p>
      ) : error ? (
        <p className="text-red-400">{error}</p>
      ) : (
        <>
          <p className="mb-3 text-sm text-gray-400">
            Designation:{" "}
            <span className="text-white font-semibold">{designationName}</span>
          </p>

          {taskPDF ? (
            <div className="w-full h-[600px] border border-[#1746ff] rounded overflow-hidden">
              <iframe
                src={taskPDF}
                title="Task PDF"
                width="100%"
                height="100%"
                frameBorder="0"
              />
            </div>
          ) : (
            <p className="text-red-400">
              No PDF assigned for this designation.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Task;
