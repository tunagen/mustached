/**
 * Created by jean on 5/19/15.
 */

'use strict';

/* @ngInject */
angular.module('mustache').controller('explorerCtrl', function ($scope) {
    $scope.file = {
        selected: {}
    };

    $scope.treeOptions = {
        nodeChildren: "children",
        dirSelectable: false,
        injectClasses: {
            ul: "a1",
            li: "a2",
            liSelected: "a7",
            iExpanded: "a3",
            iCollapsed: "a4",
            iLeaf: "a5",
            label: "a6",
            labelSelected: "a8"
        }
    };
    $scope.dataForTheTree =
        [
            {
                "name": "www", "dateCreated": "1/1/2015", "children": [
                {
                    "name": "public", "dateCreated": "1/1/2015", "children": [
                    {"name": "shell.html", "dateCreated": "1/1/2015", "children": []},
                    {
                        "name": "blocks", "dateCreated": "1/1/2015", "children": [
                        {
                            "name": "header", "dateCreated": "1/1/2015", "children": [
                            {"name": "head.html", "dateCreated": "1/1/2015", "children": []},
                            {"name": "leftaside.html", "dateCreated": "1/1/2015", "children": []},
                            {"name": "foot.html", "dateCreated": "1/1/2015", "children": []}
                        ]
                        }
                    ]
                    }
                ]
                },
                {
                    "name": "utils", "dateCreated": "1/1/2015", "children": [
                    {"name": "functions.js", "dateCreated": "1/1/2015", "children": []}
                ]
                },
                {
                    "name": "save", "dateCreated": "1/1/2015", "children": [
                    {"name": "old.js", "dateCreate": "1/1/2015", "children": []}
                ]
                }
            ]
            }
        ];
    $scope.showSelected = function(e) {
        $scope.file.selected = e;
    }

    $scope.nodeToggled = function(e) {
        // console.log('> nodeToggled: ' + JSON.stringify(e));
    }

    // Compute parent path
    var setParent = function(o){
        if(angular.isDefined(o.children)) {
            var slash = '';
            if(angular.isUndefined(o.parent)) {
                o.parent = '';
            } else {
                slash = '/';
            }
            for (var n = 0; n < o.children.length; n++) {
                if(angular.isUndefined(o.children[n].parent)) {
                    o.children[n].parent = '';
                }
                o.children[n].parent = o.parent + slash + o.name;
                setParent(o.children[n]);
            }
        }
    }

    setParent($scope.dataForTheTree[0]);
});