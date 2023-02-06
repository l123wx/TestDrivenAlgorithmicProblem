// 请看 FizzBuzz 与写代码的“一万”个细节.md

export const fizzBuzzGame = (args: number[]) => {
    args.forEach(val => {
        const result = handleSingleDigit(val)
        console.log(result)
    })
}

export const handleSingleDigit = (digit: number): string => {
    let result = handleMod357(digit)
    if (result === '') {
        result = String(digit)
    }
    return result
}

const handleMod357 = (digit: number): string => {
    const digitString = String(digit)
    const isInclude3 = digitString.includes('3')
    const isInclude5 = digitString.includes('5')
    const isInclude7 = digitString.includes('7')

    if (isInclude3 && !isInclude5) {
        return 'Fizz'
    }

    let result = ''
    if (digit % 3 === 0 && (!isInclude5 || isInclude7)) {
        result += 'Fizz'
    }
    if (digit % 5 === 0 && !isInclude7) {
        result += 'Buzz'
    }
    if (digit % 7 === 0) {
        result += 'Whizz'
    }
    return result
}