import React from 'react';
import demoImg from '../assets/welcome.gif';

const VideoCard = ({ text }) => {
  return (
    <div>
      <div className="card h-72 w-60 flex flex-col gap-3 justify-center items-start bg-slate-900  rounded-sm opacity-95 py-2 px-1">
        <div className="flex justify-center items-center w-11/12 h-48 py-2 m-auto">
          <img className="h-full w-full" src={demoImg} alt={text} />
        </div>
        <div className="h-24 flex flex-col ml-3">
          <h3>{text}</h3>
          <h3>{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
