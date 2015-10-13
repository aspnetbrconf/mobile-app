(function() {
    'use strict';

    var eventController = function($scope, eventService) {
      $scope.events = [];
      $scope.model = {};

      contextualize();

      function contextualize() {
        loadEvents();
      }

      function loadEvents() {
        eventService.getEvents().then(function(response) {
            $scope.events = response.data;
            $scope.model = $scope.events[0];
          });
      };
    };

    angular
        .module('aspnetbrapp')
        .controller('eventController', [
        '$scope',
        'eventService',
        eventController
    ]);
})();
