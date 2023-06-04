import React from 'react';
import { Link } from 'react-router-dom';
import coder from '../assets/code.mp4';
import TextAnimation from '../Animations/textAnimation';

const Welcome = () => {
  return (
    <section className="flex gap-4 justify-center w-full h-screen pt-16 px-16">
      <div className="w-3/5">
        <h1 className="text-7xl font-bold pb-4 leading-2">
          <span className="welcome">Welcome to</span> <br />{' '}
          <TextAnimation text={'iTube'} />{' '}
        </h1>
        <div className="w-9/12">
          <h2 className="text-2xl pb-6 font-bold ">
            A{' '}
            <span className="text-red-600 tracking-wider px-0.5">YOUTUBE</span>{' '}
            clone app
          </h2>
          <div className="text-sm tracking-wider mb-8">
            <p className="font-light text-sm pb-2">
              Don't let anyone tell you that you can't do something. If you have
              a dream, work hard and make it a reality -{' '}
              <span className="welcome font-bold tracking-widest">Unknown</span>{' '}
            </p>
            <p className="font-light text-sm">
              Dreams are achieved through consistent practice, and how to
              practice efficiently is what this app provides. let's help you
              customize your journey -{' '}
              <span className="welcome font-bold tracking-widest">iTube</span>{' '}
            </p>
          </div>
          <div flex items-center gap-6 text-xs font-mono>
            <Link to={'/login'}>
              <button className="py-1.5 w-full h-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md hover:bg-fuchsia-500 hover:bg-gradient-to-l text-sm font-mono mt-2">
                Login
              </button>
            </Link>
            <p className="py-2 mt-2 font-light text-sm">
              Don't have an account?{' '}
              <Link
                className="pl-1 welcome hover:bg-[#3a47d5]"
                to={'/register'}
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-md mt-8">
        <video
          src={coder}
          className="rounded-md shadows2 w-96"
          autoPlay
          muted
          loop
        />
      </div>
    </section>
  );
};

export default Welcome;
