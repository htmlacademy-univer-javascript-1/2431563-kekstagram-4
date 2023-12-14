import { MAXIMUM_COMMENT_LENGTH, MAXIMUM_HASHTAGS_NUMBER, VALID_HASHTAG } from './constants.js';
import { resetFilters } from './effect.js';
import { resetScale } from './scale.js';

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const file = form.querySelector('#upload-file');
const imgOverlay = form.querySelector('.img-upload__overlay');
const canselButton = form.querySelector('#upload-cancel');
const hashtagsField = form.querySelector('.text__hashtags');
const commentsField = form.querySelector('.text__description');
const image = document.querySelector('.img-upload__preview img');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

commentsField.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    event.stopPropagation();
  }
});

hashtagsField.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    event.stopPropagation();
  }
});

const checkCorrectCommentLength = (items) => items.length < MAXIMUM_COMMENT_LENGTH;

const getSplitHashtag = (items) =>  items.trim().split(' ');

const checkCorrectHashtagsNumber = (items) => getSplitHashtag(items).length <= MAXIMUM_HASHTAGS_NUMBER;

const checkValidHashtag = (hashtags) => {
  const items = getSplitHashtag(hashtags);
  let flag = true;
  for (let i = 0; i < items.length; i++) {
    if (!VALID_HASHTAG.test(items[i])){
      flag = false;
      break;
    }
  }
  return flag;
};

const checkHashtagsUnique = (hashtags) => {
  const items = getSplitHashtag(hashtags);
  let flag = true;
  const uniqueHashtags = [];
  for (let i = 0; i < items.length; i++) {
    const hashtag = items[i].toLowerCase();
    if (uniqueHashtags.includes(hashtag)) {
      flag = false;
      break;
    }
    else {
      uniqueHashtags.push(hashtag);
    }
  }
  return flag;
};

pristine.addValidator(hashtagsField, checkCorrectHashtagsNumber, 'Превышено количество хэш-тегов');
pristine.addValidator(hashtagsField, checkHashtagsUnique, 'Хэш-теги повторяются');
pristine.addValidator(hashtagsField, checkValidHashtag, 'Введён невалидный хэш-тег');
pristine.addValidator(commentsField, checkCorrectCommentLength, 'Длина комментария не может составлять больше 140 символов');

const closeImage = () => {
  imgOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  form.reset();
  pristine.reset();
  canselButton.removeEventListener('click', closeImage);
};

const escapeKeydown = (event) => {
  if (event.key === 'Escape') {
    event.preventDefault();
    closeImage();
    document.removeEventListener('keydown', escapeKeydown);
  }
};

const openImage = () => {
  imgOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', escapeKeydown);
  canselButton.addEventListener('click', closeImage);
  resetScale();
  resetFilters();
};

file.addEventListener('input', openImage);

file.addEventListener('change', (event) => {
  const newImage = event.target.files[0];
  if (newImage) {
    image.src = URL.createObjectURL(newImage);
  }});

const setOnFormSubmit = (callback) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (pristine.validate()) {
      await callback(new FormData(form));
    }});
};

export { setOnFormSubmit, closeImage };
