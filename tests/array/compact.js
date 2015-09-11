var chai = require('chai');
var expect = chai.expect;

require('../../lib/array/compact');

describe('compact', function() {
  it('should remove all undefined, null, and empty strings from the array', function() {
    var ary = [undefined, 3, null, 1, ""];

    expect(ary.compact).to.eql([3, 1]);
  });
});
