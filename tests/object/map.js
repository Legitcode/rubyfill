var chai = require('chai');
var expect = chai.expect;
require('../../object/map');

describe('map', function() {

  it('should loop through results', function() {
    var object = {name: 'zach', full: 'zach silveira'}
    var result = object.map(value => {
      return value + ' baller'
    })
    expect(result[0]).to.eql('zach baller');
  })

  it('should not modify the object', function() {
    var object = {name: 'zach', full: 'zach silveira'}
    var result = object.map(value => {
      return value + ' baller'
    })
    expect(object).to.eql({name: 'zach', full: 'zach silveira'});
  })

});
