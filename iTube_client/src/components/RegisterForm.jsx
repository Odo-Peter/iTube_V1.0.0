import React from 'react';
import { Link } from 'react-router-dom';
import TextAnimation from '../Animations/textAnimation';

const RegisterForm = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center ml-20 w-full">
        <div className="flex flex-col justify-center items-center mb-4">
          <h2 className="font-bold text-2xl pinkish">
            Hey there!! glad you made it to this point
          </h2>
          <p className="text-sm pt-1 opacity-80 font-bold tracking-wide">
            Join thousands of users at iTube
          </p>
        </div>
        <form>
          <div className="flex flex-col justify-start items-start w-formWidth h-formHeight shadows bg-slate-900 rounded-md py-6 px-8">
            <div className="mb-6">
              <input
                className="text-xs py-3.5 px-4 border-none font-mono outline-none rounded-lg w-inputWidth opacity-90 bg-slate-950 focus:opacity-60 focus:text-white"
                type="text"
                required
                placeholder="Firstname..."
                autoComplete="off"
              />
            </div>
            <div className="mb-6">
              <input
                className="text-xs py-3.5 px-4 border-none font-mono outline-none rounded-lg w-inputWidth opacity-90 bg-slate-950 focus:opacity-60 focus:text-white"
                type="text"
                required
                placeholder="Lastname..."
                autoComplete="off"
              />
            </div>
            <div className="mb-6">
              <input
                className="text-xs py-3.5 px-4 border-none font-mono outline-none rounded-lg w-inputWidth opacity-90 bg-slate-950 focus:opacity-60 focus:text-white"
                type="text"
                required
                placeholder="Username..."
                autoComplete="off"
              />
            </div>
            <div className="mb-12">
              <input
                className="text-xs py-3.5 px-4 border-none font-mono outline-none rounded-lg w-inputWidth opacity-90 bg-slate-950 focus:opacity-60 focus:text-white"
                type="password"
                required
                placeholder="Enter password..."
                autoComplete="off"
              />
            </div>
            <button className="py-1.5 w-full h-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:bg-fuchsia-500 hover:bg-gradient-to-l text-sm font-mono mb-2">
              Register
            </button>
            <p className="pb-2 mt-2 text-center w-full">
              <span className="opacity-90 text-xs font-extralight">
                Have an account?
              </span>{' '}
              <Link
                className="pinkish pl-1 font-medium text-sm hover:bg-cyan-500 hover:bg-gradient-to-l"
                to={'/login'}
              >
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="mt-40 w-full text-center pr-16">
        <button className="py-1.5 w-4/5 h-auto bg-gradient-to-r from-cyan-600 to-blue-600 rounded-md hover:bg-fuchsia-500 hover:bg-gradient-to-l text-sm font-mono mb-2">
          Register with a demo user
        </button>
        <h1 className="text-6xl font-bold pt-4 leading-2">
          <span className="welcome">Trust us, it'll be love at first</span>{' '}
          <br /> <TextAnimation text={'sight'} />{' '}
        </h1>
      </div>
    </>
  );
};

export default RegisterForm;
