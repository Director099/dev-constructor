import {MediaSize} from "../../shared/js-config/utils";
import {hoverMenu} from "../../shared/js-config/hover-menu/hover-menu";

new hoverMenu({
  elemHover: '[data-hover-menu]',
  hoverHolding: '.page-header',
  showContent: '.submenu',
  mediaXl: MediaSize.XL,
})
