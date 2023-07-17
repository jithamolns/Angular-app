
var app = angular.module("todoApplication", []);


app.controller("appController", function($scope){

    $scope.heading = 'My To Do List';
    $scope.error = "";  
    $scope.taskLists = []; 
    $scope.task_name = "";
    $scope.username = ""
    $scope.str = "";

    
    $scope.showTasks = function(){
        if (sessionStorage.getItem("tasks") == null) return;
        $scope.taskLists = Array.from(JSON.parse(sessionStorage.getItem("tasks")));
    }
    
    $scope.showTasks();

    $scope.removeSession = function(){
        sessionStorage.removeItem('key');        
    }

    // $scope.clearAll = function(){
    //     sessionStorage.clear();
    // }
    
    // $scope.getSession = function(user, tasks){
    //     return sessionStorage.getItem(user, tasks);
    // }
    
 
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
            sessionStorage.setItem("tasks", JSON.stringify([...JSON.parse(sessionStorage.getItem("tasks") || "[]"), { taskName: task_name, completed: false }]));
            $scope.error = "";   
            $scope.task_name = "";          
        }        
    }

    // Delete Task
    $scope.deleteTask = function(i){
        $scope.taskLists.splice(i, 1);
    }

    // Change status
    $scope.taskStatus = function(itemName, index){

        // $scope.taskLists[index].completed = true;  
        
        $scope.taskLists = Array.from(JSON.parse(sessionStorage.getItem("tasks")));
        $scope.taskLists.forEach(task => {
            if (task.taskName === itemName) {
              task.completed = !task.completed;
            }
          });
        sessionStorage.setItem("tasks", JSON.stringify($scope.taskLists));
         
    }

 });