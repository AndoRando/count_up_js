var countUp = require('./countUp');
var expect = require('chai').expect;

describe('countUp', function() {
  it('returns string of number up to target divisible by operator', function() {
    expect(countUp(5, 30)).to.eq( "5, 10, 15, 20, 25, 30" );
  });
  it('returns string of number up to target divisible by operator', function() {
    expect(countUp(7, 50)).to.eq( "7, 14, 21, 28, 35, 42, 49" );
  });
});
