import { climbStairs } from './index'

it('should return 0 when input 0', () => {
    expect(climbStairs(0)).toBe(0)
})

it('should return 1 when input 1', () => {
    expect(climbStairs(1)).toBe(1)
})

it('should return 2 when input 2', () => {
    expect(climbStairs(2)).toBe(2)
})

it('should return 3 when input 3', () => {
    expect(climbStairs(3)).toBe(3)
})

it('should return 5 when input 4', () => {
    expect(climbStairs(4)).toBe(5)
})

it('should return 8 when input 5', () => {
    expect(climbStairs(5)).toBe(8)
})

it('should return 13 when input 6', () => {
    expect(climbStairs(6)).toBe(13)
})

it('should return 21 when input 7', () => {
    expect(climbStairs(7)).toBe(21)
})

it('should return 34 when input 8', () => {
    expect(climbStairs(8)).toBe(34)
})

it('should return 55 when input 9', () => {
    expect(climbStairs(9)).toBe(55)
})

it('should return 14930352 when input 35', () => {
    expect(climbStairs(35)).toBe(14930352)
})