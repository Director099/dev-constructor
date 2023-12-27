export class hoverMenu {
  constructor({
    elemHover,
    hoverHolding,
    showContent,
    mediaXl,
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
    this._elemHover.addEventListener('mouseover', () => this.show())
  }

  handleMouseleave() {
    this._hoverHolding.addEventListener('mouseleave', () => this.hidden())
  }

  _events() {
    this.handleMouseover();
    this.handleMouseleave();
  }

  _init() {
    this._events();
  }
}
