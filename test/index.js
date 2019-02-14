// 断言库 chai.js
var expect = require('chai').expect;
var deepCopy = require('../src/index');

// 测试脚本里面应该包括一个或多个describe块，称为测试套件（test suite）
describe('数组深拷贝', function () {
  // 每个describe块应该包括一个或多个it块，称为测试用例（test case）
  it('一维数组', () => {
    // 断言
    let a = [1, 2, 3];
    let b = deepCopy(a);
    b[0] = 4;
    expect(b[0]).to.equal(4);
    expect(a[0]).to.equal(1);
  });
  it('数组子项为对象', () => {
    // 断言
    let a = [{name: 'lina'}, {name: 'luxi'}, {name: 'nigulas'}];
    let b = deepCopy(a);
    b[0].name = 'saliya';
    expect(b[0].name).to.equal('saliya');
    expect(a[0].name).to.equal('lina');
  });
});

describe('对象深拷贝', function () {
  it('基本对象', () => {
    // 断言
    let a = {
      name: 'zhangsan',
      age: 18
    };
    let b = deepCopy(a);
    b.name = 'lisi';
    b.age = 24;
    expect(a.name).to.equal('zhangsan');
    expect(a.age).to.equal(18);
    expect(b.name).to.equal('lisi');
    expect(b.age).to.equal(24);
  });
  it('对象嵌套', () => {
    // 断言
    let obj1 = { a: 0 , b: { c: 0}};
    let obj2 = deepCopy(obj1);
    obj1.a = 1;
    obj2.a = 2;
    obj2.b.c = 3;
    expect(obj1.a).to.equal(1);
    expect(obj1.b.c).to.equal(0);
    expect(obj2.a).to.equal(2);
    expect(obj2.b.c).to.equal(3);
  });
});

describe('String深拷贝', function () {
  it('String深拷贝前后内容一致', () => {
    let a = 'abc';
    let b = deepCopy(a);
    expect(b).to.equal('abc');
  });
});

describe('Number深拷贝', function () {
  it('Number深拷贝前后内容一致', () => {
    let a = 1024;
    let b = deepCopy(a);
    expect(b).to.equal(1024);
  });
});

describe('Boolean深拷贝', function () {
  it('Boolean深拷贝前后内容一致', () => {
    let a = true;
    let b = deepCopy(a);
    expect(b.toString()).to.equal('true');
  });
});

describe('Date深拷贝', function () {
  let a = new Date();
  let b = deepCopy(a);
  it('Date深拷贝前后内容一致', () => {
    expect(a.toString() === b.toString()).to.equal(true);
  });
  it('Date深拷贝内存不一致', () => {
    expect(a === b).to.equal(false);
  });
});
