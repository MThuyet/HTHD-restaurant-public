import routes from '~/config/routes';

/* Layouts */
import EmployeeLayout from '~/layouts/EmployeeLayout/EmployeeLayout';
import AdminLayout from '~/layouts/AdminLayout/AdminLayout';

/* Pages */
// Customer Pages
import Home from '~/pages/Customer/Home/Home';

// Employee Pages

// Admin Pages
import MenuManagement from '~/pages/Admin/MenuManagement';
import EmployeeManagement from '~/pages/Admin/EmployeeManagement';
import AdminOrderManagement from '~/pages/Admin/OrderManagement';
import Dashboard from '~/pages/Admin/Dashboard';

const publicRoutes = [
    // Customer Routes
    { path: routes.customerRoutes.home, component: Home },
];

const privateRoutes = [
    // Employee Routes
    // Admin Routes
    {
        path: routes.adminRoutes.dashboard,
        component: Dashboard,
        layout: AdminLayout,
        roles: ['ADMIN'],
    },
    {
        path: routes.adminRoutes.menuManagement,
        component: MenuManagement,
        layout: AdminLayout,
        roles: ['ADMIN'],
    },
    {
        path: routes.adminRoutes.orderManagement,
        component: AdminOrderManagement,
        layout: AdminLayout,
        roles: ['ADMIN'],
    },
    {
        path: routes.adminRoutes.employeeManagement,
        component: EmployeeManagement,
        layout: AdminLayout,
        roles: ['ADMIN'],
    },
];

export { publicRoutes, privateRoutes };
