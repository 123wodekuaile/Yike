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
    .controller('TodayController',['$scope','$http', function ($scope,$http) {

         $http({
             url:'api/today.php',
             method:'get',
         }).success(function (info) {
             console.log(info);
         })
    }])




