const { Schema, model } = require('mongoose');

const reOcurringSchema = Schema({
  icon: String,
  id: Number,
  name: String,
  value: String,
});

const optionsSchema = Schema({
  homeOptions: {
    type: reOcurringSchema,
    required: true,
  },
  musicOptionsOne: {
    type: reOcurringSchema,
    required: true,
  },
  musicOptionsTwo: {
    type: reOcurringSchema,
    required: true,
  },
  gamingOptionsOne: {
    type: reOcurringSchema,
    required: true,
  },
  gamingOptionsTwo: {
    type: reOcurringSchema,
    required: true,
  },
  animeOptionsOne: {
    type: reOcurringSchema,
    required: true,
  },
  animeOptionsTwo: {
    type: reOcurringSchema,
    required: true,
  },
  codingOptionsOne: {
    type: reOcurringSchema,
    required: true,
  },
  codingOptionsTwo: {
    type: reOcurringSchema,
    required: true,
  },
  educationOptionsOne: {
    type: reOcurringSchema,
    required: true,
  },
  educationOptionsTwo: {
    type: reOcurringSchema,
    required: true,
  },
  moviesOptionsOne: {
    type: reOcurringSchema,
    required: true,
  },
  moviesOptionsTwo: {
    type: reOcurringSchema,
    required: true,
  },
});

module.exports = optionsSchema;
