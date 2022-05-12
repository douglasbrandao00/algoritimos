import binarySearch from "..";

describe('Binary Search', () => {
    test('Should find item in list when it is in middle', () => {
        const list = [0,1,2,3,4,5,6,7,8]
        const desiredItem = 4
        
        const found = binarySearch(list, desiredItem)

        expect(desiredItem).toBe(found)
    })
    test('Should find item in list when it is at the begin', () => {
        const list = [0,1,2,3,4,5,6,7,8]
        const desiredItem = 0
        
        const found = binarySearch(list, desiredItem)

        expect(desiredItem).toBe(found)
    })
    test('Should find item in list when it is at the end', () => {
        const list = [0,1,2,3,4,5,6,7,8]
        const desiredItem = 8
        
        const found = binarySearch(list, desiredItem)
        
        expect(desiredItem).toBe(found)
    })
})