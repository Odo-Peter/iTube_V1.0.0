import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import Homepage from '../components/Homepage';

const Feed = () => {
  const [user] = useState('Odo Peter');
  const [bothStates] = useState(true);
  return (
    <section>
      {user === null ? (
        <>
          <Navbar bothStates={bothStates} />
          <Welcome />
        </>
      ) : (
        <Homepage user={user} />
      )}
    </section>
  );
};

export default Feed;
