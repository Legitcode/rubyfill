var chai = require('chai');
var expect = chai.expect;

require('../../array/select');

describe('select', function() {
  it('should return a new array for values that return true', function() {
    var ary = [1, 2, 3, 4];

    expect(ary.select(function(v) { return v === 3 })).to.eql([3]);
  });
});
