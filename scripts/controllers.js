/**
 * Created by Administrator on 2017/6/26.
 */

angular.module('Controllers',[])
    .controller('NavsController',['$scope', function ($scope) {
        $scope.navs = [
            {link:'#/index',text:'今日一刻',icon:'icon-home'},
            {link:'#/older',text:'往期内容',icon:'icon-file-empty'},
            {link:'#/author',text:'热门作者',icon:'icon-pencil'},
            {link:'#/category',text:'栏目浏览',icon:'icon-menu'},
            {link:'#/favourite',text:'我的喜欢',icon:'icon-heart'},
            {link:'#/settings',text:'设置',icon:'icon-cog'}
        ];
    }])
    .controller('TodayController',['$scope','$http', '$filter','$rootScope',function ($scope,$http,$filter,$rootScope) {
        $rootScope.title = '今日一刻';
        var today = $filter('date')(new Date, 'yyyy-MM-dd');
        $http({
             url:'api/today.php',
             method:'get',
             params:{today:today}
         }).success(function (info) {
            $scope.date =  info.date;
            $scope.posts = info.posts;
         })
    }])
    .controller('OlderController',['$scope','$http','$rootScope',function ($scope,$http,$rootScope) {
        $rootScope.title = '往期内容';
        //为什么这里使用$rootScope来控制title,因为这不是赋值而是修改
        $http({
            url:'api/older.php'
        }).success(function (info) {
            $scope.date = info.date;
            $scope.posts = info.posts;
        })
    } ])




