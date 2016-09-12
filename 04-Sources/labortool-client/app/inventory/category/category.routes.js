"use strict";
var category_component_1 = require('./category.component');
var add_component_1 = require('./add/add.component');
var edit_component_1 = require('./edit/edit.component');
var view_component_1 = require('./view/view.component');
exports.categoryRoutes = [
    { path: 'inventory/category', component: category_component_1.CategoryComponent },
    { path: 'inventory/category/add', component: add_component_1.AddComponent },
    { path: 'inventory/category/edit/:id', component: edit_component_1.EditComponent },
    { path: 'inventory/category/view/:id', component: view_component_1.ViewComponent }
];
//# sourceMappingURL=category.routes.js.map