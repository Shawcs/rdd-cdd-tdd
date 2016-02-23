var assert = require('assert'),
    config = require('./../lib/config');



var units = {
        type: 'si',
        tmp: '˚F',
        speed: 'mph'
    };

var ip = '46.218.45.195'; //added by me


var Config = new config(units, ip);
Config.sudo();

describe('Config', function () {
    it('has 3 props')

    it('after construction, 2 props are populated')

    it('has correct key types')
});
