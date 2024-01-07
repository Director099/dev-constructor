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
      this.classNames = {
        Body: 'nav-open',
        Active: 'active'
      };
      if (!!elemHover) {
        this._hoverHolding = document.querySelector(hoverHolding);
        this._listMenu = this._hoverHolding.querySelector(showContent);
        this.body = document.body;
        this._init();
      }
    }
    showBlurOverlay() {
      this.body.classList.add(this.classNames.Body);
    }
    hideBlurOverlay() {
      this.body.classList.remove(this.classNames.Body);
    }
    show() {
      if (this.mediaXl) this._listMenu.style.height = this._listMenu.scrollHeight + 'px';
      this._elemHover.classList.add(this.classNames.Active);
      this.showBlurOverlay();
    }
    hidden() {
      if (this.mediaXl) this._listMenu.style.height = "0";
      this._elemHover.classList.remove(this.classNames.Active);
      this.hideBlurOverlay();
    }
    toggleMenu() {
      this.body.classList.contains(this.classNames.Body) ? this.hidden() : this.show();
    }
    handleMouseover() {
      this._elemHover.addEventListener('mouseover', () => this.show());
    }
    handleMouseleave() {
      this._hoverHolding.addEventListener('mouseleave', () => this.hidden());
    }
    handleClick() {
      this._elemHover.addEventListener('click', () => this.toggleMenu());
    }
    _events() {
      if (this.mediaXl) {
        this.handleMouseover();
        this.handleMouseleave();
      } else {
        this.handleClick();
      }
    }
    _init() {
      this._events();
    }
  }

  new hoverMenu({
    elemHover: '[data-hover-menu]',
    hoverHolding: '.page-header',
    showContent: '.submenu',
    mediaXl: MediaSize.XL
  });

})));
