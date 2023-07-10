import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import welcome from '../assets/welcome2.gif';
import coder from '../assets/coder.gif';
import loginService from '../services/login';
import Error from '../components/Error';
import Success from '../components/Success';

const Login = () => {
  const [loginState] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLogginIn, setIsLogginIn] = useState(false);

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage(
        "Hey there, you'd have to enter a username and password to LOG IN"
      );
      setTimeout(() => {
        setErrorMessage(null);
      }, 6000);
    } else {
      try {
        setIsLogginIn(true);

        const user = await loginService.login({
          username,
          password,
        });

        window.localStorage.setItem('itubeUser', JSON.stringify(user));

        setSuccessMessage(
          `Logging in as .....   ${user.username.toUpperCase()}`
        );

        setUsername('');
        setPassword('');

        setTimeout(() => {
          setIsLogginIn(false);
          setSuccessMessage(null);
          navigate('/');
        }, 6000);
      } catch (err) {
        console.log(err);
        setErrorMessage('Wrong username or password, please, try again');
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      }
    }
  };

  return (
    <section className="relative flex flex-col">
      <Navbar loginState={loginState} position={'sticky'} />
      <div className="flex flex-row-reverse justify-center gap-14 items-start px-16 login-page">
        <div className="flex flex-col justify-center items-center rounded-md w-full m-auto login-img">
          <Link
            to={'/'}
            className="py-1.5 w-4/5 h-auto text-center bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-tr-md rounded-tl-md hover:bg-fuchsia-600 hover:bg-gradient-to-l text-sm font-mono mb-2 link"
          >
            Login with a demo user
          </Link>
          <img
            src={coder}
            alt="coder-guy"
            className="rounded-br-md rounded-bl-md w-4/5"
          />
        </div>
        <div className="login flex flex-col justify-start items-center min-h-screen py-4 w-full">
          <div className="login-text flex flex-col justify-center items-center mb-4">
            <h2 className="font-bold text-2xl pinkish">
              Hey there!! good to have you back
            </h2>
            <p className="text-sm pt-1 opacity-90 font-bold tracking-wide">
              Log in to continue
            </p>
          </div>

          <div className="login-form flex flex-col justify-start items-start w-[26rem] h-formHeight shadows bg-slate-900 rounded-md py-6 px-8">
            <img
              src={welcome}
              alt="welcome-gif"
              className="rounded-lg m-auto mb-6 w-inputWidth h-32"
            />
            <form onSubmit={handleLogin}>
              <div className="mb-6 w-full">
                {/* <p className="text-sm font-light opacity-90 pb-2.5">Username</p> */}
                <input
                  className="text-xs py-3.5 px-4 border-none font-mono outline-none rounded-lg w-inputWidth placeholder:opacity-80 bg-slate-950 focus:placeholder:opacity-50 focus:text-white"
                  type="text"
                  required
                  placeholder="Enter your username..."
                  autoComplete="off"
                  onChange={handleUsernameChange}
                  value={username}
                />
              </div>
              <div className="mb-12 w-full">
                <input
                  className="text-xs py-3.5 px-4 border-none font-mono outline-none rounded-lg w-inputWidth placeholder:opacity-80 bg-slate-950 focus:placeholder:opacity-50 focus:text-white"
                  type="password"
                  required
                  placeholder="Enter password..."
                  autoComplete="off"
                  onChange={handlePasswordChange}
                  value={password}
                />
              </div>
              {isLogginIn ? (
                <button className="py-1.5 w-full h-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md hover:bg-fuchsia-500 hover:bg-gradient-to-l text-sm font-mono mb-2 opacity-80 cursor-not-allowed">
                  Loggin in ....
                </button>
              ) : (
                <button
                  className="py-1.5 w-full h-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md hover:bg-fuchsia-500 hover:bg-gradient-to-l text-sm font-mono mb-2"
                  onClick={handleLogin}
                >
                  Login
                </button>
              )}
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
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-xs opacity-80 py-4 gap-1 w-full mt-8">
        <p>Made With 💚💙💜 by Odo Peter Ebere </p>
        <p>© Copyright {new Date().getFullYear()}</p>
      </div>

      {errorMessage && (
        <div className="flex justify-center items-center w-[70%] mx-auto">
          <div className="absolute z-50 top-16 w-[70%] p-2 mb-8 bg-slate-400 border-b-4 border-[red] rounded-md text-center">
            <Error message={errorMessage} />
          </div>
        </div>
      )}

      {successMessage && (
        <div className="flex justify-center items-center w-[70%] mx-auto">
          <div className="absolute z-50 top-16 w-[70%] p-2 mb-8 bg-slate-400 border-b-4 border-[green] rounded-md text-center">
            <Success message={successMessage} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Login;
