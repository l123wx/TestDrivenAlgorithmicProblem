import { wordPattern } from './index'

it('a single pattern', () => {
    expect(wordPattern('a', 'cat')).toBeTruthy()
})

it('pattern is made of two repeating a', () => {
    expect(wordPattern('aa', 'cat cat')).toBeTruthy()
    expect(wordPattern('aa', 'cat')).toBeFalsy()
})

it('pattern is made of two different letters', () => {
    expect(wordPattern('ab', 'cat dog')).toBeTruthy()
    expect(wordPattern('ab', 'cat cat')).toBeFalsy()
})

it('pattern is made of three different letters', () => {
    expect(wordPattern('abc', 'cat dog fish')).toBeTruthy()
    expect(wordPattern('abc', 'cat dog dog')).toBeFalsy()
    expect(wordPattern('abc', 'cat dog cat')).toBeFalsy()
    expect(wordPattern('aba', 'cat dog cat')).toBeTruthy()
})

it('default test', () => {
    expect(wordPattern('abba', 'dog cat cat dog')).toBeTruthy()
    expect(wordPattern('abba', 'dog cat cat fish')).toBeFalsy()
    expect(wordPattern('aaaa', 'dog cat cat dog')).toBeFalsy()
})