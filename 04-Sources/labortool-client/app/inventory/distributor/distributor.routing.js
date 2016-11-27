"use strict";
var router_1 = require('@angular/router');
var distributor_component_1 = require('./distributor.component');
var add_component_1 = require('./add/add.component');
var edit_component_1 = require('./edit/edit.component');
var view_component_1 = require('./view/view.component');
var distributorRoutes = [
    {
        path: 'distributor',
        component: distributor_component_1.DistributorComponent
    },
    {
        path: 'distributor/add',
        component: add_component_1.AddDistributorComponent
    },
    {
        path: 'distributor/edit/:id',
        component: edit_component_1.EditDistributorComponent
    },
    {
        path: 'distributor/view/:id',
        component: view_component_1.ViewDistributorComponent
    },
];
exports.distributorRouting = router_1.RouterModule.forChild(distributorRoutes);
//# sourceMappingURL=distributor.routing.js.map