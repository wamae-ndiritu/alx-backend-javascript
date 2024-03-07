export default class Building {
  constructor(sqft) {
    if (
      this.evacuationWarningMessage
      === Building.prototype.evacuationWarningMessage
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }

    this._sqft = 0;

    // Verify type of attribute during object creation
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw new TypeError('Sqft must be a number');
    }
  }

  // Abstract method to be implemented by subclasses
  evacuationWarningMessage() {}

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
}
