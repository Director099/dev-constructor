import {MediaSize} from "../../shared/js-config/utils";
import {hoverMenu} from "../../shared/js-config/hover-menu/hover-menu";
import {mbMenu} from "../../entities/mb-menu/mb-menu";

new mbMenu({
  menu: '.mb-menu',
  burger: '.burger',
  toggleClassNameBody: 'show-open',
  timeoutDuration: 200,
})

new hoverMenu({
  elemHover: '.js-hover',
  hoverHolding: '.page-header',
  showContent: '.submenu',
  mediaXl: MediaSize.XL,
})
