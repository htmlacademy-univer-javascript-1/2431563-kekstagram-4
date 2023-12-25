import { BASE_URL, Method, Route, ServerErrorMessage } from './constants.js';

const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Произошла ошибка ${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => load(Route.GET_DATA, ServerErrorMessage.GET_DATA);

const sendData = (body) => load(Route.SEND_DATA, ServerErrorMessage.POST_DATA, Method.POST, body);

export { getData, sendData };
