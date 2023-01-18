// 请看 FizzBuzz 与写代码的“一万”个细节.md

export const fizzBuzzGame = (args: number[]) => {

}

export const handleSingleDigit = (digit: number): string => {
    if (digit % 3 === 0 && digit % 5 === 0) {
        return 'FizzBuzz'
    }
    if (digit % 3 === 0) {
        return 'Fizz'
    }
    if (digit % 5 === 0) {
        return 'Buzz'
    }
    return String(digit)
}