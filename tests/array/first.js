var chai = require('chai');
var expect = chai.expect;

require('../../array/first');

describe('first', function() {
  it('should grab the first item from the array', function() {
    var array = ["t", "e", "s", "t"];

    expect(array.first()).to.eql(["t"]);
  });

  it('should grab the first two items from the array', function() {
    var array = ["t", "e", "s", "t"];

    expect(array.first(2)).to.eql(["t", "e"]);
  });
});
