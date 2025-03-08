import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const EmployeeIdList = (props) => {
  const authData = useContext(AuthContext);

  return (
    <div className="p-6 bg-gray-900 text-white">
      {/* Employee List */}
      <h2 className="text-2xl font-semibold">Employee List</h2>
      <div
        id="employeeList"
        className="mt-4 bg-gray-800 p-6 rounded-lg border border-gray-700 overflow-auto h-38"
      >
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-gray-700">
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {authData.employees.map((employee) => (
              <tr key={employee.id} className="border-b border-gray-700">
                <td className="p-2">{employee.id}</td>
                <td className="p-2">{employee.firstName}</td>
                <td className="p-2">{employee.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeIdList;
