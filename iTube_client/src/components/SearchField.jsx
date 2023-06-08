import React from 'react';

const SearchField = () => {
  return (
    <div className="flex gap-8 justify-center items-center">
      <div>
        <form className="relative flex justify-center items-center">
          <input
            type="text"
            placeholder="search...."
            autoComplete="off"
            className="text-xs py-1.5 px-4 border-none font-mono outline-none rounded-lg w-inputWidth bg-slate-700 opacity-70 focus:opacity-60 focus:text-white"
          />
          <button className="absolute top-[25%] right-3">O</button>
        </form>
      </div>
      <div className="flex justify-center items-center font-bold w-8 h-8 rounded-full tracking-wider bg-gradient-to-r from-violet-500 to-fuchsia-500">
        OP
      </div>
    </div>
  );
};

export default SearchField;
