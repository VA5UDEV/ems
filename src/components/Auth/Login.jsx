import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("Invalid Credentials!");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-black text-white overflow-hidden">
      <div className="absolute z-10 bg-gray-950 p-10 rounded-xl shadow-2xl w-96 backdrop-blur-md bg-opacity-80 border border-[#00d4ff]">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#00d4ff] drop-shadow-lg">
          Login
        </h2>

        <form onSubmit={submitHandler}>
          <div className="mb-4 relative">
            <label className="block text-gray-400">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d4ff] border-transparent hover:border-[#00d4ff] border duration-150 transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-400">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00d4ff] border-transparent hover:border-[#00d4ff] border duration-150 transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#00d4ff] text-black py-2 rounded-lg hover:scale-98 transition relative shadow-xl flex justify-center items-center"
          >
            {loading ? (
              <div className="border-2 border-white border-t-transparent rounded-full w-5 h-5 animate-spin"></div>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
