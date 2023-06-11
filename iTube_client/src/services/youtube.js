import axios from 'axios';
const BASE_URL = 'https://youtube-v3-alternative.p.rapidapi.com/';

const getVideos = async (route, query) => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}${route}`,
    params: {
      query: query,
      lang: 'en',
      type: 'video',
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com',
    },
  };

  try {
    const { data } = await axios.request(options);
    // console.log(data);
    return data;
  } catch (error) {
    console.log('something went wrong', error);
  }
};

const getVideoDetail = async (route, videoID) => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}${route}`,
    params: {
      id: videoID,
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com',
    },
  };
  try {
    const { data } = await axios.request(options);
    // console.log(data);
    return data;
  } catch (error) {
    console.log('something went wrong', error);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getVideos, getVideoDetail };
