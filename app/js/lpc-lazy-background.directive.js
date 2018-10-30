'use strict';

angular.module('LpcWebTest2018')
    .directive('lpcLazyBackground', [function () {
  var lpcLazyBackgroundLink = function (scope, elem, attr) {
    var img = new Image();
            var url = scope.lpcLazyBackground
            img.onload = function(){
            elem.css({
                    'background-image': 'url(' + img.src +')',
                    'background-repeat': 'no-repeat',
                    'background-size': '100% 100%',
                    'display':'inline-block',
                    'width': '100%',
                    'height': '100%'

                  })
            }
            img.src = url
  }
  return {
    restrict: 'A', scope: {lpcLazyBackground: '='}, link: lpcLazyBackgroundLink
  }

}]);
