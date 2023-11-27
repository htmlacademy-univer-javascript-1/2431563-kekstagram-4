import { getObjects } from './modules/createObjects.js';
import { renderingThumbnails } from './modules/renderingThumbnails.js';
import { renderingBigPicture } from './modules/renderingBigPicture.js';
import './modules/form.js';
const objects = getObjects();
renderingThumbnails(objects);
renderingBigPicture(objects);
