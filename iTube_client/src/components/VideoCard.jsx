import React, { useEffect, useState } from 'react';
import demoImg from '../assets/welcome.gif';
import demo from '../assets/demo.jpg';
import millify from 'millify';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const [isNavigated, setIsNavigated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isNavigated) navigate(`/video/${video.videoId}`);
  }, [isNavigated, video.videoId, navigate]);

  const truncate = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + '...';
    } else {
      return str;
    }
  };

  const handleNavigate = (e) => {
    e.preventDefault();
    setIsNavigated(true);
  };

  return (
    <div>
      <div className="card h-[19rem] w-cardWidth flex flex-col gap-3 justify-center items-start bg-slate-900 rounded-sm opacity-95 py-2 px-1 overflow-y-hidden">
        <div
          className="flex justify-center items-center w-11/12 h-48 py-2 m-auto hover:cursor-pointer"
          onClick={handleNavigate}
        >
          <img
            className="h-full w-full object-cover"
            src={
              video?.thumbnail && video?.thumbnail[3]
                ? video?.thumbnail[3]?.url
                : video?.thumbnail && video?.thumbnail[2]
                ? video?.thumbnail[2]?.url
                : video?.thumbnail && video?.thumbnail[1]
                ? video?.thumbnail[1]?.url
                : video?.thumbnail && video?.thumbnail[0]
                ? video?.thumbnail[0]?.url
                : demoImg
            }
            alt={'thumbnail'}
          />
        </div>

        <div className="h-24 flex flex-col gap-5 w-11/12 ml-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full">
              <img
                src={
                  video?.channelThumbnail && video?.channelThumbnail[3]
                    ? video.channelThumbnail[3].url
                    : video?.channelThumbnail && video?.channelThumbnail[2]
                    ? video.channelThumbnail[2].url
                    : video?.channelThumbnail && video?.channelThumbnail[1]
                    ? video.channelThumbnail[1].url
                    : video?.channelThumbnail && video?.channelThumbnail[0]
                    ? video.channelThumbnail[0].url
                    : demo
                }
                alt={
                  video.channelTitle ? video.channelTitle : 'Odo Peter Ebere'
                }
                className="w-full h-full rounded-full hover:cursor-pointer"
              />
            </div>
            <p
              className="text-xs opacity-80 font-bold hover:cursor-pointer"
              onClick={handleNavigate}
            >
              {video?.title ? truncate(video?.title, 22) : 'Odo Peter Ebere'}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <p className="text-xs opacity-70">
                  {video.channelTitle
                    ? truncate(video?.channelTitle, 16)
                    : 'Odo Peter Ebere'}
                </p>
                <span className="text-xs font-thin opacity-60">
                  {' '}
                  <FaCheckCircle />{' '}
                </span>
              </div>
              <p className="text-xs opacity-75">
                {video.viewCount ? millify(Number(video?.viewCount)) : '0'}
              </p>
            </div>
            <p className="text-xs opacity-70 pb-2">
              {video?.publishedText
                ? video?.publishedText
                : video?.publishedTimeText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
