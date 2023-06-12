import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchField = ({ handleSearch, searchTerm, handleSearchChange }) => {
  return (
    <div className="flex gap-8 justify-center items-center">
      <div>
        <form
          onSubmit={handleSearch}
          className="relative flex justify-center items-center"
        >
          <input
            onChange={handleSearchChange}
            value={searchTerm}
            type="text"
            placeholder="search...."
            autoComplete="off"
            className="text-xs py-1.5 px-4 border-none font-mono outline-none rounded-lg w-inputWidth bg-slate-900 focus:text-white"
          />
          <button type="submit" className="absolute top-[25%] right-3">
            <span>
              {' '}
              <FaSearch />{' '}
            </span>
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center font-bold w-8 h-8 rounded-full tracking-wider bg-gradient-to-r from-violet-500 to-fuchsia-500">
        OP
      </div>
    </div>
  );
};

export default SearchField;
