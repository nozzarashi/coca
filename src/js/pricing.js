import '/scss/pricing.scss';

// components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHidingHeader } from './components/hiding-header.js';
import { useAccordion } from './components/accordion.js';
import { usePriceSwitcher } from './components/pricing/priceSwitcher.js';
import { useFaqAccordion } from './components/pricing/faqAccordion.js';

useTheme();
useBurger();
useHidingHeader();
useAccordion();
usePriceSwitcher();
useFaqAccordion();
