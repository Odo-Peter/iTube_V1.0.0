import React from 'react';

const Sidebar = ({
  handleLogout,
  selectedCategory,
  handleSelectedCategory,
  userOptions,
}) => {
  return (
    <div className="thin sticky left-0 top-14 flex flex-col w-56 justify-center h-sideBar gap-2.5 px-4">
      {userOptions && (
        <div className="flex flex-col gap-1.5 mb-1.5">
          {userOptions.map((op) => (
            <button
              key={`${op.id}${op.name}`}
              onClick={handleSelectedCategory}
              className="btn"
              style={{
                background:
                  op.name === selectedCategory
                    ? '-webkit-linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)'
                    : '',
              }}
            >
              <span>{op.icon}</span>
              <span
                style={{ opacity: op.name === selectedCategory ? '1' : '0.7' }}
              >
                {op.name}
              </span>
            </button>
          ))}
        </div>
      )}

      <div className="thin3 flex justify-between items-center gap-2 mx-0.5 pt-2 -mb-[4px]">
        <div className="flex flex-col justify-center items-start">
          <p className="text-vxs opacity-70 font-bold tracking-wide">
            Odo Peter Ebere
          </p>
          <p className="text-vxs opacity-90 tracking-wide font-mono">
            Copyright {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex flex-col justify-start items-center">
          <button
            onClick={handleLogout}
            className="py-1 w-20 text-xs h-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md hover:bg-fuchsia-500 hover:bg-gradient-to-l font-mono "
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
