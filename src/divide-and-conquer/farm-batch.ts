export type Farm = {
  w: number;
  h: number;
};

function orderBySize(a: number, b: number) {
  let biggest = 0;
  let smallest = 0;
  if (a > b) {
    biggest = a;
    smallest = b;
  } else {
    biggest = b;
    smallest = a;
  }
  return [biggest, smallest];
}

export default function farmBatch(farm: Farm): Farm {
  const isSidesEven = farm.w === farm.h;
  if (isSidesEven) return farm;
  const [biggest, smallest] = orderBySize(farm.w, farm.h);
  const restOfDivision = biggest % smallest;
  const hasProportionalSides = restOfDivision === 0;
  if (hasProportionalSides) {
    return {
      w: smallest,
      h: smallest,
    };
  }
  if (farm.h > farm.w) {
    return farmBatch({
      w: farm.w,
      h: restOfDivision,
    });
  }
  if (farm.w > farm.h) {
    return farmBatch({
      w: restOfDivision,
      h: farm.h,
    });
  }
  return {
    w: 1,
    h: 1,
  };
}
