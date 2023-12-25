import { openImage } from './form.js';

const errorModal = document.querySelector('#error').content.querySelector('.error');
const successModal = document.querySelector('#success').content.querySelector('.success');

const closeErrorModal = () => {
  const error = document.querySelector('.error');
  if (error) {
    removeErrorEvtListeners();
    error.remove();
  }
};

const onErrorEscape = (event) => {
  if (event.key === 'Escape') {
    event.preventDefault();
    closeErrorModal();
  }
};

const onErrorClick = (event) => {
  const innerError = document.querySelector('.error__inner');
  if (!innerError.contains(event.target)) {
    closeErrorModal();
  }
};

const onErrorButtonClick = () => {
  openImage();
  closeErrorModal();
};

function removeErrorEvtListeners() {
  const errorButton = document.querySelector('.error__button');
  errorButton.removeEventListener('click', onErrorButtonClick);
  document.removeEventListener('keydown', onErrorEscape);
  document.removeEventListener('click', onErrorClick);
}

const showErrorModal = () => {
  const error = errorModal.cloneNode(true);
  const errorButton = error.querySelector('.error__button');
  errorButton.addEventListener('click', onErrorButtonClick);
  document.addEventListener('keydown', onErrorEscape);
  document.addEventListener('click', onErrorClick);
  document.body.append(error);
};

const closeSuccessModal = () => {
  const success = document.querySelector('.success');
  if (success) {
    removeSuccessEvtListeners();
    success.remove();
  }
};

const onSuccessKeydown = (event) => {
  if (event.key === 'Escape') {
    event.preventDefault();
    closeSuccessModal();
  }
};

const onSuccessClick = (event) => {
  const innerSuccess = document.querySelector('.success__inner');
  if (!innerSuccess.contains(event.target)) {
    closeSuccessModal();
  }
};

function removeSuccessEvtListeners() {
  document.removeEventListener('keydown', onSuccessKeydown);
  document.removeEventListener('click', onSuccessClick);
}

const showSuccessModal = () => {
  const success = successModal.cloneNode(true);
  success.querySelector('.success__button').addEventListener('click', closeSuccessModal);
  document.addEventListener('keydown', onSuccessKeydown);
  document.addEventListener('click', onSuccessClick);
  document.body.append(success);
};

export { showErrorModal, showSuccessModal };
