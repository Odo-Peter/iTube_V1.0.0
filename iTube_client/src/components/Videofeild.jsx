import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import youtubeServices from '../services/youtube';
import Loader from '../Animations/Loader';

const Videofeild = ({ text, categoryValue }) => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getVid = async () => {
      setIsLoading(true);
      try {
        const { data } = await youtubeServices.getVideos(
          'search',
          categoryValue
        );
        if (data) {
          setIsLoading(false);
          setVideos(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getVid();
  }, [categoryValue]);

  // console.log(videos);

  return (
    <section className="flex flex-col overflow-x-hidden">
      {isLoading ? (
        <div className="flex justify-center items-center h-sideBar w-[79vw]">
          <Loader />
        </div>
      ) : (
        <>
          <div className="flex items-center tracking-wider font-bold justify-start ml-2 pt-4 pl-8">
            <h2>
              <span className="text-red-600">{text} </span> videos
            </h2>
          </div>
          <div className="flex items-center gap-6 justify-start flex-wrap mt-2 mx-auto pl-8">
            {videos.map((video) => (
              <VideoCard key={video.videoId} video={video} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Videofeild;
