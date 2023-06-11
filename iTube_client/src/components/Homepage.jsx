import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Videofeild from './Videofeild';
import { demoUser } from '../utils/demoUser';

const Homepage = ({ user, handleLogout }) => {
  const [category, setCategory] = useState('');

  useEffect(() => {
    setCategory('Home');
  }, []);

  const filtered = demoUser.filter((value) => value.name === category);
  // console.log(filtered[0]?.value);
  const categoryValue = filtered[0]?.value;

  const handleCategory = (e) => {
    e.preventDefault();
    setCategory(e.target.innerText);
  };

  return (
    <section>
      <Navbar userState={user} position={'sticky'} />
      <div className="flex">
        <div>
          <Sidebar
            handleLogout={handleLogout}
            selectedCategory={category}
            handleSelectedCategory={handleCategory}
          />
        </div>
        <div>
          {user && <Videofeild text={category} categoryValue={categoryValue} />}
        </div>
      </div>
    </section>
  );
};

export default Homepage;
