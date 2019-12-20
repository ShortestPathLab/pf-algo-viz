import NodeObject from './node-object';
import config from '../config';
import Injector from '../services/injector';

let _id = 1;

class Rectangle extends NodeObject {
  constructor(options){
    super(options.nodeConf);
    Object.assign(this, options.coordinates);
  }
  createGraphics(attrs){
    let _graphics = new PIXI.Graphics();
    _graphics.lineStyle(1, attrs.strokeStyle);
    _graphics.beginFill(attrs.fillStyle);
    _graphics.drawRect(this.x, this.y, config.width, config.height);
    _graphics.endFill();
    _graphics.interactive=true;
    _graphics.buttonMode=true;
    _graphics.on("mouseover", (e) => {
      _graphics.tint=attrs.fillStyle;
    });
    _graphics.on("mouseout", () => {
      _graphics.tint="0xFFFFFF";
    });
    Injector.inject(this, ['renderer']);
    let texture = this.renderer.generateTexture(_graphics);
    let rectangleSprite = new PIXI.Sprite(texture);
    return rectangleSprite;
  }
  get graphics(){
    if(!this._graphics){
      this._graphics = this.createGraphics(this.node.attrs);
    }
    return this._graphics;
  }
  get center(){
    return {x: config.nodeSize*(this.x+0.5), y: config.nodeSize*(this.y+0.5)}
  }
  get maxX(){
    return this.x;
  }
  get maxY(){
    return this.y;
  }
}

export default Rectangle;
