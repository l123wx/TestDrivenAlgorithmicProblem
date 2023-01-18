// 请看 FizzBuzz 与写代码的“一万”个细节.md

export const fizzBuzzGame = (args: number[]) => {

}

export const handleSingleDigit = (digit: number): string => {
    let result = handleMod357(digit)
    if (result === '') {
        result = String(digit)
    }
    return result
}

const handleMod357 = (digit: number): string => {
    let result = ''
    if (digit % 3 === 0) {
        result += 'Fizz'
    }
    if (digit % 5 === 0) {
        result += 'Buzz'
    }
    if (digit % 7 === 0) {
        result += 'Whizz'
    }
    return result
}