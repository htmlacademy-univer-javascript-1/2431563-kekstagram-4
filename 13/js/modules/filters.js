const filter = document.querySelector('.img-filters');
let currentFilter = 'filter-default';
let pictures = [];

const resetFilterState = () => {
  const activeFilter = filter.querySelector('.img-filters__button--active');
  activeFilter.classList.remove('img-filters__button--active');
};

const randomSort = () => Math.random() - 0.5;
const discussedSort = (firstItem, secondItem) => secondItem.comments.length - firstItem.comments.length;

const sortPictures = () => {
  if (currentFilter === 'filter-default') {
    return pictures;
  }
  else if (currentFilter === 'filter-random') {
    return pictures.sort(randomSort).slice(0, 10);
  }
  else if (currentFilter === 'filter-discussed') {
    return pictures.sort(discussedSort);
  }
};

const applyFilter = (callback) => {
  filter.addEventListener('click', (event) => {
    if (!event.target.classList.contains('img-filters__button')) {
      return;
    }
    const clickedButton = event.target;
    if (currentFilter === clickedButton.id) {
      return;
    }
    resetFilterState();
    clickedButton.classList.add('img-filters__button--active');
    currentFilter = clickedButton.id;
    callback(sortPictures());
  });
};

const showFilterButtons = (loadedPictures, callback) => {
  filter.classList.remove('img-filters--inactive');
  pictures = loadedPictures;
  applyFilter(callback);
};

export { showFilterButtons };
