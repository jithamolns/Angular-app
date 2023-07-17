
var app = angular.module("todoApplication", []);


app.controller("appController", function($scope){

    $scope.heading = 'My To Do List';
    $scope.error = "";  
    $scope.taskLists = []; 
    $scope.task_name = "";
    $scope.username = ""
    $scope.str = "";

    
    $scope.showTasks = function(){
        if (localStorage.getItem("tasks") == null) return;
        $scope.taskLists = Array.from(JSON.parse(localStorage.getItem("tasks")));
    }
    
    $scope.showTasks();

    $scope.removeSession = function(){
        localStorage.removeItem('key');        
    }

    $scope.clearAll = function(){
        localStorage.clear();
    }
     
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

            $scope.jsonObj = JSON.stringify($scope.taskLists);
            localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { taskName: task_name, completed: false }]));
            $scope.error = "";   
            $scope.task_name = "";          
        }        
    }

    // Deleting a Task
    $scope.deleteTask = function(itemName, i){
        $scope.taskLists = Array.from(JSON.parse(localStorage.getItem("tasks")));
        $scope.taskLists.forEach(task => {
            if (task.taskName === itemName) {
                $scope.taskLists.splice(i, 1);
            }
          });
        localStorage.setItem("tasks", JSON.stringify($scope.taskLists)); 
             
    }

    // Change status
    $scope.taskStatus = function(itemName){        
        $scope.taskLists = Array.from(JSON.parse(localStorage.getItem("tasks")));
        $scope.taskLists.forEach(task => {
            if (task.taskName === itemName) {
              task.completed = !task.completed;
            }
          });
        localStorage.setItem("tasks", JSON.stringify($scope.taskLists));         
    }

 });