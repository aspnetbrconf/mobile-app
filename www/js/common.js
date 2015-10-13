(function() {
  'use strict';

  var commonModule = angular.module('common', []);
  commonModule.factory('common', ['$rootScope', common]);

  function common($rootScope) {
    var service = {
      serializeToQueryString: serializeToQueryString
    };

    return service;

    function serializeToQueryString(obj) {
      var str = [];
      for (var p in obj)
        if (obj.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
      return '?' + str.join("&");
    }
  }
})();
