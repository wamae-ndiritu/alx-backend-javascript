function cleanSet(setItems, startsWith) {
  let restStr = '';
  for (const item of setItems) {
    if (startsWith !== '' && item.startsWith(startsWith)) {
      const lastPart = item.split(startsWith)[1];
      restStr += `${lastPart}-`;
    }
  }
  return restStr.slice(0, -1);
}

export default cleanSet;
