export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // When cast into a Number, return the size
  valueOf() {
    return this._size;
  }

  // When cast into a String, return the location
  toString() {
    return this._location;
  }
}
