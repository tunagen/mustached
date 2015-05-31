angular.module('mustache')
    .directive('uiNav', ['$timeout', function ($timeout) {
        return {
            restrict: 'AC',
            link: function (scope, element, attr) {
                $('.active').next().slideDown(200);
                element.on('click', function (e) {
                    var clicked = $(e.target),
                        allActive = $('.active');
                    if (clicked.parent().is('.sub-header')) {
                        console.log(e.target);
                        var effect = clicked.toggleClass('active').next();
                        allActive.toggleClass('active').next().slideUp(200);
                        //effect.slideDown(200);
                        effect.slideToggle(500);

                    }
                });
            }
        }
    }]);