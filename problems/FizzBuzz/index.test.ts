import { handleSingleDigit } from './index'

it('should return origin digit given input is not match any rule', () => {
    expect(handleSingleDigit(1)).toBe('1')
    expect(handleSingleDigit(2)).toBe('2')
})