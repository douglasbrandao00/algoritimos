import farmBatch, { Farm } from "../farm-batch";

describe("Farm Batch", () => {
  test("Should return correct batch if farm has perfect proportion", () => {
    const farm: Farm = {
      w: 50,
      h: 50,
    };

    const batchedFarm = farmBatch(farm);

    expect(batchedFarm.h).toEqual(batchedFarm.w);
  });
  test("Should return a correct batch when sides are proportional and farm WIDTH is the smallest side", () => {
    const farm: Farm = {
      w: 50,
      h: 150,
    };

    const batchedFarm = farmBatch(farm);

    expect(batchedFarm.h).toEqual(batchedFarm.w);
    expect(batchedFarm.h).toEqual(farm.w);
  });
  test("Should return a correct batch when sides are proportional and farm HEIGHT is the smallest side", () => {
    const farm: Farm = {
      w: 150,
      h: 50,
    };

    const batchedFarm = farmBatch(farm);

    expect(batchedFarm.h).toEqual(batchedFarm.w);
    expect(batchedFarm.w).toEqual(farm.h);
  });
  test("Should return a correct batch when sides are NOT proportional and farm WIDTH is the smallest side", () => {
    const expectedBatch = {
      w: 80,
      h: 80,
    };
    const farm: Farm = {
      w: 1680,
      h: 640,
    };

    const batchedFarm = farmBatch(farm);

    expect(batchedFarm.h).toEqual(batchedFarm.w);
    expect(batchedFarm).toEqual(expectedBatch);
  });
});
