# angular-filemodel

This module makes Angular's `ng-model` work well with HTML file inputs.
At the moment, it is the only directive that supports multiple file selections.



## Install

```
npm install --save angular-filemodel
```



## Usage

1. Add it as a module dependency:
    ```javascript
    var app = angular.module("myModuleName", ["ngFilemodel"]);
    ```

2. Put the attribute on file inputs you want to bind to scope models:
    ```html
    <input type="file" ng-filemodel ng-model="myFileList" />
    ```

3. Enjoy!
    ```javascript
    // do something on change
    $scope.$watchCollection("myFileList", function (files) {
        if (files && files.length) {
            // files were selected. see files[0], files[1], ... and files.length
        } else {
            // no files were selected
        }
    });

    // also, at any point, the FileList is available directly on the scope
    console.log($scope.myFileList); // -> FileList [ File ]
    ```
