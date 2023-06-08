import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Videofeild from './Videofeild';

const Homepage = ({ user }) => {
  return (
    <section>
      <Navbar userState={user} />
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div>
          <Videofeild />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
