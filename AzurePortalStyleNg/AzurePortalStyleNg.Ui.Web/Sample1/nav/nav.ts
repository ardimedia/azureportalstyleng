﻿(function () {
    'use strict';

    angular.module('sampleapp')
        .controller('lgtbcNavX', ['$scope', '$http', 'bladeService', lgtbcNav]);

    function lgtbcNav($scope, $http, bladeService) {
        /* jshint validthis: true */
        var vm: any = this;

        vm.blade = {
            title: 'LGT Visitenkarten',
            subTitle: 'LGT',
            isNavGrid: true,
            isUserRoleCreateBc: false,
            isUserRoleAdmin: false,
            navGrid: {
                items: [
                    // BUSINESS CARD
                    { title: 'Visitenkarten Vorlagen / Bestellen', bladePath: '/app/lgtbc/blades/businesscards/businesscards.html', roles: 'lgtbc-create-bc' },
                    { title: 'Visitenkarten Druckaufträge', bladePath: '/app/lgtbc/blades/workorders/workorders.html', roles: 'lgtbc-create-bc' },
                    { title: 'BVD Druckaufträge (Visitenkarten)', bladePath: '/app/lgtbc/blades/workordersprinter/workordersprinter.html', roles: 'lgtbc-admin' },
                    // MASTER DATA
                    { title: '', bladePath: '', roles: 'lgtbc-admin' },
                    { title: 'Gesellschaften', bladePath: '/app/lgtbc/blades/companies/companies.html', roles: 'lgtbc-admin' },
                    { title: 'Standorte', bladePath: '/app/lgtbc/blades/locations/locations.html', roles: 'lgtbc-admin' },
                    { title: 'Adressen', bladePath: '/app/lgtbc/blades/streetaddresses/streetaddresses.html', roles: 'lgtbc-admin' },
                    { title: 'Telefonnummernformate', bladePath: '/app/lgtbc/blades/phonenumberformats/phonenumberformats.html', roles: 'lgtbc-admin' },
                    { title: 'Projektnummern', bladePath: '/app/lgtbc/blades/projectnumbers/projectnumbers.html', roles: 'lgtbc-admin' },
                    { title: 'Sprachen', bladePath: '/app/lgtbc/blades/languages/languages.html', roles: 'lgtbc-admin' },
                    // MASTER USER
                    { title: '', bladePath: '', roles: 'lgtbc-admin' },
                    { title: 'Benutzer', bladePath: '/app/lgtbc/blades/users/users.html', roles: 'lgtbc-admin' },
                    //{ title: 'Benutzer zu Standorte zuordnen', bladePath: '', roles: 'lgtbc-admin' },
                    //{ title: 'Benutzer zu Projektnummern zuordnen', bladePath: '', roles: 'lgtbc-admin' },
                    // MASTER USER
                    { title: '', bladePath: '', roles: 'lgtbc-admin,lgtbc-create-bc' },
                    { title: 'Dokumentation', hrefPath: '/app/lgtbc/Lgt.Com.Vk-Benutzerhandbuch.pdf', roles: 'lgtbc-admin,lgtbc-create-bc' },
                ],
                navigateTo: navigateTo
            }
        };

        activate();

        function activate() {
            processUserRoles();
            fontsAvailable();
        }

        function navigateTo(id) {
            bladeService.clearLevel(2);
            bladeService.addBladePath(id);
        }

        function processUserRoles() {
            //vm.blade.isUserRoleCreateBc = ammsadminDataService.hasCurrentUserRoleName('lgtbc-create-bc');
            //vm.blade.isUserRoleAdmin = ammsadminDataService.hasCurrentUserRoleName('lgtbc-admin');

            //angular.forEach(vm.blade.navGrid.items, function (item) {
            //    item.isVisible = false;
            //    if (item.roles.indexOf('lgtbc-create-bc') > -1 && vm.blade.isUserRoleCreateBc) {
            //        item.isVisible = true;
            //    }

            //    if (item.roles.indexOf('lgtbc-admin') > -1 && vm.blade.isUserRoleAdmin) {
            //        item.isVisible = true;
            //    }
            //});
        }

        function fontsAvailable() {
            //lgtbcDataService.fontsAvailableOnServer()
            //    .success(function (data, status, headers, config) {
            //    if (!data) {
            //        window.alert('Schriften sind auf dem Server nicht installiert (Frutiger 45).');
            //    }
            //})
            //    .error(function (error) {
            //    window.alert('Message:' + error.Message);
            //});
        }
    }
})();

