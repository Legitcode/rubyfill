var chai = require('chai');
var expect = chai.expect;

require('../../array/equals');

describe('equals', function() {
  context('when the arrays are not equal', function() {
    it('returns false', function() {
      var ary = [1, 2, 3];

      expect(ary.equals([1, 2])).to.be.false;
      expect(ary.equals([1, 2, 4])).to.be.false;
    });
  });

  context('when the arrays are equal', function() {
    it('returns true', function() {
      var ary = [1, 2, 3];

      expect(ary.equals([1, 2, 3])).to.be.true;
    });
  });

  context('when the arrays are nested', function() {
    context('and they are all equal', function() {
      it('returns true', function() {
        var ary = [[1, 2], [3, 4]];

        expect(ary.equals([[1, 2], [3, 4]])).to.be.true;
      });
    });

    context('and they are not all equal', function() {
      it('returns false', function() {
        var ary = [[1, 2], [3, 4]];

        expect(ary.equals([[1, 2], [3, 5]])).to.be.false;
      });
    });
  });
});
