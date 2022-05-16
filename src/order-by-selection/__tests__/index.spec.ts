import orderBySelection from "..";

// search for the smallest

describe("Order by Selection", () => {
  test("Should get smallest element at the first position", () => {
    const unorderedList = [23, 123, 41, 34, 13, 4, 1, 3, 5];

    const orderedList = orderBySelection(unorderedList);

    expect(orderedList[0]).toBe(1);
  });
  test("Should get smallest element at the first position", () => {
    const unorderedList = [23, 123, 41, 34, 13, 4, 1, 3, 5];
    const expectedOrderedList = [1, 3, 4, 5, 13, 23, 34, 41, 123];
    
    const orderedList = orderBySelection(unorderedList);

    expect(orderedList).toEqual(expectedOrderedList);
  });
});
