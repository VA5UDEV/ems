import React from "react";

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser(null);
  };

  return (
    <div className="flex justify-between items-center bg-gray-950 text-white p-5 border-b border-gray-700 shadow-md">
      <div className="flex items-center gap-4">
        <img
          src="/pfp.jpg"
          alt=""
          className="w-12 h-12 rounded-full border border-gray-600"
        />
        <h2 className="text-2xl font-bold">
          Welcome Back <br /> {props.data?.firstName} 👋
        </h2>
      </div>
      <div className="relative group">
        <button className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-600 hover:shadow-md hover:shadow-[#00d4ff]">
          <span className="text-white text-lg">⚙️</span>
        </button>
        <div className="absolute right-0 mt-2 w-32 bg-gray-800 text-white text-center py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-full hover:bg-[#00d4ff] py-1 rounded-md">
            Your Profile
          </button>
          <button
            onClick={logOutUser}
            className="w-full hover:bg-[#00d4ff] py-1 rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
