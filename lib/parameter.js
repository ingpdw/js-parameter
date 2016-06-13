/*
 * shuffle - lib/parameter.js
 * Copyright(c) 2016 ingpdw <ingpdw@gmail.com>
 */

exports = module.exports = {
  getParam: function( url ) {
    var re = /[?&]([^=#]+)=([^&#]*)/g, param = {}, token;
    while( token = re.exec( url ) ) {
        param[ token[ 1 ] ] = token[ 2 ];
    }
    return param;
  },

  setParam: function( obj ) {
    var result = '';
    for ( var key in obj ) {
      if( result != '' ) result += '&';
      result += key + '=' + encodeURIComponent( obj[key] );
    }
    return result;
  },

  _setParam: function bbb( obj ) {
    //IE8 does not support Object.keys
    return Object.keys( obj ).map(function( key ) {
      return key + '=' + encodeURIComponent( obj[key] );
    }).join('&');
  }
};
