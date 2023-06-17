import { HiMusicNote } from 'react-icons/hi';
import { GiGamepad } from 'react-icons/gi';
import { MdOndemandVideo, MdCode, MdPersonalVideo } from 'react-icons/md';
import { FaHome, FaUserGraduate } from 'react-icons/fa';

export const demoUser = {
  firstname: 'Wu-Tang',
  lastname: 'Clan',
  username: 'Raekwon',
  options: [
    {
      name: 'Home',
      value: 'best wutang clan songs of all time',
      id: '1',
      icon: <FaHome />,
    },
    {
      name: 'Trending Musics',
      value: 'trending old school hip pop',
      id: '2',
      icon: <HiMusicNote />,
    },
    {
      name: 'Hip Pop Music',
      value: 'best of 90s hip pop',
      id: '2',
      icon: <HiMusicNote />,
    },
    {
      name: 'Gaming Competition',
      value: 'ps5 games trailers',
      id: '3',
      icon: <GiGamepad />,
    },
    {
      name: 'Retro Games',
      value: 'best of old school retro games',
      id: '3',
      icon: <GiGamepad />,
    },
    {
      name: 'Attack on Titans',
      value: 'attack on titans anime',
      id: '4',
      icon: <MdOndemandVideo />,
    },
    {
      name: 'Jujustu Kaisen',
      value: 'jujustu kaisen anime',
      id: '4',
      icon: <MdOndemandVideo />,
    },
    {
      name: 'Coding Reviews',
      value: 'popular coding languages reviews',
      id: '5',
      icon: <MdCode />,
    },
    {
      name: 'Web Dev',
      value: 'web development and coding',
      id: '5',
      icon: <MdCode />,
    },
    {
      name: 'Khan Academy',
      value: 'inspirational videos from khan academy',
      id: '6',
      icon: <FaUserGraduate />,
    },
    {
      name: 'Veritasium',
      value: 'educational videos on veritasium',
      id: '6',
      icon: <FaUserGraduate />,
    },
    {
      name: 'Crime Trailers',
      value: 'popular box office crime movies trailers',
      id: '7',
      icon: <MdPersonalVideo />,
    },
    {
      name: 'Sci-fi Trailers',
      value: 'popular box office sci-fi movies trailers',
      id: '7',
      icon: <MdPersonalVideo />,
    },
  ],
};
