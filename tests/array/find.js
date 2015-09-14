var chai = require('chai');
var expect = chai.expect;

describe('find', function() {
  it('should return a new array for values that return true', function() {
    require('../../lib/array/find');

    var ary = [1, 2, 3, 4];

    expect(ary.find(3)).to.eql(3);
  });
});
