app.directive('levelInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/levelInfo.html' 
  }; 
});