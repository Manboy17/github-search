import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 h-[60px] text-black bg-red-100">
      <div className="flex items-center gap-10">
        <span className="cursor-pointer hover:underline hover:font-normal">
          <Link to="/">Home</Link>
        </span>
        <span className="cursor-pointer hover:underline hover:font-normal">
          <Link to="/favorities">Favorities</Link>
        </span>
      </div>

      <button className="font-medium cursor-pointer bg-black text-white py-2 px-5 rounded-md">
        Github
      </button>
    </div>
  );
};

export default Navbar;
