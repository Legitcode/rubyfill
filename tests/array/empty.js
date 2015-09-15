var chai = require('chai');
var expect = chai.expect;

require('../../array/empty');

describe('empty', function() {
  it('should return false if the array is not empty', function() {
    expect([1].empty).to.be.false;
  });

  it('should return true if the array is empty', function() {
    expect([].empty).to.be.true;
  });

  it('should return true if the array contains only null, undefined, or an empty string', function() {
    expect([null].empty).to.be.true;
    expect([undefined].empty).to.be.true;
    expect([""].empty).to.be.true;
    expect(["", null, undefined].empty).to.be.true;
  });
});
