var chai = require('chai');
var expect = chai.expect;

require('../../object/blank');

describe('blank', function() {

  it('should return true if object is empty', function() {
    var obj = {};

    expect(obj.blank).to.eql(true);
  });

  it('should return false if object has items', function() {
    var obj = {name: "quintin"};

    expect(obj.blank).to.eql(false);
  });

});
