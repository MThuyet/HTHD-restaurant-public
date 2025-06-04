const routes = {
    /* BEGIN CUSTOMER ROUTES */
    customerRoutes: {
        home: '/',
        orderMenu: '/:branch_name/menu-order/:table_code',
    },
    /* END CUSTOMER ROUTES */

    /* BEGIN COMMON ROUTES EMPLOYEES & ADMIN */
    loginRoute: '/login',
    forgotPasswordRoute: '/forgot-password',
    resetPasswordRoute: '/reset-password',
    /* END COMMON ROUTES EMPLOYEES & ADMIN */

    /* BEGIN EMPLOYEE ROUTES */
    employeeRoutes: {
        menuManagement: '/employee/menu-management',
        tableManagement: '/employee/table-management',
        orderManagement: '/employee/order-management',
        bookingManagement: '/employee/booking-management',
    },
    /* END EMPLOYEE ROUTES */

    /* BEGIN ADMIN ROUTES */
    adminRoutes: {
        dashboard: '/admin/dashboard',
        menuManagement: '/admin/menu-management',
        orderManagement: '/admin/order-management',
        employeeManagement: '/admin/employee-management',
    },
    /* END ADMIN ROUTES */
};

export default routes;
