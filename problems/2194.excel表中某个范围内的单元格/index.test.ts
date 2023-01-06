import { cellsInRange } from './index'

it('should return Array', () => {
    expect(cellsInRange('') instanceof Array).toBeTruthy()
    expect(cellsInRange('')).toEqual([])
})

it('should return a single string when col1 equal to col2 and row1 equal to row2', () => {
    expect(cellsInRange('A1:A1')).toEqual(['A1'])
})

it('should return the sheet between col1 to col2', () => {
    expect(cellsInRange('A1:A2')).toEqual(['A1', 'A2'])
    expect(cellsInRange('A1:A3')).toEqual(['A1', 'A2', 'A3'])
    expect(cellsInRange('B2:B4')).toEqual(['B2', 'B3', 'B4'])
})

it('should return the sheet between row1 to row2', () => {
    expect(cellsInRange('A1:B1')).toEqual(['A1', 'B1'])
    expect(cellsInRange('A1:C1')).toEqual(['A1', 'B1', 'C1'])
    expect(cellsInRange('B2:D2')).toEqual(['B2', 'C2', 'D2'])
})

it('should return the sheet between col1:row1 and col2:row2', () => {
    expect(cellsInRange('A1:B2')).toEqual(['A1', 'A2', 'B1', 'B2'])
    expect(cellsInRange('A1:C2')).toEqual(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'])
})