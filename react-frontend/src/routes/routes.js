import config from '~/config';

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
import Login from '~/pages/Auth/Login';
import ForgotPassword from '~/pages/Auth/ForgotPassword';
import Auth from '~/pages/Auth/Auth';

const publicRoutes = [
    // Customer Routes
    { path: config.routes.customerRoutes.home, component: Home },
    { path: config.routes.loginRoute, component: Auth },
    { path: config.routes.forgotPasswordRoute, component: Auth },
];

const privateRoutes = [
    // Employee Routes
    // Admin Routes
    {
        path: config.routes.adminRoutes.dashboard,
        component: Dashboard,
        layout: AdminLayout,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.adminRoutes.menuManagement,
        component: MenuManagement,
        layout: AdminLayout,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.adminRoutes.orderManagement,
        component: AdminOrderManagement,
        layout: AdminLayout,
        roles: ['ADMIN'],
    },
    {
        path: config.routes.adminRoutes.employeeManagement,
        component: EmployeeManagement,
        layout: AdminLayout,
        roles: ['ADMIN'],
    },
];

export { publicRoutes, privateRoutes };
