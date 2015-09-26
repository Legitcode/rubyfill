var chai = require('chai');
var expect = chai.expect;
require('../../string/upcase');

describe('upcase', function() {

  it('should return a capitalized string', function() {
    expect("test".upcase).to.eql("TEST");
  });

});
