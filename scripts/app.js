/**
 * Created by Administrator on 2017/6/26.
 */

var Yike = angular.module('Yike',['ngRoute','Controllers']);

Yike.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/today',{
        templateUrl:'views/today.html',
        controller:'TodayController'
    }).when('/older',{
        templateUrl:'views/older.html',
        controller:'OlderController'
    }).otherwise({
        redirectTo:'/today'
    })
}])

Yike.run(['$rootScope', function ($rootScope) {
    $rootScope.collapsed = false;
    $rootScope.toggle = function () {
        var navs = document.querySelectorAll('.navs dd');
        $rootScope.collapsed = !$rootScope.collapsed;
        if($rootScope.collapsed){
            for(var i=0;i<navs.length;i++){
                navs[i].style.transform = 'translate(0)';
                navs[i].style.transitionDelay = '0.2s';
                navs[i].style.transitionDuration = (i+1)*0.15+'s';
            }
        }else{
            var len = navs.length;
            for(var j=0;j<len;j++){
                navs[j].style.transform = 'translate(-100%)';
                navs[j].style.transitionDelay = '';
                navs[j].style.transitionDuration = (len-j)*0.15+'s';
            }
        }
    }
}])





