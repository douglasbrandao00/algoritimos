import quickSort from "../quick-sort";

describe("Quick Sort", () => {
  test("Should return same array if has only one element", () => {
    const unorderedList = [1];
    const expectedOrderedList = [1];

    const orderedList = quickSort(unorderedList);

    expect(orderedList).toEqual(expectedOrderedList);
  });
  test("Should get smallest element at the first position", () => {
    const unorderedList = [23, 123, 41, 34, 13, 4, 1, 3, 5];
    const expectedOrderedList = [1, 3, 4, 5, 13, 23, 34, 41, 123];

    const orderedList = quickSort(unorderedList);
    expect(orderedList).toEqual(expectedOrderedList);
  });
});
