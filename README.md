# js-parameter

simple url parameter manipulation


## Install

```
$npm install js-parameter
```

## Usage

* getParam( url ) return queryString Object
* setParam( object ) return serializing queryString

```
var param = require( 'js-parameter' );

var result = param.getParam( 'https://a.com?a=1&b=2' );

// result example:
// {a:1, b:2}

var obj = {'a': 1, 'b': 2};
var result = param.setParam( obj );

// result example:
// a=1&b=2
```

## License
© 2016 ingpdw. MIT License
