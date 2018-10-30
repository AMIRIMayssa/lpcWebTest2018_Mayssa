angular.module('LpcWebTest2018')
    .service('LpcTranslateService',['$http','$rootScope',function($http,$rootScope){
        var
           setPropertiesUrlImpl = function(url){
                           return $http.get(url).success(function(data){
                               $rootScope.data = data
                           })
                       },
           loadPropertiesImpl = function(key,locale){

                           return $rootScope.data[locale][key]
                       }


        return {
            setPropertiesUrl : setPropertiesUrlImpl,
            loadProperties : loadPropertiesImpl
        }
    }]);