//#region Class Definition

class LgtbcNav extends AzurePortalNg.BladeBase {

    //#region Properties

    isUserRoleCreateBc: boolean = false;
    isUserRoleAdmin: boolean = false;
    isNavGrid: boolean = true;

    //#endregion

    //#region Constructors

    constructor(portalService: AzurePortalNg.PortalService) {
        super(portalService, '/App/lgtbc/baldes/nav/nav.html', 'LGT Visitenkarten', 'LGT', 315);

        this.navGrid.items = [
            // BUSINESS CARD
            { title: 'Visitenkarten Vorlagen / Bestellen', bladePath: '/app/lgtbc/blades/businesscards/businesscards.html', roles: 'lgtbc-create-bc' },
            { title: 'Visitenkarten Druckaufträge', bladePath: '/app/lgtbc/blades/workorders/workorders.html', roles: 'lgtbc-create-bc' },
            { title: 'BVD Druckaufträge (Visitenkarten)', bladePath: '/app/lgtbc/blades/workordersprinter/workordersprinter.html', roles: 'lgtbc-admin' },
            // MASTER DATA
            { title: '', bladePath: '', roles: 'lgtbc-admin' },
            { title: 'Gesellschaften', bladePath: '/app/lgtbc/blades/companies/companies.html', roles: 'lgtbc-admin' },
            { title: 'Standorte', bladePath: '/app/lgtbc/blades/locations/locations.html', roles: 'lgtbc-admin' },
            { title: 'Adressen', bladePath: '/app/lgtbc/blades/streetaddresses/streetaddresses.html', roles: 'lgtbc-admin' },
            { title: 'Telefonnummernformate', bladePath: '/app/lgtbc/blades/phonenumberformats/phonenumberformats.html', roles: 'lgtbc-admin' },
            { title: 'Projektnummern', bladePath: '/app/lgtbc/blades/projectnumbers/projectnumbers.html', roles: 'lgtbc-admin' },
            { title: 'Sprachen', bladePath: '/app/lgtbc/blades/languages/languages.html', roles: 'lgtbc-admin' },
            // MASTER USER
            { title: '', bladePath: '', roles: 'lgtbc-admin' },
            { title: 'Benutzer', bladePath: '/app/lgtbc/blades/users/users.html', roles: 'lgtbc-admin' },
            //{ title: 'Benutzer zu Standorte zuordnen', bladePath: '', roles: 'lgtbc-admin' },
            //{ title: 'Benutzer zu Projektnummern zuordnen', bladePath: '', roles: 'lgtbc-admin' },
            // MASTER USER
            { title: '', bladePath: '', roles: 'lgtbc-admin,lgtbc-create-bc' },
            { title: 'Dokumentation', hrefPath: '/app/lgtbc/Lgt.Com.Vk-Benutzerhandbuch.pdf', roles: 'lgtbc-admin,lgtbc-create-bc' }
        ];

        this.initialize();
        this.setObsoleteLayoutProperites();
    }

    //#endregion

    //#region Methods
    //#endregion
}

//#endregion

//#region Angular Registration

(function () {
    'use strict';
    angular.module('sampleapp').controller('lgtbcNav', ['azurePortalNg.portalService', LgtbcNav]);
})();

    //#endregion
