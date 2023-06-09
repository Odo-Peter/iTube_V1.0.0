import { musicOptions } from '../utils/constants';

const Music = ({ handleMusicOptions, musicChoice }) => {
  return (
    <div className="music mb-16">
      <div className="flex flex-col justify-center items-center mb-4">
        <hr className="line flex m-auto my-4 border-none outline-none h-lineHeight w-full pb-pbot" />
        <h4 className="pinkish text-2xl font-bold">Music</h4>
        <hr className="line flex m-auto my-4 border-none outline-none h-lineHeight w-full pb-pbot" />
      </div>
      <div className="btn-div flex items-center justify-center gap-10">
        {musicOptions[1].map((op) => (
          <button
            key={`${op.id}${op.name}`}
            className="btn-gradient py-1.5 font-mono w-48 h-auto rounded-md"
            onClick={handleMusicOptions}
          >
            {op.name}
          </button>
        ))}
      </div>

      <div className="btn-div flex items-center justify-center gap-10 mt-6">
        {musicOptions[2].map((op) => (
          <button
            key={op.id}
            className="btn-gradient py-1.5 font-mono w-48 h-auto rounded-md"
            onClick={handleMusicOptions}
          >
            {op.name}
          </button>
        ))}
      </div>
      <div className="pinkish music-text flex justify-start items-center text-lg font-mono font-bold gap-6 pt-5 opacity-80">
        {musicChoice.length === 1 ? (
          <h2>
            Your choices were:{' '}
            <span className="text-1xl font-serif font-bold">[</span>{' '}
            {musicChoice[0].name} and ...{' '}
            <span className="text-1xl font-serif font-bold">]</span>
          </h2>
        ) : musicChoice.length > 1 ? (
          <h2>
            Your choices were:{' '}
            <span className="text-1xl font-serif font-bold">[</span>{' '}
            {musicChoice[0].name} and {musicChoice[1].name}{' '}
            <span className="text-1xl font-serif font-bold">]</span>
          </h2>
        ) : (
          <h2>
            Your choices are:{' '}
            <span className="text-1xl font-serif font-bold">[</span> Click
            buttons to add choices{' '}
            <span className="text-1xl font-serif font-bold">]</span>
          </h2>
        )}
      </div>
    </div>
  );
};

export default Music;
