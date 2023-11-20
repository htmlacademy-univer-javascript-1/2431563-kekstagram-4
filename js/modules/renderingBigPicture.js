const bigPicture = document.querySelector('.big-picture');
const removeButton = bigPicture.querySelector('.big-picture__cancel');
const img = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const body = document.querySelector('body');
const socialCaption = bigPicture.querySelector('.social__caption');
const comment = document.querySelector('.social__comment');
const commentsList = document.querySelector('.social__comments');
const commentsCountBlock = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const openPicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsCountBlock.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};

const closePicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

const escapeKeydown = (event) => {
  if (event.key === 'Escape') {
    closePicture();
    event.preventDefault();
  }
};

const getComment = (item) => {
  const newComment = comment.cloneNode(true);
  newComment.querySelector('.social__picture').alt = item.name;
  newComment.querySelector('.social__picture').src = item.avatar;
  newComment.querySelector('.social__text').textContent = item.message;
  return newComment;
};

const getCommentsList = (items) => {
  commentsList.innerHTML = '';
  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    fragment.append(getComment(item));
  });
  commentsList.append(fragment);
};

const getPictureDetails = (item) => {
  img.src = item.url;
  likesCount.textContent = item.likes;
  commentsCount.textContent = item.comments.length;
  socialCaption.textContent = item.description;
  getCommentsList(item.comments);
};

const renderingBigPicture = (items) => {
  const picturesList = document.querySelectorAll('.picture');
  picturesList.forEach((item) => {
    item.addEventListener('click', () => {
      openPicture();
      getPictureDetails(items[item.dataset.id - 1]);
    });
  });
  removeButton.addEventListener('click', closePicture);
  document.addEventListener('keydown', escapeKeydown);
};

export { renderingBigPicture };
