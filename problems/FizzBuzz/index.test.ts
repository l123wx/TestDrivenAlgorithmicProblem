import { handleSingleDigit } from './index'

it('should return origin digit given input is not match any rule', () => {
    expect(handleSingleDigit(1)).toBe('1')
    expect(handleSingleDigit(2)).toBe('2')
})

it('should return Fizz given input can be divided by 3', () => {
    expect(handleSingleDigit(3)).toBe('Fizz')
    expect(handleSingleDigit(6)).toBe('Fizz')
})

it('should return Buzz given input can be divided by 5', () => {
    expect(handleSingleDigit(5)).toBe('Buzz')
    expect(handleSingleDigit(10)).toBe('Buzz')
})

it('should return FizzBuzz given input can be divided by 3 and 5', () => {
    expect(handleSingleDigit(15)).toBe('FizzBuzz')
    expect(handleSingleDigit(30)).toBe('FizzBuzz')
})