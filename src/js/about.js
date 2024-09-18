import '../assets/scss/about.scss';

// components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeroSlider } from './components/about/slider.js';
import { useTeamSlider } from './components/about/slider.js';
import { useAccordion } from './components/accordion.js';

useTheme();
useBurger();
useHeroSlider();
useTeamSlider();
useAccordion();
