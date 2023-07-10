/* eslint-disable import/prefer-default-export */

import { initializeSection } from './modules/navigation.js';
import { initializeDate } from './modules/date.js';
import BookList from './modules/booklist.js';

initializeDate();
initializeSection();
BookList.initialize();