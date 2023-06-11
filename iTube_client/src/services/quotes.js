import axios from 'axios';

const BASE_URL =
  'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote';

const getQoutes = async () => {
  const options = {
    params: {
      token: 'ipworld.info',
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_QUOTES_RAPID_API_KEY,
      'X-RapidAPI-Host':
        'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com',
    },
  };
  try {
    const { data } = await axios.get(BASE_URL, options);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getQoutes };
