export default function updateUniqueItems(mapItems) {
  if (!(mapItems instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of mapItems.entries()) {
    if (value === 1) {
      mapItems.set(key, 100);
    }
  }
}
