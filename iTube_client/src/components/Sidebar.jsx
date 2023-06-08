import React from 'react';
import { demoUser } from '../utils/demoUser';

const Sidebar = () => {
  const day = new Date();
  const year = day.getFullYear();
  return (
    <div className="thin flex flex-col mt-0.5 w-56 justify-center h-sideBar gap-3 py-4 px-4">
      <div className="flex flex-col gap-2">
        {demoUser.map((op) => (
          <div
            key={`${op.id}${op.name}`}
            className="thin2 flex justify-between items-center w-full tracking-wider py-2 px-3 text-xs rounded-xl hover:cursor-pointer hover:bg-gradient-to-r from-violet-500 to-fuchsia-500"
          >
            <p>{op.name}</p>
            <h6>{op.icon}</h6>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center gap-1 mt-4">
        <p className="text-vxs opacity-70 tracking-wide">Copyright {year}</p>
        <p className="text-vxs opacity-70 font-bold tracking-wide">
          Odo Peter Ebere
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
