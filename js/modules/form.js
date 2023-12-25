import { MAXIMUM_COMMENT_LENGTH, MAXIMUM_HASHTAGS_NUMBER, VALID_HASHTAG } from './constants.js';
import { resetFilters } from './effect.js';
import { sendData } from './api.js';
import { showErrorModal, showSuccessModal } from './create-modal.js';
import { resetScale } from './scale.js';

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const file = form.querySelector('#upload-file');
const imgOverlay = form.querySelector('.img-upload__overlay');
const canselButton = form.querySelector('#upload-cancel');
const hashtagsField = form.querySelector('.text__hashtags');
const buttonCloseOverlay = form.querySelector('#upload-cancel');
const commentsField = form.querySelector('.text__description');
const image = document.querySelector('.img-upload__preview img');
const effectImage = document.querySelectorAll('.effects__preview');


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

const getSplitHashtag = (items) => items.trim().split(' ').filter((tag) => tag.trim().length);

const checkCorrectHashtagsNumber = (items) => getSplitHashtag(items).length <= MAXIMUM_HASHTAGS_NUMBER;

const checkValidHashtag = (hashtags) => {
  const items = getSplitHashtag(hashtags);
  let flag = true;
  for (let i = 0; i < items.length; i++) {
    if (!VALID_HASHTAG.test(items[i])) {
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

const changeEffectPreviewImage = (newItem) => {
  effectImage.forEach((item) => {
    item.style.backgroundImage = `url('${newItem}')`;
  });
};

file.addEventListener('change', (event) => {
  const newImage = event.target.files[0];
  if (newImage) {
    const url = URL.createObjectURL(newImage);
    image.src = url;
    changeEffectPreviewImage(url);
  }
});

const blockSubmitButton = () => {
  buttonCloseOverlay.disabled = true;
  buttonCloseOverlay.textContent = 'Загружаю';
};

const unblockSubmitButton = () => {
  buttonCloseOverlay.disabled = false;
  buttonCloseOverlay.textContent = 'Загрузить';
};

const onFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (pristine.validate()) {
      const formData = new FormData(form);

      blockSubmitButton();
      sendData(formData)
        .then(() => {
          closeImage();
          showSuccessModal();
        })
        .catch(() => {
          closeImage();
          showErrorModal();
        })
        .finally(unblockSubmitButton);
    }
  });
};


export { onFormSubmit, closeImage, openImage };
