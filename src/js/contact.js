import '/scss/contact.scss';

// components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHidingHeader } from './components/hiding-header.js';
import { useAccordion } from './components/accordion.js';
import { initMap } from './components/contact/map.js';
import { phoneInput } from './components/contact/tel.js';

useTheme();
useBurger();
useHidingHeader();
useAccordion();
initMap();
phoneInput();
