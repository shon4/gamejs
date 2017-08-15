const staticJSON = require('./resources/res.static.json');

/**
 * StaticEntity
 * Ari Höysniemi, 08.10.2017
 * 
 * The base entity that every other entity extends.
 * Implements position, dimensions and other resources.
 */
class Entity {

  set x(v) { this._x = Number(v); }
  set y(v) { this._y = Number(v); }
  set z(v) { this._z = Number(v); }
  set roll(v) { this._roll = Number(v); }
  set pitch(v) { this._pitch = Number(v); }
  set yaw(v) { this._yaw = Number(v); }
  set width(v) { this._width = Number(v); }
  set length(v) { this._length = Number(v); }
  set height(v) { this._height = Number(v); }
  set color(v) { this._color = Number(v); }
  get x() { return this._x; }
  get y() { return this._y; }
  get z() { return this._z; }
  get roll() { return this._roll; }
  get pitch() { return this._pitch; }
  get yaw() { return this._yaw; }
  get width() { return this._width; }
  get length() { return this._length; }
  get height() { return this._height; }
  get color() { return this._color; }

  constructor (type, x = 0, y = 0, z = 0, roll = 0, pitch = 0, yaw = 0) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._roll = roll;
    this._pitch = pitch;
    this._yaw = yaw;
    this._width = staticJSON[type] ? staticJSON[type].width : 0;
    this._length = staticJSON[type] ? staticJSON[type].length : 0;
    this._height = staticJSON[type] ? staticJSON[type].height : 0;
    this._color = staticJSON[type] ? staticJSON[type].color : '0,0,0';
  }
}

module.exports = Entity;