var app = angular.module("app", []);

app.controller("ctrl", function ($scope) {

    $scope.data = {
        name: "root",
        items: [
            {
                name: 'folder 1',
                items: [
                    {
                        name: 'folder 1_1',
                        items: []
                    }
                ]
            },
            {
                name: 'folder 2',
                items: []
            }
        ]
    };
    
    //data finish



});


app.directive("folderTree", function ($compile, $templateCache) {
    return {
        restrict: 'E',
        templateUrl: 'recursion.html',
        scope: {
            val: '=val'
        },
        link: function (scope, elements, args) {
            if (scope.val) {
                    var template = $templateCache.get("recursion.html");
                    var linkfn = $compile(template);
                    var content = linkfn(scope.val[0]);
            }
        }
    }
})