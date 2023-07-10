import React from 'react';
import { Link } from 'react-router-dom';
import TextAnimation from '../Animations/textAnimation';

const RegisterForm = ({
  handleFirstName,
  handleLastName,
  handlePassword,
  handleUsername,
  firstname,
  lastname,
  username,
  password,
}) => {
  return (
    <>
      <div className="register-div flex flex-col justify-center items-center ml-20 w-full">
        <div className="flex flex-col text-center items-center mb-4">
          <h2 className="pinkish font-bold text-2xl">
            Hey there!! glad you made it to this point
          </h2>
          <p className="text-sm pt-1 opacity-80 font-bold tracking-wide">
            Join thousands of users at iTube
          </p>
        </div>
        <div>
          <div className="register-form flex flex-col justify-center items-start gap-10 w-formWidth h-formHeight shadows bg-slate-900 rounded-md py-6 px-8">
            <div className="w-full">
              <input
                className="text-xs py-3.5 px-4 border-none font-mono outline-none rounded-lg w-inputWidth opacity-90 bg-slate-950 focus:placeholder:opacity-70 focus:text-white"
                type="text"
                required
                placeholder="Firstname..."
                autoComplete="off"
                onChange={handleFirstName}
                value={firstname}
              />
            </div>
            <div className="w-full">
              <input
                className="text-xs py-3.5 px-4 border-none font-mono outline-none rounded-lg w-inputWidth opacity-90 bg-slate-950 focus:placeholder:opacity-70 focus:text-white"
                type="text"
                required
                placeholder="Lastname..."
                autoComplete="off"
                onChange={handleLastName}
                value={lastname}
              />
            </div>
            <div className="w-full">
              <input
                className="text-xs py-3.5 px-4 border-none font-mono outline-none rounded-lg w-inputWidth opacity-90 bg-slate-950 focus:placeholder:opacity-70 focus:text-white"
                type="text"
                required
                placeholder="Username..."
                autoComplete="off"
                onChange={handleUsername}
                value={username}
              />
            </div>
            <div className="w-full">
              <input
                className="text-xs py-3.5 px-4 border-none font-mono outline-none rounded-lg w-inputWidth opacity-90 bg-slate-950 focus:placeholder:opacity-70 focus:text-white"
                type="password"
                required
                placeholder="Enter password..."
                autoComplete="off"
                onChange={handlePassword}
                value={password}
              />
            </div>
            <div className="flex justify-center items-center mx-auto w-full">
              <p className=" pb-2 mt-2 text-center w-full mx-auto">
                <span className="opacity-90 text-sm font-extralight">
                  Have an account?
                </span>{' '}
                <Link
                  className="pinkish pl-1 font-bold text-sm hover:bg-cyan-500 hover:bg-gradient-to-l"
                  to={'/auth/sign_in'}
                >
                  Login here
                </Link>
              </p>
            </div>
            {/* <button
              className="py-1.5 w-full h-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:bg-fuchsia-500 hover:bg-gradient-to-l text-sm font-mono mb-2"
              onClick={handleFormSubmit}
            >
              Register
            </button> */}
          </div>
        </div>
      </div>
      <div className="trust mt-40 w-full text-center pr-16">
        {/* <button className="py-1.5 w-4/5 h-auto bg-gradient-to-r from-cyan-600 to-blue-600 rounded-md hover:bg-fuchsia-500 hover:bg-gradient-to-l text-sm font-mono mb-2">
          Register with a demo user
        </button> */}
        <h4 className="text-6xl font-bold pt-4 leading-2">
          <span className="welcome">Trust us, it'll be love at first</span>{' '}
          <br /> <TextAnimation text={'sight'} />{' '}
        </h4>
      </div>
    </>
  );
};

export default RegisterForm;
