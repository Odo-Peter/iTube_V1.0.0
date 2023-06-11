import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import Homepage from '../components/Homepage';

const Feed = () => {
  const [user, setUser] = useState(null);
  const [bothStates] = useState(true);

  const handleDemoUser = (e) => {
    e.preventDefault();
    setUser('Odo');
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setUser(null);
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
