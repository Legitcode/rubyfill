var chai = require('chai');
var expect = chai.expect;
require('../../string/count');

describe('count', function() {

  it('should return length of string', function() {
    expect("test".count).to.eql(4);
  });

});
