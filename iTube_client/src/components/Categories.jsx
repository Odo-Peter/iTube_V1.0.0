import React from 'react';
import Music from './Music';
import Gaming from './Gaming';
import welcome from '../assets/welcome.gif';
import Anime from './Anime';
import Coding from './Coding';
import Education from './Education';
import Movies from './Movies';
import { homeOptions } from '../utils/constants';

const Categories = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-4">
      <div className="flex flex-col w-full text-center">
        <h3 className="text-4xl font-bold mb-8">
          Choose your default <span className="text-red-500">home video</span>{' '}
          category
        </h3>
        <div className="flex items-center justify-center gap-10 mb-8">
          {homeOptions[0][0].map((op) => (
            <button
              key={`${op.id}${op.name}`}
              className="py-1.5 font-mono w-48 h-auto bg-gradient-to-r from-[#e21a5c] to-[#eba714] rounded-md hover:bg-gradient-to-l"
            >
              {op.name}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10">
          {homeOptions[0][1].map((op) => (
            <button
              key={`${op.id}${op.name}`}
              className="py-1.5 font-mono w-48 h-auto bg-gradient-to-r from-[#e21a5c] to-[#eba714] rounded-md hover:bg-gradient-to-l"
            >
              {op.name}
            </button>
          ))}
        </div>
        <div className="flex justify-center items-center mb-4 mt-8 pt-8">
          <img src={welcome} alt="welcome" className="rounded-md" />
        </div>
        <div className="mt-16">
          <div>
            <h3 className="text-3xl font-bold mt-6">Select other categories</h3>
            <p className="text-lg font-bold tracking-wider mb-6">
              Only your last{' '}
              <span className="text-red-500 tracking-wider">
                two picks per category
              </span>{' '}
              would be populated
            </p>
          </div>
          <Music />
          <Gaming />
          <Anime />
          <Coding />
          <Education />
          <Movies />
        </div>
      </div>
    </section>
  );
};

export default Categories;
