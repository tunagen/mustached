/**
 * Created by jean on 5/8/15.
 */
'use strict';

angular.module('mustache').controller('mainCtrl', function ($scope) {
    $scope.app = {
        version: '0.0.5',
        asideBg: 'bg-black'
    };

    $scope.file = {
        selected: {}
    };

    $scope.treeOptions = {
        nodeChildren: "children",
        dirSelectable: true,
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
        console.log('> showSelected: ' + JSON.stringify(e));
        $scope.file.selected = e;
    }
});