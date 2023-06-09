import React, { useState, useEffect } from 'react';
import { demoUser } from '../utils/demoUser';

const Sidebar = () => {
  const [selectCategory, setSelectCategory] = useState('');
  // const selectedCategory = 'Home';

  useEffect(() => {
    setSelectCategory('Home');
  }, []);

  const handleCategory = (e) => {
    e.preventDefault();
    setSelectCategory(e.target.innerText);
  };

  return (
    <div className="thin sticky left-0 top-16 flex flex-col -mt-2 w-56 justify-center h-sideBar gap-3 px-4">
      <div className="flex flex-col gap-1.5">
        {demoUser.map((op) => (
          <button
            key={`${op.id}${op.name}`}
            onClick={handleCategory}
            className="btn"
            style={{
              background:
                op.name === selectCategory
                  ? '-webkit-linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)'
                  : '',
            }}
          >
            <span>{op.icon}</span>
            <span style={{ opacity: op.name === selectCategory ? '1' : '0.7' }}>
              {op.name}
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center gap-1 mt-4">
        <p className="text-vxs opacity-70 tracking-wide">
          Copyright {new Date().getFullYear()}
        </p>
        <p className="text-vxs opacity-70 font-bold tracking-wide">
          Odo Peter Ebere
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
