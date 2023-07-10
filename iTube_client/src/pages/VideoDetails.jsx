import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Loader from '../Animations/Loader';
import youTubeServices from '../services/youtube';
import millify from 'millify';
import VideoCard from '../components/VideoCard';
import Navbar from '../components/Navbar';
import Videofeild from '../components/Videofeild';

const VideoDetails = () => {
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [search, setSearch] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [startSearch, setStartSearch] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const getVideo = async () => {
      try {
        const data = await youTubeServices.getVideoDetail('video', id);
        if (data) {
          setIsLoading(false);
          setVideo(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getVideo();
  }, [id]);

  useEffect(() => {
    const relatedVid = async () => {
      const { data } = await youTubeServices.getVideoDetail('related', id);
      setRelatedVideos(data);
    };

    relatedVid();
  }, [id]);

  const handleSearch = (e) => {
    e.preventDefault();
    setStartSearch(true);
    setSearchWord(search);
    setSearch('');
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <section className="flex mt-4 w-full h-screen relative">
      {isLoading && !video ? (
        <div className="flex justify-center items-center h-sideBar w-full">
          <Loader />
        </div>
      ) : (
        <>
          <div className="flex flex-col">
            <Navbar
              userState={id}
              position={'fixed'}
              handleSearch={handleSearch}
              handleSearchChange={handleSearchChange}
              searchTerm={search}
            />
            <div className="flex justify-between gap-12 relative">
              {!startSearch ? (
                <>
                  <div className="player w-[72vw] h-[80vh]">
                    <ReactPlayer
                      url={`https://www.youtube.com/watch?v=${id}`}
                      controls
                      width={'100%'}
                      height={'100%'}
                      className="react-player"
                    />
                    <div className="flex flex-col w-playerWidth gap-2 mt-3 video-text">
                      <p className="text-xs font-bold">{video?.title}</p>
                      <p className="text-xs opacity-70">
                        {video?.viewCount
                          ? millify(Number(video?.viewCount))
                          : '0'}{' '}
                        views
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col absolute left-[77vw] top-[3rem] gap-4 related">
                    {relatedVideos.map((video) => (
                      <VideoCard key={video?.videoId} video={video} />
                    ))}
                  </div>
                </>
              ) : (
                <div className='search-section'>
                  <h2 className="pb-2">
                    {' '}
                    Search results for:
                    <span className="text-red-600">{searchWord} </span> videos
                  </h2>
                  <Videofeild
                    searchText={'Search results for:'}
                    text={searchWord}
                    categoryValue={searchWord}
                    vw="w-[100vw]"
                    ml="ml-[8rem]"
                    mx="ml-[8rem]"
                  />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default VideoDetails;
