import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import morph from '../assets/morph.gif';
import TextAnimation from '../Animations/textAnimation';
import RegisterForm from '../components/RegisterForm';
import {
  homeOptions,
  musicOptions,
  gamingOptions,
  animeOptions,
  codingOptions,
  educationOptions,
  moviesOptions,
} from '../utils/constants';
import Categories from '../components/Categories';

const Register = () => {
  const [registerState] = useState(true);
  //<==== I know shiii is becoming messy, redux would be better ======>//
  // Buh I know not Redux :(

  //from the category components
  const [optionsForHome, setOptionsForHome] = useState([]);
  const [homeList, setHomeList] = useState([]);

  //states for music options/components
  const [musicChoice, setMusicChoice] = useState([]);
  const [musicList, setMusicList] = useState([]);

  //states for gaming options
  const [gamingChoice, setGamingChoice] = useState([]);
  const [gamingList, setGamingList] = useState([]);

  //states for anime options
  const [animeChoice, setAnimeChoice] = useState([]);
  const [animeList, setAnimeList] = useState([]);

  //states for coding options
  const [codingChoice, setCodingChoice] = useState([]);
  const [codingList, setCodingList] = useState([]);

  //states for education options
  const [educationChoice, setEducationChoice] = useState([]);
  const [educationList, setEducationList] = useState([]);

  //states for movies options
  const [moviesChoice, setMoviesChoice] = useState([]);
  const [moviesList, setMoviesList] = useState([]);

  //states for register form
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //to prevent infinite loops, for any of the provided components
  useEffect(() => {
    setHomeList(optionsForHome);
  }, [optionsForHome]);

  useEffect(() => {
    setMusicList(musicChoice);
  }, [musicChoice]);

  useEffect(() => {
    setGamingList(gamingChoice);
  }, [gamingChoice]);

  useEffect(() => {
    setAnimeList(animeChoice);
  }, [animeChoice]);

  useEffect(() => {
    setCodingList(codingChoice);
  }, [codingChoice]);

  useEffect(() => {
    setEducationList(educationChoice);
  }, [educationChoice]);

  useEffect(() => {
    setMoviesList(moviesChoice);
  }, [moviesChoice]);

  //event handler for the category component
  const handleHomeValue = (e) => {
    e.preventDefault();
    if (homeOptions[1]) {
      const filteredValue = homeOptions[1].filter(
        (v) => v.name === e.target.innerText
      );
      if (filteredValue.length > 0) {
        const newHomeObject = {
          icon: homeOptions[0].icon,
          name: filteredValue[0].name,
          value: filteredValue[0].value,
          id: 1,
        };
        if (optionsForHome.length <= 2) {
          setOptionsForHome(optionsForHome.pop());
          setOptionsForHome(optionsForHome.concat(newHomeObject));
        } else setOptionsForHome(optionsForHome.concat(newHomeObject));
      }
    }
    if (homeOptions[2]) {
      const filteredValue = homeOptions[2].filter(
        (v) => v.name === e.target.innerText
      );
      if (filteredValue.length > 0) {
        const newHomeObject = {
          icon: homeOptions[0].icon,
          name: filteredValue[0].name,
          value: filteredValue[0].value,
          id: 1,
        };
        if (optionsForHome.length <= 2) {
          setOptionsForHome(optionsForHome.pop());
          setOptionsForHome(optionsForHome.concat(newHomeObject));
        } else setOptionsForHome(optionsForHome.concat(newHomeObject));
      }
    }
  };

  //event handler for the music component
  const handleMusicOptions = (e) => {
    e.preventDefault();
    if (musicOptions[1]) {
      const filteredValue = musicOptions[1].filter(
        (v) => v.name === e.target.innerText
      );
      if (filteredValue.length > 0) {
        const newMusicObject = {
          icon: musicOptions[0].icon,
          name: filteredValue[0].name,
          value: filteredValue[0].value,
          id: 2,
        };

        if (musicChoice.length >= 0) {
          const checker = musicChoice
            .map((n) => n.name)
            .includes(newMusicObject.name);
          if (musicChoice.length < 2 && checker === false)
            setMusicChoice(musicChoice.concat(newMusicObject));
          else if (musicChoice.length === 2 && checker === false) {
            setMusicChoice(musicChoice.shift());
            setMusicChoice(musicChoice.concat(newMusicObject));
          }
        }
      }
    }

    if (musicOptions[2]) {
      const filteredValue = musicOptions[2].filter(
        (v) => v.name === e.target.innerText
      );
      if (filteredValue.length > 0) {
        const newMusicObject = {
          icon: musicOptions[0].icon,
          name: filteredValue[0].name,
          value: filteredValue[0].value,
          id: 2,
        };

        if (musicChoice.length >= 0) {
          const checker = musicChoice
            .map((n) => n.name)
            .includes(newMusicObject.name);
          if (musicChoice.length < 2 && checker === false)
            setMusicChoice(musicChoice.concat(newMusicObject));
          else if (musicChoice.length === 2 && checker === false) {
            setMusicChoice(musicChoice.shift());
            setMusicChoice(musicChoice.concat(newMusicObject));
          }
        }
      }
    }
  };

  //event handler for the gaming component
  const handleGamingOptions = (e) => {
    e.preventDefault();
    if (gamingOptions[1]) {
      const filteredValue = gamingOptions[1].filter(
        (v) => v.name === e.target.innerText
      );
      if (filteredValue.length > 0) {
        const newGamingObject = {
          icon: gamingOptions[0].icon,
          name: filteredValue[0].name,
          value: filteredValue[0].value,
          id: 3,
        };

        if (gamingChoice.length >= 0) {
          const checker = gamingChoice
            .map((n) => n.name)
            .includes(newGamingObject.name);
          if (gamingChoice.length < 2 && checker === false)
            setGamingChoice(gamingChoice.concat(newGamingObject));
          else if (gamingChoice.length === 2 && checker === false) {
            setGamingChoice(gamingChoice.shift());
            setGamingChoice(gamingChoice.concat(newGamingObject));
          }
        }
      }
    }

    if (gamingOptions[2]) {
      const filteredValue = gamingOptions[2].filter(
        (v) => v.name === e.target.innerText
      );
      if (filteredValue.length > 0) {
        const newGamingObject = {
          icon: gamingOptions[0].icon,
          name: filteredValue[0].name,
          value: filteredValue[0].value,
          id: 3,
        };

        if (gamingChoice.length >= 0) {
          const checker = gamingChoice
            .map((n) => n.name)
            .includes(newGamingObject.name);
          if (gamingChoice.length < 2 && checker === false)
            setGamingChoice(gamingChoice.concat(newGamingObject));
          else if (gamingChoice.length === 2 && checker === false) {
            setGamingChoice(gamingChoice.shift());
            setGamingChoice(gamingChoice.concat(newGamingObject));
          }
        }
      }
    }
  };

  //event handler for the anime component
  const handleAnimeOptions = (e) => {
    e.preventDefault();
    if (animeOptions[1]) {
      const filteredValue = animeOptions[1].filter(
        (v) => v.name === e.target.innerText
      );
      if (filteredValue.length > 0) {
        const newAnimeObject = {
          icon: animeOptions[0].icon,
          name: filteredValue[0].name,
          value: filteredValue[0].value,
          id: 4,
        };

        if (animeChoice.length >= 0) {
          const checker = animeChoice
            .map((n) => n.name)
            .includes(newAnimeObject.name);
          if (animeChoice.length < 2 && checker === false)
            setAnimeChoice(animeChoice.concat(newAnimeObject));
          else if (animeChoice.length === 2 && checker === false) {
            setAnimeChoice(animeChoice.shift());
            setAnimeChoice(animeChoice.concat(newAnimeObject));
          }
        }
      }
    }

    if (animeOptions[2]) {
      const filteredValue = animeOptions[2].filter(
        (v) => v.name === e.target.innerText
      );
      if (filteredValue.length > 0) {
        const newAnimeObject = {
          icon: animeOptions[0].icon,
          name: filteredValue[0].name,
          value: filteredValue[0].value,
          id: 4,
        };

        if (animeChoice.length >= 0) {
          const checker = animeChoice
            .map((n) => n.name)
            .includes(newAnimeObject.name);
          if (animeChoice.length < 2 && checker === false)
            setAnimeChoice(animeChoice.concat(newAnimeObject));
          else if (animeChoice.length === 2 && checker === false) {
            setAnimeChoice(animeChoice.shift());
            setAnimeChoice(animeChoice.concat(newAnimeObject));
          }
        }
      }
    }
  };

  //event handler for the coding component
  const handleCodingOptions = (e) => {
    e.preventDefault();
    if (codingOptions[1]) {
      const filteredValue = codingOptions[1].filter(
        (v) => v.name === e.target.innerText
      );
      if (filteredValue.length > 0) {
        const newCodingObject = {
          icon: codingOptions[0].icon,
          name: filteredValue[0].name,
          value: filteredValue[0].value,
          id: 5,
        };

        if (codingChoice.length >= 0) {
          const checker = codingChoice
            .map((n) => n.name)
            .includes(newCodingObject.name);
          if (codingChoice.length < 2 && checker === false)
            setCodingChoice(codingChoice.concat(newCodingObject));
          else if (codingChoice.length === 2 && checker === false) {
            setCodingChoice(codingChoice.shift());
            setCodingChoice(codingChoice.concat(newCodingObject));
          }
        }
      }
    }

    if (codingOptions[2]) {
      const filteredValue = codingOptions[2].filter(
        (v) => v.name === e.target.innerText
      );
      if (filteredValue.length > 0) {
        const newCodingObject = {
          icon: codingOptions[0].icon,
          name: filteredValue[0].name,
          value: filteredValue[0].value,
          id: 5,
        };

        if (codingChoice.length >= 0) {
          const checker = codingChoice
            .map((n) => n.name)
            .includes(newCodingObject.name);
          if (codingChoice.length < 2 && checker === false)
            setCodingChoice(codingChoice.concat(newCodingObject));
          else if (codingChoice.length === 2 && checker === false) {
            setCodingChoice(codingChoice.shift());
            setCodingChoice(codingChoice.concat(newCodingObject));
          }
        }
      }
    }
  };

  //event handler for the education component
  const handleEducationOptions = (e) => {
    e.preventDefault();
    if (educationOptions[1]) {
      const filteredValue = educationOptions[1].filter(
        (v) => v.name === e.target.innerText
      );
      if (filteredValue.length > 0) {
        const newEducationObject = {
          icon: educationOptions[0].icon,
          name: filteredValue[0].name,
          value: filteredValue[0].value,
          id: 6,
        };

        if (educationChoice.length >= 0) {
          const checker = educationChoice
            .map((n) => n.name)
            .includes(newEducationObject.name);
          if (educationChoice.length < 2 && checker === false)
            setEducationChoice(educationChoice.concat(newEducationObject));
          else if (educationChoice.length === 2 && checker === false) {
            setEducationChoice(educationChoice.shift());
            setEducationChoice(educationChoice.concat(newEducationObject));
          }
        }
      }
    }

    if (educationOptions[2]) {
      const filteredValue = educationOptions[2].filter(
        (v) => v.name === e.target.innerText
      );
      if (filteredValue.length > 0) {
        const newEducationObject = {
          icon: educationOptions[0].icon,
          name: filteredValue[0].name,
          value: filteredValue[0].value,
          id: 6,
        };

        if (educationChoice.length >= 0) {
          const checker = educationChoice
            .map((n) => n.name)
            .includes(newEducationObject.name);
          if (educationChoice.length < 2 && checker === false)
            setEducationChoice(educationChoice.concat(newEducationObject));
          else if (educationChoice.length === 2 && checker === false) {
            setEducationChoice(educationChoice.shift());
            setEducationChoice(educationChoice.concat(newEducationObject));
          }
        }
      }
    }
  };

  //event handler for the movies component
  const handleMoviesOptions = (e) => {
    e.preventDefault();
    if (moviesOptions[1]) {
      const filteredValue = moviesOptions[1].filter(
        (v) => v.name === e.target.innerText
      );
      if (filteredValue.length > 0) {
        const newMoviesObject = {
          icon: moviesOptions[0].icon,
          name: filteredValue[0].name,
          value: filteredValue[0].value,
          id: 7,
        };

        if (moviesChoice.length >= 0) {
          const checker = moviesChoice
            .map((n) => n.name)
            .includes(newMoviesObject.name);
          if (moviesChoice.length < 2 && checker === false)
            setMoviesChoice(moviesChoice.concat(newMoviesObject));
          else if (moviesChoice.length === 2 && checker === false) {
            setMoviesChoice(moviesChoice.shift());
            setMoviesChoice(moviesChoice.concat(newMoviesObject));
          }
        }
      }
    }

    if (moviesOptions[2]) {
      const filteredValue = moviesOptions[2].filter(
        (v) => v.name === e.target.innerText
      );
      if (filteredValue.length > 0) {
        const newMoviesObject = {
          icon: moviesOptions[0].icon,
          name: filteredValue[0].name,
          value: filteredValue[0].value,
          id: 7,
        };

        if (moviesChoice.length >= 0) {
          const checker = moviesChoice
            .map((n) => n.name)
            .includes(newMoviesObject.name);
          if (moviesChoice.length < 2 && checker === false)
            setMoviesChoice(moviesChoice.concat(newMoviesObject));
          else if (moviesChoice.length === 2 && checker === false) {
            setMoviesChoice(moviesChoice.shift());
            setMoviesChoice(moviesChoice.concat(newMoviesObject));
          }
        }
      }
    }
  };

  const handleFirstName = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastName = (e) => {
    setLastname(e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const results = [
    ...homeList,
    ...musicList,
    ...gamingList,
    ...animeList,
    ...codingList,
    ...educationList,
    ...moviesList,
  ];

  const handleRegister = (e) => {
    e.preventDefault();

    setFirstname('');
    setLastname('');
    setUsername('');
    setPassword('');

    console.log('submitted biyatch');
    console.log(firstname, lastname, username, password);
    console.log(results);
  };

  return (
    <section className="flex flex-col overflow overflow-y-auto overflow-x-hidden">
      <Navbar registerState={registerState} position={'sticky'} />

      <div className=" flex flex-col mx-20 pt-12">
        <div className="flex justify-between items-start">
          <div className="w-3/5 text-center mr-10 mt-24">
            <h1 className="text-6xl font-bold pb-4 leading-2">
              <span className="welcome">Everybody is welcome here on</span>{' '}
              <br /> <TextAnimation text={'iTube'} />{' '}
            </h1>
          </div>
          <div className="mb-16">
            <img
              src={morph}
              alt="welcome-gif"
              className="rounded-lg m-auto mb-6 w-96 h-96"
            />
          </div>
        </div>
        <hr className="line flex m-auto my-6 border-none outline-none h-lineHeight w-4/5 pb-pbot" />
      </div>

      <div className="flex justify-center items-start mx-20">
        <div className="w-4/5 text-center">
          <h1 className="text-6xl font-bold pb-4 leading-2">
            <span className="welcome">
              Get ready to customize and personalize your
            </span>{' '}
            <br /> <TextAnimation text={'views'} />{' '}
          </h1>
          <hr className="line my-3 border-none outline-none h-lineHeight w-full pb-pbot" />
        </div>
      </div>
      <div className="flex justify-center items-start mt-4 mx-20">
        <Categories
          handleHomeValue={handleHomeValue}
          optionsForHome={optionsForHome}
          handleMusicOptions={handleMusicOptions}
          musicChoice={musicChoice}
          handleGamingOptions={handleGamingOptions}
          gamingChoice={gamingChoice}
          handleAnimeOptions={handleAnimeOptions}
          animeChoice={animeChoice}
          handleCodingOptions={handleCodingOptions}
          codingChoice={codingChoice}
          handleEducationOptions={handleEducationOptions}
          educationChoice={educationChoice}
          handleMoviesOptions={handleMoviesOptions}
          moviesChoice={moviesChoice}
        />
      </div>
      <div className="flex flex-col justify-center items-center mb-4">
        <hr className="line flex m-auto my-4 border-none outline-none h-lineHeight w-11/12 pb-pbot" />
        <h2 className="pinkish text-4xl font-bold">LET'S HELP YOU FINISH UP</h2>
        <hr className="line flex m-auto my-4 border-none outline-none h-lineHeight w-11/12 pb-pbot" />
      </div>

      <div className="flex justify-between pt-8 mb-14">
        <RegisterForm
          handleFirstName={handleFirstName}
          handleLastName={handleLastName}
          handleUsername={handleUsername}
          handlePassword={handlePassword}
          // handleFormSubmit={handleFormSubmit}
        />
      </div>
      <div className="flex justify-center items-center pb-16 w-full mx-auto">
        <button
          className="py-1.5 font-mono w-[45%] h-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md hover:bg-fuchsia-500 hover:bg-gradient-to-l"
          onClick={handleRegister}
        >
          Submit Details
        </button>
      </div>

      <div className="flex flex-col justify-center items-center text-xs opacity-80 py-4 gap-1">
        <p>Made With 💚💙💜 by Odo Peter Ebere </p>
        <p>© Copyright {new Date().getFullYear()}</p>
      </div>
    </section>
  );
};

export default Register;
