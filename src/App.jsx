import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // Load login state from localStorage when the app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");

    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data || null);
    }
  }, []);

  function handleLogin(email, password) {
    if (email === "admin@me.com" && password === "123") {
      const adminData = { role: "admin" };
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify(adminData));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        const employeeData = { role: "employee", data: employee };
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeData));
      }
    } else {
      setUser(null);
    }
  }

  // function handleLogout() {
  //   setUser(null);
  //   setLoggedInUserData(null);
  //   localStorage.removeItem("loggedInUser"); // Clear localStorage on logout
  // }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard changeUser={setUser} /> : ""}
      {user === "employee" ? <EmployeeDashboard data={loggedInUserData} changeUser={setUser} /> : ""}
    </>
  );
};

export default App;
