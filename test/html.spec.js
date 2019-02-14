var expect = chai.expect;

describe('dom 节点深拷贝', function() {
  var div1 = document.createElement("div");
  var content = document.createTextNode("Hi there and greetings!");
  div1.appendChild(content);
  var div2 = deepCopy(div1);
  it('深拷贝后内容一致', function() {
    expect(div2.outerHTML).to.be.equal(div1.outerHTML);
  });
  it('深拷贝后 div1 === div2 为false', function() {
    expect(div1 === div2).to.be.equal(false);
  });
});
