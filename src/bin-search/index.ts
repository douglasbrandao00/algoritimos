export default function binarySearch(list: number[], itemToFound: number) {
  let higherGuess = list.length - 1;
  let lowersGuess = 0;
  while (higherGuess >= lowersGuess) {
    let guess = makeGuess(higherGuess, lowersGuess);
    let itemAtHaf = list[guess];

    if (itemAtHaf === itemToFound) return itemAtHaf;
    if (itemToFound < itemAtHaf) {
      higherGuess = --itemAtHaf;
    }
    if (itemToFound > itemAtHaf) {
      lowersGuess = ++itemAtHaf;
    }
  }
  function makeGuess(max: number, min: number) {
    return Math.floor((max + min) / 2);
  }
}
