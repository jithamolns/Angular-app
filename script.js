
var app = angular.module("todoApplication", []);


app.controller("appController", function($scope){

    
    // $scope.save = function(){
        // sessionStorage.setItem('name', 'task');
    // }

   

    $scope.removeSession = function(){
        sessionStorage.removeItem('key');
    }

    $scope.clearAll = function(){
        sessionStorage.clear();
    }
    
    // $scope.getSession = function(user, tasks){
    //     return sessionStorage.getItem(user, tasks);
    // }
    

    $scope.heading = 'My To Do List';
    $scope.error = "";  
    $scope.taskLists = []; 
    $scope.task_name = "";
    $scope.username = ""
    $scope.str = "";
 
    //Add task function
    $scope.addTask = function(task_name, username){   

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

            sessionStorage.setItem(username, $scope.jsonObj);
            $scope.error = "";   
            $scope.task_name = "";   
            $scope.str = sessionStorage.getItem(username);
            $scope.taskObj = JSON.parse($scope.str);            
        }        
    }
    // Delete Task
    $scope.deleteTask = function(i){
        $scope.taskLists.splice(i, 1);
    }



    // Change status
    $scope.taskStatus = function(i){
        $scope.taskLists[i].completed = true;
    }

 });