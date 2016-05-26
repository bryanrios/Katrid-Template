var services = angular.module('katrid.services', ['ngResource']);

services.factory('Model', ['$resource', '$http', '$q', function ($resource, $http, $q) {
  var res = $resource('/api/', {}, {
    get: {
      url: '/api/get/'
    },
    save: {
      url: '/api/write/'
    },
    remove: {
      url: '/api/delete/'
    },
    search: {
      url: '/api/query/'
    }
  });

  var promise = function (model, original, cleanUp) {
    return $q(function (success, error) {
      original.then(function () {
        if (cleanUp) model.init();
        success(model, arguments);
      }, function () {
        error(model, arguments);
      });
    })
  };

  function Model(name, data) {
    this.autoClean = true;
    this.autoCommit = true;
    // auto commit after every save or delete operation
    this.name = name;
    this.res = res;
    this.id = null;

    this.init = function () {
      this.data = [];
      this.record = {};
      this.created = [];
      this.modified = [];
      this.deleted = [];
      this.activeIndex = -1;
    };

    this.init();

    this.create = function (data) {
      var d = {
        model: this.name,
        data: data
      };
      return this.res.save(d);
    };

    this.delete = function (data) {

    };

    this.get = function (id) {
      var d = {
        model: this.name,
        id: id
      };
      return promise(this, this.res.get(d).$promise, true);
    };

    this.search = function (params) {
      return res.query(params);
    };

    this.save = function (data) {
      return this.res.$save(data);
    };

    this.write = this.save;

    this.commit = function () {
      // apply pending changes to server
    };
  }

  return Model;
}]);


services.controller('testController', ['$scope', 'Model', function ($scope, Model) {
  $scope.a = 1;

  $scope.test = function () {

    console.log('executing test');
    var partner = new Model('res.partner');
    partner.get(1).then(function () {}, function () {
      console.log('test error');
    });
  }
}]);
