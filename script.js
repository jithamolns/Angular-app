
var app = angular.module("todoApplication", []);


app.controller("appController", function($scope){

    $scope.heading = 'My To-Do List';
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
     
    //Adding tasks
    $scope.addTask = function(task_name){   
        if(task_name == ''){
            $scope.error = "Please enter a task";                        
        }else{                           
            $scope.taskLists.push(
                {
                    id: Math.random(),
                    todo: task_name,
                    completed: false
                }
            );       

            localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), 
             {id:Math.random(), todo: task_name, completed: false }]));
            $scope.error = "";   
            $scope.task_name = "";          
        }        
    }

    // Deleting a Task
    $scope.deleteTask = function(itemName, i){
        $scope.taskLists = Array.from(JSON.parse(localStorage.getItem("tasks")));
        $scope.taskLists.forEach(task => {
            if (task.todo === itemName) {
                $scope.taskLists.splice(i, 1);
            }
          });
        localStorage.setItem("tasks", JSON.stringify($scope.taskLists)); 
             
    }

    // Update task as completed
    $scope.taskStatus = function(itemName){        
        $scope.taskLists = Array.from(JSON.parse(localStorage.getItem("tasks")));
        $scope.taskLists.forEach(task => {
            if (task.todo === itemName) {
              task.completed = !task.completed;
            }
          });
        localStorage.setItem("tasks", JSON.stringify($scope.taskLists));         
    }

 });
 