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

const getInt = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getElement = (array) => array[getInt(0, array.length-1)];

const createMessages = () =>
  Array.from({length: getInt(1, 2)},
    () => getElement(MESSAGES)).join(' ');

const getPicId = () => {
  let previousId = 0;
  return () => {
    previousId++;
    return previousId;
  };
};

const getCommentsId = () => {
  const ids = [];
  return () => {
    let id = getInt(1, Infinity);
    while (ids.includes(id)){
      id = getInt(1, Infinity);
    }
    ids.push(id);
    return id;
  };
};


const createComment = () => ({
  id: getCommentsId(),
  avatar: `img/avatar-${getInt(1, 6)}.svg`,
  message: createMessages(),
  name: getElement(NAMES),
});

const createObject = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  likes: getInt(15, 200),
  description: getElement(DESCRIPTIONS),
  name: getElement(NAMES),
  comments: Array.from({ length: getCommentsId(0, 30) }, () => createComment())
});

const getObjects = () => Array.from({ length: 25 }, createObject(getPicId()));

getObjects();
