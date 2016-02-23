var assert = require('assert');
var expect = require('chai').expect;

    config = require('./../lib/config');



var units = {
        type: 'si',
        tmp: '˚F',
        speed: 'mph'
    };

var ip = '8.8.8.8'; //added by me


var Config = new config(units, ip);
Config.sudo();

describe('Config', function () {

    it('has 3 props',function(){
assert.equal(3,Object.keys(Config.units).length)
    });

    it('after construction, 2 props are populated',function(){
expect(Config.units.tmp).to.exist;
expect(Config.units.speed).to.exist;
expect(Config.units.type).to.exist;
    });
   
    it('has correct key types',function(){
expect(Config.units.tmp).be.a('string');
expect(Config.units.type).be.a('string');
expect(Config.units.speed).be.a('string');

    });
});
