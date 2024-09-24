import '../assets/scss/contact.scss';

// components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useAccordion } from './components/accordion.js';
import { initMap } from './components/contact/map.js';

useTheme();
useBurger();
useAccordion();
initMap();
