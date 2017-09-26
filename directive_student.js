var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.service('dataService', function () {
    var studentList = [
 {
   id:1,
   name: 'Dalivska Khrystyna',
   email: 'dalivskakhrystyna@gmail.com',
   img: 'http://lorempixel.com/250/300/people/dalivska'
 },
 {
   id:2,
   name: 'Marko Oleh',
   email: 'olehmarko@gmail.com',
   img: 'http://lorempixel.com/250/300/people/Marko'
 },
 {
   id:3,
   name: 'Tantsiura Andrew',
   email: 'andrii.tans@gmail.com',
   img: 'http://lorempixel.com/250/300/people/Tantsiura'
 },
 {
   id:4,
   name: 'Mandziuk Roman',
   email: 'rmandzyuk94@gmail.com',
   img: 'http://lorempixel.com/250/300/people/Mandziuk'
 },
 {
   id:5,
   name: 'Prokopiak Stepan',
   email: 'sprokopyak96@gmail.com',
   img: 'http://lorempixel.com/250/300/people/Prokopiak'
 },
 {
   id:6,
   name: 'Tserkovna Liliya',
   email: 'Lilichkatserkovna@gmail.com',
   img: 'http://lorempixel.com/250/300/people/Tserkovna'
 },
 {
   id:7,
   name: 'Zhygalov Anton',
   email: 'antonzhygalov@gmail.com',
   img: 'http://lorempixel.com/250/300/people/Zhygalov'
 },
 {
   id:8,
   name: 'Bashta Liudmyla',
   email: 'liyda4ka@gmail.com',
   img: 'http://lorempixel.com/250/300/people/Bashta'
 },
 {
   id:9,
   name: 'Sendun Stepan',
   email: 'steve.neeson21@gmail.com',
   img: 'http://lorempixel.com/250/300/people/Sendun'
 },
 {
   id:10,
   name: 'Palyush\'ok Vitaliy',
   email: 'xskeletons@gmail.com',
   img: 'http://lorempixel.com/250/300/people/Palyush'
 },
 {
   id:11,
   name: 'Gnatyshyn Ivan',
   email: 'gnatyshyn_ivan@ukr.net',
   img: 'http://lorempixel.com/250/300/people/Gnatyshyn'
 },
 {
   id:12,
   name: 'Izmailov Maksym',
   email: 'fastus1@gmail.com',
   img: 'http://lorempixel.com/250/300/people/Izmailov'
 },
 {
   id:13,
   name: 'Chapkailo Roman',
   email: 'romafromukraine@gmail.com',
   img: 'http://lorempixel.com/250/300/people/Chapkailo'
 },
 {
   id:14,
   name: 'Ruslan Pedora',
   email: 'ruslan.pedora.gr@gmail.com',
   img: 'http://lorempixel.com/250/300/people/Ruslan'
 },
 {
   id:15,
   name: 'Oksana Hodysh',
   email: 'ksiyshuk@gmail.com',
   img: 'http://lorempixel.com/250/300/people/Oksana'
 },
 {
   id:16,
   name: 'Natalia Kyrulas',
   email: 'nkyrulas@gmail.com',
   img: 'http://lorempixel.com/250/300/people/Natalia'
 },
 {
   id:17,
   name: 'Petro Yatskiv',
   email: 'yatskiv.p@gmail.com',
   img: 'http://lorempixel.com/250/300/people/Petro'
 },
 {
   id:18,
   name: 'Roksolana Mykhalenych',
   email: 'roksolana-mykhalenych@mail.ru',
   img: 'http://lorempixel.com/250/300/people/Roksolana'
 },
 {
   id:19,
   name: 'Arsen Rostomian',
   email: 'big1ne25@gmail.com',
   img: 'http://lorempixel.com/250/300/people/Arsen'
 },
 {
   id:20,
   name: 'Yuliya Bilovus',
   email: 'juli.bilovus@gmail.com',
   img: 'http://lorempixel.com/250/300/people/Yuliya'
 },
 {
   id:21,
   name: 'Liubomyr Penkov',
   email: 'lubchikpenkov@gmail.com',
   img: 'http://lorempixel.com/250/300/people/Liubomyr'
 }
];

    this.getAllStudents = function () {
        return studentList;
    };

    this.getStudentById = function (id) {
        return studentList.find(function (student) {
            return student.id === +id;
        })
    };
});

routerApp.directive('studentItem', ['dataService', function (dataService) {
    var directiveDefinitionObject = {
        priority: 0,
        template: '<div ui-sref="info({id:{{student.id}}})"><div><img ng-src="{{student.img}}"></div>' +
        '<div ng-show="!input">{{student.name}}</div>' +
        '<div ng-show="input">' +
        '<input type="text" ng-click="$event.stopPropagation()" ng-model="student.name">' +
        '</div>' +
        '<button ng-click="toggle($event)">{{text}}</button>' +
        '</div>',
        // templateUrl: 'directive.html',
        transclude: false,
        restrict: 'E',// 'A', 'C', 'M'
        scope: {id: "="},
        controller: function ($scope) {
            $scope.student = dataService.getStudentById($scope.id);
            $scope.text = 'Edit';
            $scope.input = false;
            $scope.toggle = function ($event) {
                $event.stopPropagation();

                if ($scope.input) {
                    $scope.text = "Edit";
                } else {
                    $scope.text = "Save";
                }
                $scope.input = !$scope.input;
            };
        },
        controllerAs: 'stringIdentifier',
        bindToController: false
    };

    return directiveDefinitionObject;
}]);

routerApp.directive('studentInfo', ['dataService', function (dataService) {
    var directiveDefinitionObject = {
        priority: 0,
        template: '<div><div><img ng-src="{{student.img}}"></div>' +
        '<div class="name">{{student.name}}</div>' +
        '<div><ul>' +
        '<li><span>Date of birth: </span>{{student.email}}</li>' +
        '</ul></div>' +
        '</div>',
        // templateUrl: 'directive.html',
        transclude: false,
        restrict: 'E',// 'A', 'C', 'M'
        scope: {id: "="},
        controller: function ($scope) {
            $scope.student = dataService.getStudentById($scope.id)
        },
        controllerAs: 'stringIdentifier',
        bindToController: false
    };
    return directiveDefinitionObject;
}]);


routerApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');
    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'main.html',
            controller: ['$scope', 'dataService', function ($scope, dataService) {
                $scope.studentList = dataService.getAllStudents();
            }]
        })
        .state('info', {
            url: '/info/:id',
            templateUrl: 'info.html',
            controller: function ($scope, $stateParams) {
                $scope.id = $stateParams.id;
            }
        });
});
