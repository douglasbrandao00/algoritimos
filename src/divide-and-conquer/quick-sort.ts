type Sort = {
  smaller: number[];
  bigger: number[];
};

export default function quickSort(arr: number[]): number[] {
  if (arr.length < 2) return arr;
  const pivot = arr[0];
  const smaller = arr.filter((el) => el < pivot);
  const bigger = arr.filter((el) => el > pivot);

  //...
  return [...quickSort(smaller), pivot, ...quickSort(bigger)];
}
