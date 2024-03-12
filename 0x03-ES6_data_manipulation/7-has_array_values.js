function hasValuesFromArray(setItems, arrayItems) {
  for (const value of arrayItems) {
    if (!setItems.has(value)) {
      return false;
    }
  }
  return true;
}

export default hasValuesFromArray;
