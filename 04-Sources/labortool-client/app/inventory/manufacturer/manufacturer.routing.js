"use strict";
var router_1 = require('@angular/router');
var manufacturer_component_1 = require('./manufacturer.component');
var add_component_1 = require('./add/add.component');
var edit_component_1 = require('./edit/edit.component');
var view_component_1 = require('./view/view.component');
var manufacturerRoutes = [
    {
        path: 'manufacturer',
        component: manufacturer_component_1.ManufacturerComponent
    },
    {
        path: 'manufacturer/add',
        component: add_component_1.AddManufacturerComponent
    },
    {
        path: 'manufacturer/edit/:id',
        component: edit_component_1.EditManufacturerComponent
    },
    {
        path: 'manufacturer/view/:id',
        component: view_component_1.ViewManufacturerComponent
    },
];
exports.manufacturerRouting = router_1.RouterModule.forChild(manufacturerRoutes);
//# sourceMappingURL=manufacturer.routing.js.map