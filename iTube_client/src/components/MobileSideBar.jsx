import React from 'react';

const MobileSideBar = ({
  selectedCategory,
  handleSelectedCategory,
  userOptions,
}) => {
  return (
    <div className="flex flex-col w-[60vw] justify-start gap-1.5 pt-4 px-2 z-[10000]  bg-slate-800">
      {userOptions && (
        <div className="flex flex-col gap-1 mb-1.5 overflow-y-auto">
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
                paddingTop: '2px',
                paddingBottom: '2px',
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
    </div>
  );
};

export default MobileSideBar;
