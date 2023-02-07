import { deleteDuplicates, ListNode } from './index'

it('should return itself given input one node ListNode', () => {
    const listNode = new ListNode(1, null)
    expect(deleteDuplicates(listNode)).toEqual(listNode)
})

it('should return one of two same node ListNode', () => {
    const listNode = new ListNode(1, new ListNode(1, null))
    expect(deleteDuplicates(listNode)).toEqual(new ListNode(1, null))
})

it('should return [1, 2] given input [1, 1, 2]', () => {
    const listNode = new ListNode(1, new ListNode(1, new ListNode(2, null)))
    expect(deleteDuplicates(listNode)).toEqual(new ListNode(1, new ListNode(2, null)))
})

it('should return [1, 2] given input [1, 2, 2]', () => {
    const listNode = new ListNode(1, new ListNode(2, new ListNode(2, null)))
    expect(deleteDuplicates(listNode)).toEqual(new ListNode(1, new ListNode(2, null)))
})

it('should return [1, 2] given input [1, 1, 2, 2]', () => {
    const listNode = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(2, null))))
    expect(deleteDuplicates(listNode)).toEqual(new ListNode(1, new ListNode(2, null)))
})

it('should return [1, 2, 3] given input [1, 2, 2, 3]', () => {
    const listNode = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(3, null))))
    expect(deleteDuplicates(listNode)).toEqual(new ListNode(1, new ListNode(2, new ListNode(3, null))))
})