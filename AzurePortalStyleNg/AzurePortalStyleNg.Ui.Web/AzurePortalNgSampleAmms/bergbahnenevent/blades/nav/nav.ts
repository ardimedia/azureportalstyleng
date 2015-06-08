﻿(function () {
    'use strict';

    angular.module('azureportalng')
        .controller('bergbahneneventNav', ['$scope', '$http', 'bladeService', bergbahneneventNav]);

    function bergbahneneventNav($scope, $http, bladeService) {
        /* jshint validthis: true */
        var vm = this;

        vm.blade = {
            $schema: "/AzurePortalNg/$schema/navgrid.json?reload",
            title: "Bergbahnen.Li",
            subTitle: "Aktienregister",
            isNavGrid: true,
            navGrid: {
                items: [
                    { title: "Aktienregister", bladePath: "/AzurePortalNgSampleAmms/bergbahnenevent/blades/shares/shares.html", bladeController: "bergbahneneventShares", isVisible: true },
                    { title: "Export Excel", bladePath: "/AzurePortalNgSampleAmms/bergbahnenevent/blades/exportexcel/exportexcel.html", bladeController: "exportexcel", isVisible: true },
                    { title: "", bladePath: "", bladeController: "" },
                    { title: "xxx", bladePath: "/AzurePortalNgSampleAmms/bergbahnenevent/blades/xxx/xxx.html", bladeController: "xxx" }
                ]
            }
        };

        vm.blade.navGrid.navigateTo = navigateTo;
        console.log($scope);

        function navigateTo(id) {
            bladeService.clearLevel(2);
            bladeService.addBladePath(id);
        }
    }
})();
