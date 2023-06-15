import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import welcome from '../assets/welcome2.gif';
import coder from '../assets/coder.gif';

const Login = () => {
  const [loginState] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setUsername('');
    setPassword('');
    console.log('logged in biyaaatch!!!');
    console.log(username, password);
  };

  return (
    <section className="relative">
      <Navbar loginState={loginState} position={'sticky'} />
      <div className="flex flex-row-reverse justify-center gap-14 items-start px-16">
        <div className="flex flex-col justify-center items-center rounded-md w-full m-auto">
          <Link
            to={'/'}
            className="py-1.5 w-4/5 h-auto text-center bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-md hover:bg-fuchsia-600 hover:bg-gradient-to-l text-sm font-mono mb-2"
          >
            Login with a demo user
          </Link>
          <img src={coder} alt="coder-guy" className="rounded-md w-4/5" />
        </div>
        <div className="flex flex-col justify-start items-center min-h-screen py-4 w-full">
          <div className="flex flex-col justify-center items-center mb-4">
            <h2 className="font-bold text-2xl pinkish">
              Hey there!! good to have you back
            </h2>
            <p className="text-sm pt-1 opacity-90 font-bold tracking-wide">
              Log in to continue
            </p>
          </div>

          <div className="flex flex-col justify-start items-start w-formWidth h-formHeight shadows bg-slate-900 rounded-md py-6 px-8">
            <img
              src={welcome}
              alt="welcome-gif"
              className="rounded-lg m-auto mb-6 w-inputWidth h-32"
            />
            <form onSubmit={handleLogin}>
              <div className="mb-6">
                {/* <p className="text-sm font-light opacity-90 pb-2.5">Username</p> */}
                <input
                  className="text-xs py-3.5 px-4 border-none font-mono outline-none rounded-lg w-inputWidth placeholder:opacity-80 bg-slate-950 focus:placeholder:opacity-70 focus:text-white"
                  type="text"
                  required
                  placeholder="Enter your username..."
                  autoComplete="off"
                  onChange={handleUsernameChange}
                  value={username}
                />
              </div>
              <div className="mb-10">
                {/* <p className="text-sm font-light opacity-90 pb-2.5">Password</p> */}
                <input
                  className="text-xs py-3.5 px-4 border-none font-mono outline-none rounded-lg w-inputWidth placeholder:opacity-80 bg-slate-950 focus:placeholder:opacity-70 focus:text-white"
                  type="password"
                  required
                  placeholder="Enter password..."
                  autoComplete="off"
                  onChange={handlePasswordChange}
                  value={password}
                />
              </div>
              <button
                className="py-1.5 w-full h-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md hover:bg-fuchsia-500 hover:bg-gradient-to-l text-sm font-mono mb-2"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
            <p className="pb-2 mt-2 text-center w-full">
              <span className="opacity-90 text-xs font-extralight">
                Don't have an account?
              </span>{' '}
              <Link
                className="welcome pl-1 font-medium text-sm hover:bg-fuchsia-500 hover:bg-gradient-to-l"
                to={'/auth/sign_up'}
              >
                Register here
              </Link>
            </p>
          </div>

          {/* <div className="absolute right-0 top-0 z-10">
          <button>Click me</button>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default Login;
