import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import morph from '../assets/morph.gif';
import TextAnimation from '../Animations/textAnimation';
import RegisterForm from '../components/RegisterForm';
import Categories from '../components/Categories';

const Register = () => {
  const [registerState] = useState(true);
  return (
    <section className="flex flex-col overflow overflow-y-auto overflow-x-hidden">
      <Navbar registerState={registerState} position={'sticky'} />

      <div className=" flex flex-col mx-20 pt-12">
        <div className="flex justify-between items-start">
          <div className="w-3/5 text-center mr-10 mt-24">
            <h1 className="text-6xl font-bold pb-4 leading-2">
              <span className="welcome">Everybody is welcome here on</span>{' '}
              <br /> <TextAnimation text={'iTube'} />{' '}
            </h1>
          </div>
          <div className="mb-16">
            <img
              src={morph}
              alt="welcome-gif"
              className="rounded-lg m-auto mb-6 w-96 h-96"
            />
          </div>
        </div>
        <hr className="line flex m-auto my-6 border-none outline-none h-lineHeight w-4/5 pb-pbot" />
      </div>

      <div className="flex justify-center items-start mx-20">
        <div className="w-4/5 text-center">
          <h1 className="text-6xl font-bold pb-4 leading-2">
            <span className="welcome">
              Get ready to customize and personalize your
            </span>{' '}
            <br /> <TextAnimation text={'views'} />{' '}
          </h1>
          <hr className="line my-3 border-none outline-none h-lineHeight w-full pb-pbot" />
        </div>
      </div>
      <div className="flex justify-center items-start mt-4 mx-20">
        <Categories />
      </div>
      <div className="flex flex-col justify-center items-center mb-4">
        <hr className="line flex m-auto my-4 border-none outline-none h-lineHeight w-11/12 pb-pbot" />
        <h2 className="pinkish text-4xl font-bold">LET'S HELP YOU FINISH UP</h2>
        <hr className="line flex m-auto my-4 border-none outline-none h-lineHeight w-11/12 pb-pbot" />
      </div>

      <div className="flex justify-between pt-8 mb-28">
        <RegisterForm />
      </div>
    </section>
  );
};

export default Register;
