function cleanSet(setItems, startsWith) {
  let restStr = '';
  for (const item of setItems) {
    if (item.startsWith(startsWith)) {
      restStr
        += (restStr ? '-' : '')
        + (startsWith ? item.slice(startsWith.length) : '');
    }
  }
  return restStr;
}

export default cleanSet;
