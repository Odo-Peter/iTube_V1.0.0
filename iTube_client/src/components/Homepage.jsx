import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Videofeild from './Videofeild';
import { demoUser } from '../utils/demoUser';

const Homepage = ({ user, handleLogout }) => {
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [startSearch, setStartSearch] = useState(false);

  useEffect(() => {
    setCategory('Home');
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setStartSearch(true);
    setSearchWord(search);
    setSearch('');
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filtered = demoUser.filter((value) => value.name === category);
  // console.log(filtered[0]?.value);
  const categoryValue = filtered[0]?.value;

  const handleCategory = (e) => {
    e.preventDefault();
    setCategory(e.target.innerText);
  };
  // console.log(search);

  return (
    <section>
      <Navbar
        userState={user}
        position={'sticky'}
        handleSearch={handleSearch}
        handleSearchChange={handleSearchChange}
        searchTerm={search}
      />
      <div className="flex">
        {!startSearch ? (
          <>
            <div>
              <Sidebar
                handleLogout={handleLogout}
                selectedCategory={category}
                handleSelectedCategory={handleCategory}
              />
            </div>
            <div>
              {user && (
                <Videofeild
                  text={category}
                  categoryValue={categoryValue}
                  vw="w-[79vw]"
                  ml="ml-2"
                  mx="auto"
                />
              )}
            </div>
          </>
        ) : (
          <div>
            {user && (
              <Videofeild
                searchText={'Search results for:'}
                text={searchWord}
                categoryValue={searchWord}
                vw="w-[100vw]"
                ml="ml-[8rem]"
                mx="ml-[8rem]"
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Homepage;
