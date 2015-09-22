var chai = require('chai');
var expect = chai.expect;

require('../../array/sample');

describe('sample', function() {
  it('should grab random value from array and return it', function() {
    var array = [1,2,3,4,5,6,7,8,9]
    var sample = array.sample()
    array.include(sample)

    expect(array.include(sample)).to.eql(true);
    expect(typeof array.sample()).to.eql("number");
  });

  it('should grab random values from array and return an array', function() {
    var array = [1,2,3,4,5,6,7,8,9];
    var sample = array.sample()
    array.include(sample)

    expect(array.include(sample)).to.eql(true);
    expect(typeof array.sample(4)).to.eql("object");
    expect(array.sample(4).length).to.eql(4);
  });
});
