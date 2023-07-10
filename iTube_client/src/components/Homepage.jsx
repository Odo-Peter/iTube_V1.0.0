import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Videofeild from './Videofeild';

import { HiMusicNote } from 'react-icons/hi';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { GiGamepad } from 'react-icons/gi';
import { MdOndemandVideo, MdCode, MdPersonalVideo } from 'react-icons/md';
import { FaHome, FaUserGraduate } from 'react-icons/fa';
import MobileSideBar from './MobileSideBar';

const Homepage = ({ user, demoUser, handleLogout }) => {
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [startSearch, setStartSearch] = useState(false);
  const [closeBtn, setCloseBtn] = useState(false);

  useEffect(() => {
    setCategory('Home');
    setCloseBtn(false);
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
    setCloseBtn(false);
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
      <div className="flex homepage">
        {!startSearch ? (
          <>
            <div>
              {!closeBtn ? (
                <div>
                  <AiOutlineMenu
                    className="absolute my-2 mx-1 text-lg sm:hidden"
                    onClick={() => setCloseBtn(true)}
                  />
                </div>
              ) : (
                <div className="fixed pt-3 bg-slate-800 w-[60vw] z-[10000] text-lg sm:hidden overflow-y-auto">
                  <div className="flex justify-between items-center px-2">
                    <AiOutlineClose onClick={() => setCloseBtn(false)} />
                    <button
                      onClick={handleLogout}
                      className="py-1 w-20 text-xs h-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md hover:bg-fuchsia-500 hover:bg-gradient-to-l font-mono "
                    >
                      Logout
                    </button>
                  </div>
                  <MobileSideBar
                    handleLogout={handleLogout}
                    selectedCategory={category}
                    handleSelectedCategory={handleCategory}
                    userOptions={user ? user?.options : demoUser?.options}
                  />
                </div>
              )}

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
          <div className="search-section">
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
