const errorModal = document.querySelector('#error').content.querySelector('.error');
const successModal = document.querySelector('#success').content.querySelector('.success');

const closeErrorModal = () => {
  const error = document.querySelector('.error');
  if (error) {
    error.remove();
  }
};

const showErrorModal = () => {
  const error = errorModal.cloneNode(true);
  error.querySelector('.error__button').addEventListener('click', closeErrorModal);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeErrorModal();
    }});
  document.addEventListener('click', (event) => {
    const innerError = document.querySelector('.error__inner');
    if (!innerError.contains(event.target)) {
      closeErrorModal();
    }});
  document.body.append(error);
};

const closeSuccessModal = () => {
  const success = document.querySelector('.success');
  if (success) {
    success.remove();
  }
};

const showSuccessModal = () => {
  const success = successModal.cloneNode(true);
  success.querySelector('.success__button').addEventListener('click', closeSuccessModal);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeSuccessModal();
    }
  });
  document.addEventListener('click', (event) => {
    const innerSuccess = document.querySelector('.success__inner');
    if (!innerSuccess.contains(event.target)) {
      closeSuccessModal();
    }
  });
  document.body.append(success);
};

export { showErrorModal, showSuccessModal };
