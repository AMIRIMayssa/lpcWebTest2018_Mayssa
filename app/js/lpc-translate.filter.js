'use strict';

angular.module('LpcWebTest2018')
    .filter('lpcTranslate',['LpcTranslateService','$rootScope',function(LpcTranslateService,$rootScope){
        var filter = function(key,locale){
                  var translated= LpcTranslateService.loadProperties(key,locale);
                                    return translated
                    }
        return filter;
    }]);
