export default function orderBySelection(unorderedList: number[]) {
  function orderList(original: number[], ordered: number[]): number[] {
    if (original.length < 1) return ordered;
    const smallest = findSmallestInList(unorderedList);
    const smallestPosition = original.indexOf(smallest);
    original.splice(smallestPosition, 1);
    ordered.push(smallest);
    return orderList(original, ordered);
  }

  return orderList(unorderedList, []);
}

function findSmallestInList(list: number[]): number {
  const smallest = list.reduce((acc: number | undefined, current: number) => {
    if (!acc) return current;
    if (current < acc) return current;
    return acc;
  });

  return smallest;
}
