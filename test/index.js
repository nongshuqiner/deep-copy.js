// import { expect } from 'chai' // 断言库 chai.js
// import deepCopy from '../src/deep-copy.js'
var expect = require('chai').expect
var deepCopy = require('../src/index');

// 测试脚本里面应该包括一个或多个describe块，称为测试套件（test suite）
describe('数组深拷贝', function () {
  // 每个describe块应该包括一个或多个it块，称为测试用例（test case）
  it('一维数组', () => {
    // 断言
    let a = [1, 2, 3]
    let b = deepCopy(a)
    b[0] = 4
    expect(b[0]).to.equal(4)
    expect(a[0]).to.equal(1)
  })
  it('数组子项为对象', () => {
    // 断言
    let a = [{name: 'lina'}, {name: 'luxi'}, {name: 'nigulas'}]
    let b = deepCopy(a)
    b[0].name = 'saliya'
    expect(b[0].name).to.equal('saliya')
    expect(a[0].name).to.equal('lina')
  })
})
