import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/video.png';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-2.5 pl-10 w-full sticky top-0 left-0 shadows">
      <div>
        <div className="flex gap-2">
          <div className="h-5 w-5">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="font-bold tracking-wider">iTube</h1>
        </div>
        <p className="text-vxs text-slate-400 font-thin italic">
          Make YOUTUBE your own
        </p>
      </div>
      <div className="flex items-center gap-6 text-xs pr-16 font-mono">
        <Link to={'/register'}>
          <button className="py-1.5 w-20 h-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:bg-gradient-to-l">
            Register
          </button>
        </Link>
        <Link to={'/login'}>
          <button className="py-1.5 w-20 h-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md hover:bg-fuchsia-500 hover:bg-gradient-to-l">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
