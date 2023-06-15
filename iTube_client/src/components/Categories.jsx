// import React, { useEffect, useState } from 'react';
import Music from './Music';
import Gaming from './Gaming';
import welcome from '../assets/welcome.gif';
import Anime from './Anime';
import Coding from './Coding';
import Education from './Education';
import Movies from './Movies';
import { homeOptions } from '../utils/constants';

const Categories = ({
  handleHomeValue,
  optionsForHome,
  musicChoice,
  handleMusicOptions,
  gamingChoice,
  handleGamingOptions,
  animeChoice,
  handleAnimeOptions,
  codingChoice,
  handleCodingOptions,
  educationChoice,
  handleEducationOptions,
  moviesChoice,
  handleMoviesOptions,
}) => {
  return (
    <section className="flex flex-col justify-center items-center mt-4">
      <div className="flex flex-col w-full text-center">
        <h3 className="text-4xl font-bold mb-8">
          Choose your default <span className="text-red-600">home video</span>{' '}
          category
        </h3>
        <div className="flex items-center justify-center gap-10 mb-8">
          {homeOptions[1].map((op) => (
            <button
              key={`${op.id}${op.name}`}
              className="btn-gradient py-1.5 font-mono w-48 h-auto rounded-md"
              onClick={handleHomeValue}
            >
              {op.name}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10">
          {homeOptions[2].map((op) => (
            <button
              key={`${op.id}${op.name}`}
              className="btn-gradient py-1.5 font-mono w-48 h-auto rounded-md"
              onClick={handleHomeValue}
            >
              {op.name}
            </button>
          ))}
        </div>
        <div className="pinkish flex justify-center items-center text-lg font-mono font-bold gap-6 pt-5 opacity-80">
          {optionsForHome.length === 1 ? (
            <h2>
              Your default home choice is:{' '}
              <span className="text-1xl font-serif font-bold">[</span>{' '}
              {optionsForHome[0].name}{' '}
              <span className="text-1xl font-serif font-bold">]</span>
            </h2>
          ) : (
            <h2>
              Your default home choice is:{' '}
              <span className="text-1xl font-serif font-bold">[</span> Click
              buttons to add a choice{' '}
              <span className="text-1xl font-serif font-bold">]</span>
            </h2>
          )}
        </div>
        <div className="flex justify-center items-center mb-4 mt-8 pt-8">
          <img src={welcome} alt="welcome" className="rounded-md" />
        </div>
        <div className="mt-16">
          <div>
            <h3 className="text-3xl font-bold mt-6">Select other categories</h3>
            <p className="text-lg font-bold tracking-wider mb-6">
              Only your last{' '}
              <span className="text-red-500 tracking-wider">
                two picks per category
              </span>{' '}
              would be populated
            </p>
          </div>
          <Music
            musicChoice={musicChoice}
            handleMusicOptions={handleMusicOptions}
          />
          <Gaming
            gamingChoice={gamingChoice}
            handleGamingOptions={handleGamingOptions}
          />
          <Anime
            animeChoice={animeChoice}
            handleAnimeOptions={handleAnimeOptions}
          />
          <Coding
            codingChoice={codingChoice}
            handleCodingOptions={handleCodingOptions}
          />
          <Education
            educationChoice={educationChoice}
            handleEducationOptions={handleEducationOptions}
          />
          <Movies
            moviesChoice={moviesChoice}
            handleMoviesOptions={handleMoviesOptions}
          />
        </div>
      </div>
    </section>
  );
};

export default Categories;
