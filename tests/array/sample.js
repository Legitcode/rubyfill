var chai = require('chai');
var expect = chai.expect;

require('../../array/sample');

describe('sample', function() {
  it('should grab random value from array and return it', function() {
    var array = [1,2,3,4,5,6,7,8,9]
    var sample = array.sample()

    expect(array.include(sample)).to.eql(true);
  });

  it('should grab 4 random values from array', function() {
    var array = [1,2,3,4,5,6,7,8,9];

    expect(array.sample(4).length).to.eql(4);
  });
});
