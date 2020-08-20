import dom from './libs/dom';
import GameLoop from './libs/GameLoop';
import gnomeImage from '../images/gnome-stand.gif';

const elTitle = dom.findOne('.game-title');

dom.onTap(elTitle, () => {
  elTitle.classList.add('hide');

  console.log('final gnome image path', gnomeImage);
});

setTimeout(() => {
  elTitle.classList.add('hide');
}, 4000);

const game = {
  el: dom.findOne('.app-container'),
  elWin: dom.findOne('.game-end')
};

const gnome = {
  el: dom.findOne('.gnome'),

  update() {
    const unitlessLeft = parseInt(this.el.style.left, 10) || 1;

    this.el.style.left = `${unitlessLeft + 1}px`;
  }
};

game.entities = [
  gnome
];

game.gameLoop = new GameLoop(() => {
  game.entities.forEach((entity) => {
    if (entity.update) entity.update();
  });
});
