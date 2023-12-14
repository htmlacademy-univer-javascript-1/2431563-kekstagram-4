const thumbnailConstructor = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const getThumbnail = (item) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = item.url;
  thumbnail.querySelector('.picture__img').alt = item.url;
  thumbnail.querySelector('.picture__comments').textContent = item.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = item.likes;
  thumbnail.dataset.id = item.id;
  return thumbnail;
};

const renderingThumbnails = (items) => {
  const documentFragment = document.createDocumentFragment();
  items.forEach((item) => {
    documentFragment.append(getThumbnail(item));
  });
  thumbnailConstructor.appendChild(documentFragment);
};

export { renderingThumbnails };
