(function () {

    var app = angular.module("app", []);

    app.controller("ctrlExample1", function ($scope) {
        $scope.isVisible = false;
    });
    
    app.controller("ctrlExample2", function($scope){
       $scope.obj = {isVisible: false}; 
    });
    
    app.controller("ctrlExample3", function(){
       var self= this;
       self.isVisible = false;
       return self; //implict all functions return this 
    });
    
    
    

})();