import { missingNumber } from './index'

it('length is equal to one', () => {
    expect(missingNumber([0])).toBe(1)
    expect(missingNumber([1])).toBe(0)
})

it('length is equal to two', () => {
    expect(missingNumber([0, 1])).toBe(2)
    expect(missingNumber([1, 2])).toBe(0)
    expect(missingNumber([0, 2])).toBe(1)
})

it('length is equal to two', () => {
    expect(missingNumber([1, 2, 3])).toBe(0)
    expect(missingNumber([0, 1, 2])).toBe(3)
})