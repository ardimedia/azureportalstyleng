﻿(function () {
    'use strict';

    angular.module('appAzurePortal').controller('nav', ['$scope', '$http', nav]);

    function nav($scope, $http) {
        var vm = this;

        vm.options = {};

        getOptions();

        function getOptions() {
            $http({ method: 'GET', url: '/AppAzurePortalSampleAmms/bergbahnenevent/blades/nav/nav.json' }).success(function (data, status, headers, config) {
                var data2 = angular.fromJson(data);
                vm.options = data2;
                vm.options.navGridItems.navigateTo = navigateTo;
            }).error(function (data, status, headers, config) {
            });
            return;
        }

        function navigateTo(id) {
            console.log(id);
        }
    }
})();
//# sourceMappingURL=nav.js.map
