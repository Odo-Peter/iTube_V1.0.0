import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Videofeild from './Videofeild';

import { HiMusicNote } from 'react-icons/hi';
import { GiGamepad } from 'react-icons/gi';
import { MdOndemandVideo, MdCode, MdPersonalVideo } from 'react-icons/md';
import { FaHome, FaUserGraduate } from 'react-icons/fa';

const Homepage = ({ user, demoUser, handleLogout }) => {
  // const [user, setUser] = useState(null);

  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [startSearch, setStartSearch] = useState(false);

  useEffect(() => {
    setCategory('Home');
  }, []);

  if (user) {
    user?.options.map((op) => {
      return op.icon === '<FaHome />'
        ? (op.icon = <FaHome />)
        : op.icon === '<HiMusicNote />'
        ? (op.icon = <HiMusicNote />)
        : op.icon === '<GiGamepad />'
        ? (op.icon = <GiGamepad />)
        : op.icon === '<MdOndemandVideo />'
        ? (op.icon = <MdOndemandVideo />)
        : op.icon === '<MdCode />'
        ? (op.icon = <MdCode />)
        : op.icon === '<FaUserGraduate />'
        ? (op.icon = <FaUserGraduate />)
        : op.icon === '<MdPersonalVideo />'
        ? (op.icon = <MdPersonalVideo />)
        : '';
    });
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setStartSearch(true);
    setSearchWord(search);
    setSearch('');
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filtered = user
    ? user?.options.filter((value) => value.name === category)
    : demoUser?.options.filter((value) => value.name === category);
  const categoryValue = filtered[0]?.value;

  const handleCategory = (e) => {
    e.preventDefault();
    setCategory(e.target.innerText);
  };

  return (
    <section>
      <Navbar
        userState={user ? user : demoUser}
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
                userOptions={user ? user?.options : demoUser?.options}
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
