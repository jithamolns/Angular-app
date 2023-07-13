
var app = angular.module("todoApplication", []);

app.controller("appController", function($scope){
    $scope.heading = 'My To Do List';
    $scope.error = "";  
    $scope.taskLists = []; 
    $scope.task_name = "";

    //Add task function
    $scope.addTask = function(task_name){   
        if(task_name == ''){
            $scope.error = "Please enter a task";                        
        }else{                           
            $scope.taskLists.push(
                {
                    taskName: task_name,
                    completed: false
                }
            );       
            $scope.error = "";   
            $scope.task_name = "";       
        }        
    }
    $scope.deleteTask = function(i){
        $scope.taskLists.splice(i, 1);
    }

 });