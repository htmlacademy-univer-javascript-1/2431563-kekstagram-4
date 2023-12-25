import { renderThumbnails } from './modules/render-thumbnails.js';
import { getData } from './modules/api.js';
import { onFormSubmit } from './modules/form.js';
import { showFilterButtons } from './modules/filters.js';
import { debounce, showAlert } from './modules/utils.js';
import './modules/effect.js';
import './modules/scale.js';

onFormSubmit();

getData().then((items) => {
  const debouncedRenderingThumbnail = debounce(renderThumbnails);
  renderThumbnails(items);
  showFilterButtons(items, debouncedRenderingThumbnail);
}).catch(() => {
  showAlert('Данные не загрузились с сервера');
});
