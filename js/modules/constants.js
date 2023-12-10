const NAMES = [
  'Jaga-Jaga',
  'Katyyyyyyya',
  'Just Anton',
  'Vika-hot-chika',
  'Dasha',
  'Prodam kirpichi',
  'Ilya',
  'Anna',
  'Devo4ki & Kiri11',
  'Nastyshka',
  'Nikita',
  'Sabinin hater'
];

const DESCRIPTIONS = [
  'Записываемся на ноготочки Питер/Москва 1000 р./сеанс',
  'мы с саньком (не проггеры)',
  'ахаха Сабина токсик',
  'нюдсы в тг;)',
  'Челябинск - столица мира',
  'РТФ - ЧЕМПИОН!!11!!!!!',
  'Уважаемые патпищеки, м Я у',
  'Ниважна, что говорят киски за спиной у крыски'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const MAXIMUM_HASHTAGS_NUMBER = 5;
const VALID_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const MAXIMUM_COMMENT_LENGTH = 140;

const DEFAULT_SCALE = 100;
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const SCALE_STEP = 25;

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


export {NAMES, DESCRIPTIONS, MESSAGES, MAXIMUM_HASHTAGS_NUMBER, VALID_HASHTAG, MAXIMUM_COMMENT_LENGTH, DEFAULT_SCALE, MAX_SCALE, MIN_SCALE, SCALE_STEP, EFFECTS};
