angular.module('sp.performer.palettes', [
  'sp.performer.common.palettes',
  'ui.router'
])

.config(function($stateProvider) {
  // Select palette or create new
  $stateProvider.state('user.palettes', {
    url: '/palettes', 
    templateUrl: 'palettes/palettes.tpl.html',
    controller: 'PalettesCtrl',
    resolve: {
      allPalettes: function(palettes) {
        return palettes.all();
      }
    }
  });
})

.controller('PalettesCtrl', function($scope, allPalettes, user) {
  $scope.palettes = allPalettes;
  $scope.user = user;
  $scope.userFilter = '';

  $scope.filterPalettes = function(filter) {
    $scope.userFilter = (filter === 'user') ? $scope.user._id : '';
  };
})
;
