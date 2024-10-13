import '/scss/blog.scss';

// components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useAccordion } from './components/accordion.js';
import { useHidingHeader } from './components/hiding-header.js';
import { useTabulation } from './components/blog/tabulation.js';
import { useBlogSlider } from './components/blog/slider.js';
import { useArticlesSlider } from './components/blog/slider.js';

useTheme();
useBurger();
useAccordion();
useHidingHeader();
useTabulation();
useBlogSlider();
useArticlesSlider();
