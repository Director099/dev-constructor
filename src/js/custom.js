import {hoverMenu} from '../blocks/entities/hover-menu/hover-menu.js';
import {mbMenu} from '../blocks/entities/mb-menu/mb-menu.js';

new hoverMenu({
  elemHover: '.js-hover',
  hoverHolding: '.page-header',
  showContent: '.submenu',
  mediaXl: 1230,
})
