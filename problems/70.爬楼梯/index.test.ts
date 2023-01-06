import { climbStairs } from './index'

it('should return 0 when input 0', () => {
    expect(climbStairs(0)).toBe(0)
})

it('should return 1 when input 1', () => {
    expect(climbStairs(1)).toBe(1)
})