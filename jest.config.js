/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    // 使用 ts-jest 转换 ts 代码。 ts 文件路径匹配 '^.+\\.tsx?$' 的，才会被转换
    '^.+\\.tsx?$': ['ts-jest'],
  },
  moduleFileExtensions: [
    'ts',
    'js'
  ]
}