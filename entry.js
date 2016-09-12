import Cell from './cell';
import Row from './row';


window.init = function init() {
  let stage = new createjs.Stage("demoCanvas");
  let circle = new createjs.Shape();
  circle.graphics.beginFill("Crimson").drawCircle(0,0,50);
  circle.x = 100;
  circle.y = 100;
  stage.addChild(circle);
  createjs.Tween.get(circle, {loop: true})
    .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
    .to({ alpha: 1, y: 75 }, 500, createjs.Ease.getPowInOut(2))
    .to({ alpha: 0, y: 125 }, 100)
    .to({ alpha: 1, y: 100 }, 500, createjs.Ease.getPowInOut(2))
    .to({ x: 100}, 800, createjs.Ease.getPowInOut(2))
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);

};

window.Cell = Cell;
window.Row = Row;
