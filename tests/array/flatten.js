var chai = require('chai');
var expect = chai.expect;

require('../../array/flatten');

describe('flatten', function() {
  it('should flatten out an array of arrays', function() {
    var ary = [[1, 2], 3, [4, 5, 6]];

    expect(ary.flatten).to.eql([1, 2, 3, 4, 5, 6]);
  });

  it('should recursively flatten an array', function() {
    var ary = [[1, [2, 3]], 4, [5, 6]];

    expect(ary.flatten).to.eql([1, 2, 3, 4, 5, 6]);
  });

  it('should traverse very deeply nested arrays', function() {
    var ary = [1, [2, [3, [4, 5, [6, 7, 8]]]]];

    expect(ary.flatten).to.eql([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
