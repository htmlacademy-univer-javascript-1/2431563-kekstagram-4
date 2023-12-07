import { EFFECTS } from './constants';

const img = document.querySelector('.img-upload__preview img');
const effects = document.querySelector('.effects');
const slider = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.img-upload__effect-level');
const effectValue = document.querySelector('.effect-level__value');
let currentEffect = EFFECTS.none;

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100
  },
  start: 100,
  step: 1,
  connect: 'lower'
});

const updateSlider = () => {
  slider.noUiSlider.updateOptions(
    {
      range: {
        min: currentEffect.min,
        max: currentEffect.max
      },
      step: currentEffect.step,
      start: currentEffect.max
    });
  if (currentEffect === EFFECTS.none) {
    effectLevel.classList.add('hidden');
  }
  else {
    effectLevel.classList.remove('hidden');
  }
};

const resetFilters = () => {
  currentEffect = EFFECTS.none;
  updateSlider();
};

slider.noUiSlider.on('update', () => {
  const value = slider.noUiSlider.get();
  if (currentEffect === EFFECTS.none) {
    img.style.filter = EFFECTS.none.style;
  }
  else {
    img.style.filter = `${currentEffect.style}(${value}${currentEffect.unit})`;
  }
  effectValue.value = value;
});

effects.addEventListener('change', (event) => {
  if (event.target.classList.contains('effects__radio')) {
    currentEffect = EFFECTS[`${event.target.value}`];
    img.className = `effects__preview--${currentEffect.name}`;
    updateSlider();
  }
});

export { resetFilters };
