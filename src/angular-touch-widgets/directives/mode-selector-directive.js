angular.module('angularTouchWidgets.directives.modeSelector', [])

  .directive('modeSelector', function () {
    return {
      restrict: "E",
      scope: { modes: '=', selectedMode: '=' },
      template:'<div class="mode-selector" ng-class="selectedMode" style="height: 26px; width: 250px; float: right; margin: 10px 10px 10px 0" on-tap="changeMode()">\
                    <div style="height: 100%; width: 100%; transform: translate(112px); -webkit-transform: translate(112px)">\
                        <div on-tap="changeMode()" class="button-shadow" style="overflow: hidden; position: absolute; width: 40px;height: 40px; border-radius: 20px; transform: translate(125px); -webkit-transform: translate(125px); margin-left: -17px; margin-top: -6px;">\
                            <div class="mode-selector-botton background-animation" style="height: 100%; width: 100%;"></div>\
                        </div>\
                        <div class="transform-animation" style="height: 100%; width: 100%; position: absolute; top: 0; left: 0;" ng-style="{transform: \'rotate(\'+ showMode * (-360 / modes.length)+\'deg)\', \'-webkit-transform\': \'rotate(\'+ showMode * (-360 / modes.length)+\'deg)\'}">\
                            <div ng-repeat="mode in modes" class="show-hide-opacity" ng-style="{transform: \'rotate(\'+ $index * (360 / modes.length) +\'deg) translate(-125px)\', \'-webkit-transform\': \'rotate(\'+ $index * (360 / modes.length) +\'deg) translate(-125px)\'}" style="width: 250px; height: 26px; text-align: end; position: absolute;" ng-show="currentMode==$index">\
                                <span style="margin-right: 20px">\
                                    {{ mode.display }}\
                                </span>\
                                <i class="{{ mode.icon }}" style="margin-right: -15px; font-size: 30px; vertical-align: middle;"></i>\
                            </div>\
                        </div>\
                    </div>\
                </div>',
      controller: function($scope){

        var getNumberOfMode = function(selectedMode){
          var modesNames = [];
          angular.forEach($scope.modes, function(mode) {
            modesNames.push(mode.name);
          });
          var index = modesNames.indexOf(selectedMode);
          if(index == -1){
            index=0;
          }
          return index;
        };

        $scope.showMode = $scope.currentMode = getNumberOfMode($scope.selectedMode);
        $scope.selectedMode = $scope.modes[$scope.currentMode].name;

        $scope.changeMode = function(){
          $scope.showMode = $scope.showMode + 1;
          $scope.currentMode = $scope.showMode % $scope.modes.length;
          $scope.selectedMode = $scope.modes[$scope.currentMode].name;
        };
      }
    };
  });
