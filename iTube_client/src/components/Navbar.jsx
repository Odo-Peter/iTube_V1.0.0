import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/video.png';
import SearchField from './SearchField';

const Navbar = ({ loginState, registerState, bothStates, userState }) => {
  return (
    <nav className="flex items-center bg-slate-950 justify-between py-2 pl-10 mb-0.5 w-full sticky top-0 left-0 shadows z-50">
      <div>
        <div className="flex gap-2">
          <div className="h-5 w-5">
            <Link to={'/'}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <h1 className="welcome font-bold tracking-wider">iTube</h1>
        </div>
        <p className="text-vxs text-slate-300 font-thin italic">
          Make Youtube jealous
        </p>
      </div>
      <div className="flex items-center gap-6 text-xs pr-16 font-mono">
        {loginState && (
          <Link to={'/register'}>
            <button className="py-1.5 font-mono w-48 h-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:bg-gradient-to-l">
              Register
            </button>
          </Link>
        )}
        {registerState && (
          <Link to={'/login'}>
            <button className="py-1.5 font-mono w-48 h-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md hover:bg-fuchsia-500 hover:bg-gradient-to-l">
              Login
            </button>
          </Link>
        )}

        {bothStates && (
          <>
            <Link to={'/register'}>
              <button className="py-1.5 w-20 font-mono h-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:bg-gradient-to-l">
                Register
              </button>
            </Link>
            <Link to={'/login'}>
              <button className="py-1.5 w-20 font-mono h-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md hover:bg-fuchsia-500 hover:bg-gradient-to-l">
                Login
              </button>
            </Link>
          </>
        )}

        {userState && <SearchField />}
      </div>
    </nav>
  );
};

export default Navbar;
