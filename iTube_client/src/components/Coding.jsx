import { codingOptions } from '../utils/constants';

const Coding = ({ codingChoice, handleCodingOptions }) => {
  return (
    <div className="coding mb-16">
      <div className="flex flex-col justify-center items-center mb-4">
        <hr className="line2 flex m-auto my-4 border-none outline-none h-lineHeight w-full pb-pbot" />
        <h4 className="welcome text-2xl font-bold">Coding</h4>
        <hr className="line2 flex m-auto my-4 border-none outline-none h-lineHeight w-full pb-pbot" />
      </div>
      <div className="btn-div flex items-center justify-center gap-10">
        {codingOptions[1].map((op) => (
          <button
            key={op.id}
            className="btn-gradient2 py-1.5 font-mono w-48 h-auto rounded-md"
            onClick={handleCodingOptions}
          >
            {op.name}
          </button>
        ))}
      </div>

      <div className="btn-div flex items-center justify-center gap-10 mt-6 opacity-90">
        {codingOptions[2].map((op) => (
          <button
            key={op.id}
            className="btn-gradient2 py-1.5 font-mono w-48 h-auto rounded-md"
            onClick={handleCodingOptions}
          >
            {op.name}
          </button>
        ))}
      </div>
      <div className="welcome coding-text flex justify-start items-center text-lg font-mono font-bold gap-6 pt-5 opacity-85">
        {codingChoice.length === 1 ? (
          <h2>
            Your choices were:{' '}
            <span className="text-1xl font-serif font-bold">[</span>{' '}
            {codingChoice[0].name} and ...{' '}
            <span className="text-1xl font-serif font-bold">]</span>
          </h2>
        ) : codingChoice.length > 1 ? (
          <h2>
            Your choices were:{' '}
            <span className="text-1xl font-serif font-bold">[</span>{' '}
            {codingChoice[0].name} and {codingChoice[1].name}{' '}
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

export default Coding;
