export class mbMenu {
  constructor({
    menu,
    burger,
    toggleClassNameBody
  }) {
    this.menu = document.querySelector(menu);
    this.burger = document.querySelector(burger);
    this.mainMenu = this.menu.querySelector('.mb-menu__list');
    this.subItem = this.menu.querySelectorAll('[data-sub-item]')
    this.menuBack = this.menu.querySelector("[data-menu-back]");
    this.bindingSubItem = this.menu.querySelectorAll('[data-binding-sub-item]');
    this.toggleClassNameBody = toggleClassNameBody;

    this.NAME_CLASS = {
      hiddenMenu: 'hidden-menu',
    }

    this._init();
  }

  hiddenMainMenu() {
    this.mainMenu.classList.add(this.NAME_CLASS.hiddenMenu);
  }

  hiddenMenuBack() {
    this.menuBack.classList.add(this.NAME_CLASS.hiddenMenu)
  }

  showMainMenu() {
    this.mainMenu.classList.remove(this.NAME_CLASS.hiddenMenu);
  }

  showMenuBack() {
    this.menuBack.classList.remove(this.NAME_CLASS.hiddenMenu)
  }

  toggleBurger() {
    this.burger.classList.toggle('active');
    document.body.classList.toggle(this.toggleClassNameBody)
  }

  showSubItem(e) {
    e.preventDefault();
    const bindingSubItem = this.menu.querySelector(`[data-binding-sub-item="${e.target.dataset.subItem}"]`);
    this.hiddenMainMenu();

    this.showMenuBack()
    bindingSubItem.classList.remove(this.NAME_CLASS.hiddenMenu);
  }

  resetSubMenu() {
    this.bindingSubItem.forEach(elem => elem.classList.add(this.NAME_CLASS.hiddenMenu));
    this.hiddenMenuBack();
    this.showMainMenu();
  }

  closeMenu() {
    this.toggleBurger();
    this.resetSubMenu();
  }

  _events() {
    this.subItem.forEach(elem => elem.addEventListener('click', (e) => this.showSubItem(e)))
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
  toggleClassNameBody: 'show-open'
})
