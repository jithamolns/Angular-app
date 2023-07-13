var app = angular.module("todoApplication", []);
app.controller("appController", function($scope){
    $scope.heading = 'My To Do List';
  
    $scope.taskLists = []; 
    $scope.task_name = "";

    //Add task function
    $scope.addTask = function(task_name){                              
        $scope.taskLists.push(
            {
                taskName: task_name,
                completed: false
            }
        );       
        $scope.task_name = "";       
        
    }

 });