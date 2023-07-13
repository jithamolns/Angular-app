var app = angular.module("todoApplication", []);
app.controller("appController", function($scope){
    $scope.heading = 'My To Do List';
  
    $scope.taskLists = []; 
    $scope.task_name = "";

 });