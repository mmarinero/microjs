require.config({
    paths: {
        'QUnit': 'http://code.jquery.com/qunit/qunit-1.15.0',
		'jquery': 'https://code.jquery.com/jquery-2.1.1'
    },
    shim: {
       'QUnit': {
           exports: 'QUnit',
           init: function() {
               QUnit.config.autoload = false;
               QUnit.config.autostart = false;
           }
       } 
    }
});

define(['jquery', 'QUnit'], function(jQuery, QUnit){

$(function(){
    QUnit.load();
    QUnit.start();
});
});
