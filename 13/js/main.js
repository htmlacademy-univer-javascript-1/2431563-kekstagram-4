import { renderingThumbnails } from './modules/renderingThumbnails.js';
import { getData, sendData } from './modules/api.js';
import { setOnFormSubmit, closeImage } from './modules/form.js';
import { showErrorModal, showSuccessModal } from './modules/createModal.js';
import { showFilterButtons } from './modules/filters.js';
import { debounce } from './modules/utils.js';
import './modules/effect.js';
import './modules/scale.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    closeImage();
    showSuccessModal();
  }
  catch (error) {
    closeImage();
    showErrorModal();
  }
});

getData().then((items) => {
  const debouncedRenderingThumbnail = debounce(renderingThumbnails);
  renderingThumbnails(items);
  showFilterButtons(items, debouncedRenderingThumbnail);
});
