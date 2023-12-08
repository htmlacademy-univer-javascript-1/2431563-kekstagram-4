import { DEFAULT_SCALE, MAX_SCALE, MIN_SCALE, SCALE_STEP } from './constants.js';

const img = document.querySelector('.img-upload__preview img');
const scale = document.querySelector('.scale__control--value');
const makeSmallerButton = document.querySelector('.scale__control--smaller');
const makeBiggerButton = document.querySelector('.scale__control--bigger');

scale.value = `${DEFAULT_SCALE}%`;
const changeScale = (item) => {
  scale.value = `${item}%`;
  img.style.transform = `scale(${item/100})`;
};

const resetScale = () => changeScale(DEFAULT_SCALE);

makeSmallerButton.addEventListener('click', () => changeScale(Math.max(Number(scale.value.slice(0, -1)) - SCALE_STEP, MIN_SCALE)));
makeBiggerButton.addEventListener('click', () => changeScale(Math.min(Number(scale.value.slice(0, -1)) + SCALE_STEP, MAX_SCALE)));

export { resetScale };
