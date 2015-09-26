var chai = require('chai');
var expect = chai.expect;

require('../../array/find');

describe('find', function() {
  it('should return the first item found in the array', function() {
    var ary = [1, 2, 3, 2];

    expect(ary.find(function(v) { return v === 2 })).to.equal(2);
  });

  it('should return undefined if the value is not found', function() {
    var ary = [1, 2, 3, 4];

    expect(ary.find(function(v) { return v === 9 })).to.be.undefined;
  });
});
