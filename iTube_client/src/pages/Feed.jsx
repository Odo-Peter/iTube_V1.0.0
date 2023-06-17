import React, { useEffect, useState } from 'react';
import { demoUser } from '../utils/demoUser';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import Homepage from '../components/Homepage';

const Feed = () => {
  const [user, setUser] = useState(null);
  const [bothStates] = useState(true);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('itubeUser');

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  const handleDemoUser = (e) => {
    e.preventDefault();

    // window.localStorage.setItem('demoUser', JSON.stringify(demoUser));
    setUser(demoUser);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setUser(null);

    window.localStorage.removeItem('itubeUser');
  };
  return (
    <section>
      {user === null ? (
        <>
          <Navbar bothStates={bothStates} />
          <Welcome useDemoUser={handleDemoUser} />
        </>
      ) : (
        <Homepage user={user} handleLogout={handleLogout} />
      )}
    </section>
  );
};

export default Feed;
