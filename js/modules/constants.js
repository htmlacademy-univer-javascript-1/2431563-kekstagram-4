const MAXIMUM_HASHTAGS_NUMBER = 5;
const VALID_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const MAXIMUM_COMMENT_LENGTH = 140;

const DEFAULT_SCALE = 100;
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const SCALE_STEP = 25;

const BASE_URL = 'https://29.javascript.pages.academy/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ServerErrorMessage = {
  GET_DATA: 'Данные не загрузились',
  POST_DATA: 'Данные не отправились',
};

const EFFECTS = {
  none: {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  chrome: {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  sepia: {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  marvin: {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  phobos: {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  heat: {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
};


export { MAXIMUM_HASHTAGS_NUMBER, VALID_HASHTAG, MAXIMUM_COMMENT_LENGTH, DEFAULT_SCALE, MAX_SCALE, MIN_SCALE, SCALE_STEP, EFFECTS, BASE_URL, ServerErrorMessage, Route, Method };
