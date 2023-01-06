/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 *
 * https://leetcode.cn/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (54.02%)
 * Likes:    2799
 * Dislikes: 0
 * Total Accepted:    1M
 * Total Submissions: 1.9M
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 2
 * 输出：2
 * 解释：有两种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶
 * 2. 2 阶
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 3
 * 输出：3
 * 解释：有三种方法可以爬到楼顶。
 * 1. 1 阶 + 1 阶 + 1 阶
 * 2. 1 阶 + 2 阶
 * 3. 2 阶 + 1 阶
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 45
 * 
 * 
 */

// @lc code=start
export function climbStairs(n: number): number {
    // 通过观察测试用例，发现是指数函数的形式，然后用前面的几个坐标点把这个函数表达式拟合出来了
    // 结果发现后面有个用例通过不了
    // if (n > 3) {
    //     return Math.round(0.7207 * Math.E ** (0.4817 * n))
    // }
    // return n
    if (n === 0) return 0
    const sqrt_5 = Math.sqrt(5)
    const fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2, n + 1)
    return Math.round(fib_n / sqrt_5)
}
// @lc code=end

