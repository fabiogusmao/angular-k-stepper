(function (angular) {
    angular.module('k-stepper', []).directive('kStepper', function () {
        return {
            //require: 'ngModel',
            template: '<span class="k-stepper"><button ng-click="stepUp()" type="button" class="k-stepper-up"><span class="fa fa-plus"></span></button><button ng-click="stepDown()" type="button" class="k-stepper-down"><span class="fa fa-minus"></span></button></span>',
            scope: {
                step: '=step',
                value: '=value',
                min: '=min',
                max: '=max'
            }, bindings: {
                step: '<',
                min: '<',
                max: '<',
                value: '='
            }, link: function (scope, element, attrs, ngModel) {
                scope.stepUp = function(){
                    var value = scope.value;
                    if(isNaN(value))
                        value = 0;
                    value+=scope.step;

                    if(scope.max !== undefined && value > scope.max) {
                        value = scope.max;
                    }

                    scope.value = value;
                }
                scope.stepDown = function(){
                    var value = scope.value;
                    if(isNaN(value)){
                        value = 0;
                    } else {
                        value -= scope.step;
                    }
                    if(scope.min !== undefined && value < scope.min) {
                        value = scope.min;
                    }

                    scope.value = value;

                }
            }
        }
    });
})(angular)