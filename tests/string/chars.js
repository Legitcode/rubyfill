var chai = require('chai');
var expect = chai.expect;
require('../../string/chars');

describe('chars', function() {

  it('should return array of characters', function() {
    expect("test".chars).to.eql(['t','e','s','t']);
  });

});
