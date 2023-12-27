(function (factory) {
  typeof define === 'function' && define.amd ? define('custom', factory) :
  factory();
}((function () { 'use strict';

  document.querySelectorAll('[data-toggle-nav-list]').forEach(elem => elem.addEventListener('click', e => e.target.parentNode.classList.toggle('active')));

  const MediaSize = {
    XL: 1230
  };

  class hoverMenu {
    constructor({
      elemHover,
      hoverHolding,
      showContent,
      mediaXl
    }) {
      this._elemHover = document.querySelector(elemHover);
      this.mediaXl = window.matchMedia(`(min-width: ${mediaXl}px)`).matches;
      if (!!elemHover && this.mediaXl) {
        this._hoverHolding = document.querySelector(hoverHolding);
        this._listMenu = this._hoverHolding.querySelector(showContent);
        this.body = document.body;
        this._init();
      }
    }
    showBlurOverlay() {
      this.body.classList.add('nav-open');
    }
    hideBlurOverlay() {
      this.body.classList.remove('nav-open');
    }
    show() {
      this._listMenu.style.height = this._listMenu.scrollHeight + 'px';
      this.showBlurOverlay();
    }
    hidden() {
      this._listMenu.style.height = "0";
      this.hideBlurOverlay();
    }
    handleMouseover() {
      this._elemHover.addEventListener('mouseover', () => this.show());
    }
    handleMouseleave() {
      this._hoverHolding.addEventListener('mouseleave', () => this.hidden());
    }
    _events() {
      this.handleMouseover();
      this.handleMouseleave();
    }
    _init() {
      this._events();
    }
  }

  class mbMenu {
    constructor({
      menu,
      burger,
      toggleClassNameBody,
      timeoutDuration
    }) {
      this.menu = document.querySelector(menu);
      this.burger = document.querySelector(burger);
      this.mainMenu = this.menu.querySelector('.mb-menu__list');
      this.subItem = this.menu.querySelectorAll('[data-sub-item]');
      this.menuBack = this.menu.querySelector("[data-menu-back]");
      this.bindingSubItem = this.menu.querySelectorAll('[data-binding-sub-item]');
      this.toggleClassNameBody = toggleClassNameBody;
      this.timeoutDuration = timeoutDuration;
      this.NAME_CLASS = {
        hiddenMenu: 'visibility-hidden'
      };
      this._init();
    }
    hiddenMainMenu() {
      this.mainMenu.classList.add(this.NAME_CLASS.hiddenMenu);
    }
    showMainMenu() {
      this.mainMenu.classList.remove(this.NAME_CLASS.hiddenMenu);
    }
    hiddenMenuBack() {
      this.menuBack.classList.add(this.NAME_CLASS.hiddenMenu);
    }
    showMenuBack() {
      this.menuBack.classList.remove(this.NAME_CLASS.hiddenMenu);
    }
    toggleBurger() {
      this.burger.classList.toggle('active');
      document.body.classList.toggle(this.toggleClassNameBody);
    }
    showSubItem(e) {
      e.preventDefault();
      const bindingSubItem = this.menu.querySelector(`[data-binding-sub-item="${e.target.dataset.subItem}"]`);
      this.hiddenMainMenu();
      setTimeout(() => {
        this.showMenuBack();
        bindingSubItem.classList.remove(this.NAME_CLASS.hiddenMenu);
      }, this.timeoutDuration);
    }
    resetSubMenu(time = this.timeoutDuration) {
      this.bindingSubItem.forEach(elem => elem.classList.add(this.NAME_CLASS.hiddenMenu));
      this.hiddenMenuBack();
      setTimeout(() => this.showMainMenu(), time);
    }
    closeMenu() {
      this.toggleBurger();
      this.resetSubMenu(400);
    }
    _events() {
      this.subItem.forEach(elem => elem.addEventListener('click', e => this.showSubItem(e)));
      this.menuBack.addEventListener('click', () => this.resetSubMenu());
      this.burger.addEventListener('click', () => this.closeMenu());
    }
    _init() {
      this._events();
    }
  }

  new mbMenu({
    menu: '.mb-menu',
    burger: '.burger',
    toggleClassNameBody: 'show-open',
    timeoutDuration: 200
  });
  new hoverMenu({
    elemHover: '.js-hover',
    hoverHolding: '.page-header',
    showContent: '.submenu',
    mediaXl: MediaSize.XL
  });

})));
