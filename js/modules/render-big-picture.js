const bigPicture = document.querySelector('.big-picture');
const removeButton = bigPicture.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

const img = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const commentsCount = bigPicture.querySelector('.comments-count');

const commentsCountBlock = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const comment = document.querySelector('.social__comment');
const commentsList = document.querySelector('.social__comments');

const NUMBER_OF_COMMENTS_TO_UPLOAD = 5;
let numberOfCommentsShown = NUMBER_OF_COMMENTS_TO_UPLOAD;
let picture;

const resetCommentsCount = () => {
  numberOfCommentsShown = NUMBER_OF_COMMENTS_TO_UPLOAD;
};

const createCommentsList = (items) => {
  commentsList.innerHTML = '';
  commentsLoader.classList.remove('hidden');
  const fragment = document.createDocumentFragment();
  const listOfComments = [];

  items.forEach((item) => {
    if (listOfComments.length < numberOfCommentsShown) {
      listOfComments.push(item);
      const newComment = comment.cloneNode(true);
      newComment.querySelector('.social__picture').alt = item.name;
      newComment.querySelector('.social__picture').src = item.avatar;
      newComment.querySelector('.social__text').textContent = item.message;
      fragment.append(newComment);
    }
  });

  if (listOfComments.length >= items.length) {
    commentsLoader.classList.add('hidden');
  }

  commentsCountBlock.textContent = `${listOfComments.length} из ${items.length} комментариев`;
  commentsList.append(fragment);
};

const closePicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  removeButton.removeEventListener('click', closePicture);
};

const openPicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  img.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  socialCaption.textContent = picture.description;

  document.addEventListener('keydown', onDocumentKeydown);
  removeButton.addEventListener('click', closePicture);
  resetCommentsCount();
  createCommentsList(picture.comments);
};

function onDocumentKeydown(event) {
  if (event.key === 'Escape') {
    closePicture();
    event.preventDefault();
  }
}

const loadComments = () => {
  numberOfCommentsShown += NUMBER_OF_COMMENTS_TO_UPLOAD;
  createCommentsList(picture.comments);
};

const renderingBigPicture = (items) => {
  const pictures = document.querySelector('.pictures');
  commentsLoader.addEventListener('click', loadComments);

  pictures.addEventListener('click', (event) => {
    const clickThumbnail = event.target.closest('[data-id]');
    if (clickThumbnail) {
      event.preventDefault();
      picture = items.find((item) => item.id === +clickThumbnail.dataset.id);
      openPicture();
    }
  });
};

export { renderingBigPicture };
