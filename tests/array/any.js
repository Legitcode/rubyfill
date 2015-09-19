var chai = require('chai');
var expect = chai.expect;

require('../../array/any');

describe('any', function() {
  it('should return false if the array is empty', function() {
    expect([].any).to.be.false;
  });

  it('should return true if the array is not empty', function() {
    expect([1].any).to.be.true;
  });

  it('should return false if the array contains only null, undefined, or an empty string', function() {
    expect([null].any).to.be.false;
    expect([undefined].any).to.be.false;
    expect([""].any).to.be.false;
    expect([null, undefined, ""].any).to.be.false;
  });
});
