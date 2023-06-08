import React from 'react';
import { musicOptions } from '../utils/constants';

const Music = () => {
  return (
    <div className="mb-16">
      <div className="flex flex-col justify-center items-center mb-4">
        <hr className="line flex m-auto my-4 border-none outline-none h-lineHeight w-full pb-pbot" />
        <h4 className="pinkish text-2xl font-bold">Music</h4>
        <hr className="line flex m-auto my-4 border-none outline-none h-lineHeight w-full pb-pbot" />
      </div>
      <div className="flex items-center justify-center gap-10">
        {musicOptions[1][0].map((op) => (
          <button
            key={`${op.id}${op.name}`}
            className="py-1.5 font-mono w-48 h-auto bg-gradient-to-r from-[#e21a5c] to-[#eba714] rounded-md hover:bg-gradient-to-l"
          >
            {op.name}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center gap-10 mt-6">
        {musicOptions[1][1].map((op) => (
          <button
            key={op.id}
            className="py-1.5 font-mono w-48 h-auto bg-gradient-to-r from-[#e21a5c] to-[#eba714] rounded-md hover:bg-gradient-to-l"
          >
            {op.name}
          </button>
        ))}
      </div>
      <div className="pinkish flex justify-start items-center text-lg font-mono font-bold gap-6 pt-5">
        <h2>
          Your choices were:{' '}
          <span className="text-1xl font-serif font-bold">[</span> Hip Hop and
          Rock <span className="text-1xl font-serif font-bold">]</span>
        </h2>
      </div>
    </div>
  );
};

export default Music;
