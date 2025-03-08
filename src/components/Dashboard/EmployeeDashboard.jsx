import React, { useEffect, useState } from "react";
import Header from "../other/Header";
import MainContent from "../other/MainContent";

const EmployeeDashboard = (props) => {
  const [employeeData, setEmployeeData] = useState(props.data);

  useEffect(() => {
    const fetchUpdatedEmployee = () => {
      const storedEmployees =
        JSON.parse(localStorage.getItem("employees")) || [];
      const updatedEmployee = storedEmployees.find(
        (emp) => emp.firstName === props.data.firstName
      );

      if (
        updatedEmployee &&
        JSON.stringify(updatedEmployee) !== JSON.stringify(employeeData)
      ) {
        setEmployeeData(updatedEmployee);
      }
    };

    fetchUpdatedEmployee(); // Fetch on mount
    const interval = setInterval(fetchUpdatedEmployee, 5000); // Poll every 5sec

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [props.data]); // Re-run effect if `props.data` changes

  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white">
      <Header changeUser={props.changeUser} data={employeeData} />
      <MainContent data={employeeData} />
    </div>
  );
};

export default EmployeeDashboard;
