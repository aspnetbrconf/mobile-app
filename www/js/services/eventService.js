(function () {
    'use strict';

    function eventService($http, common, Configuration) {

        var urlBase = Configuration.serviceUrl + "/events";

        var service = {
            getEvents : getEvents
        };

        function getEvents(query) {
            return $http.get(urlBase + common.serializeToQueryString(query));
        }

        return service;
    }

    angular
    .module('aspnetbrapp')
    .factory('eventService', [
      '$http',
      'common',
      'Configuration',
      eventService
    ]);
}
)();
