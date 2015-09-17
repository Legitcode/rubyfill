var chai = require('chai');
var expect = chai.expect;
require('../../object/map');

describe('map', function() {

  it('should loop through results', function() {
    var object = {name: 'zach', full: 'zach silveira'}
    object.map(value => {
      expect(value).to.match(/zach/)
    })
    //expect(array.map(3)).to.eql(true);
  })

});
