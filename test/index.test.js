var param = require( '..' ),
    assert = require( 'assert' );

describe('js-parameter', function() {
  it('should have getParam method', function() {
    assert( param.getParam !== undefined );
  });

  it('should have setParam method', function() {
    assert( param.setParam !== undefined  );
  });

  it('getParam() should work', function() {
    var url = 'http://a.com?a=1&b=2';
    assert.equal( param.getParam( url ).a, '1' );
    assert.equal( param.getParam( url ).b, '2' );
    assert.equal( param.getParam( url ).c, undefined );
  });

  it('setParam() should work', function() {
    assert.equal( param.setParam({'a':1, 'b':2 }), 'a=1&b=2' );
  });
});
