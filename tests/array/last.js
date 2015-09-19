var chai = require('chai');
var expect = chai.expect;

require('../../array/last');

describe('last', function() {
  it('should grab the last item from the array', function() {
    var ary = ['t', 'e', 's', 't', 'tests'];

    expect(ary.last()).to.eql(["tests"]);
  });

  it('should grab the last two items from the array', function() {
    var array = ['t', 'e', 's', 't', 'tests'];

    expect(array.last(2)).to.eql(["t", "tests"]);
  });
});
