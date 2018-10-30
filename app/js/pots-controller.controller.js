'use strict';

angular.module('LpcWebTest2018')
    .controller('PotsController',['$scope','PotsService',function($scope,PotsService){
        if($scope.locale==null){

                    if(sessionStorage.getItem('locale')==null){
                        $scope.locale= "fr"
                        console.log($scope.locale)
                    }else{
                        $scope.locale= sessionStorage.getItem('locale')
                        console.log($scope.locale)
                    }

                }

                $scope.changeLocale = function(lang){
                                $scope.locale = lang
                                sessionStorage.setItem("locale", lang);
                            }
                PotsService.get().success(function(data){
                    $scope.pots = data;
                })
    }]);
