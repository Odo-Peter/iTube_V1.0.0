import React from 'react';
import VideoCard from './VideoCard';

const Videofeild = () => {
  const list = [
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
    'videocard',
  ];
  return (
    <section>
      <div className="flex items-center gap-6 justify-start flex-wrap mt-1 ml-4 pt-4 pl-8 overflow-y-auto">
        {list.map((v) => (
          <VideoCard text={v} />
        ))}
      </div>
    </section>
  );
};

export default Videofeild;
