var chai = require('chai');
var expect = chai.expect;
require('../../string/downcase');

describe('downcase', function() {

  it('should return a lowercase string', function() {
    expect("TEST".downcase).to.eql("test");
  });

});
