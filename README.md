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



## License

MIT License

Copyright (c) 2016 JangoBrick

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
