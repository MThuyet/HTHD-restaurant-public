export const ROUTES = {
    // Public Routes
    PUBLIC_ROUTES: {
        login: '/login',
        forgotPassword: '/forgot-password',
        resetPassword: '/reset-password',
    },

    // Employee Routes
    EMPLOYEE_ROUTES: {
        order: '/:branch_name/menu-order/:table_code',
        bookingManagement: '/:branch_name/booking-management',
        tableManagement: '/:branch_name/table-management',
        menuManagement: '/:branch_name/menu-management',
        kitchenOrders: '/:branch_name/kitchen-orders',
    },

    // Admin Routes
    ADMIN_ROUTES: {
        dashboard: '/admin/dashboard',
        branchesManagement: '/admin/branches-management',
        employeeManagement: '/admin/employee-management',
        menuManagement: '/admin/menu-management',
        orderManagement: '/admin/order-management',
    },
};
