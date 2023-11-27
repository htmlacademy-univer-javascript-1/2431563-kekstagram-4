const MAXIMUM_HASHTAGS_NUMBER = 5;
const VALID_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const MAXIMUM_COMMENT_LENGTH = 140;

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const file = form.querySelector('#upload-file');
const imgOverlay = form.querySelector('.img-upload__overlay');
const canselButton = form.querySelector('#upload-cancel');
const hashtagsField = form.querySelector('.text__hashtags');
const commentsField = form.querySelector('.text__description');

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

const getSplitHashtag = (items) => {
  items.trim().split(' ');
};

const checkCorrectHashtagsNumber = (items) => getSplitHashtag(items).length < MAXIMUM_HASHTAGS_NUMBER;

const checkValidHashtag = (items) => {
  getSplitHashtag(items);
  let flag = true;
  items.forEach((item) => {
    if (!VALID_HASHTAG.test(item)){
      flag = false;
    }
  });
  return flag;
};

const checkHashtagsUnique = (items) => {
  getSplitHashtag(items);
  let flag = true;
  const uniqueHashtags = [];
  items.forEach((item) => {
    const hashtag = item.toLowerCase();
    if (uniqueHashtags.includes(hashtag)) {
      uniqueHashtags.push(hashtag);
    }
    else {
      flag = false;
    }
  });
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
  }
};

const openImage = () => {
  imgOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', escapeKeydown);
  canselButton.addEventListener('click', closeImage);
};

file.addEventListener('input', openImage);
