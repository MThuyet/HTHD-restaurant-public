const routes = {
    /* Common Routes */
    home: '/',
    login: '/login',
    forgotPassword: '/forgot-password',
    resetPassword: '/reset-password',
    order: '/:branch_name/menu-order/:table_code',

    /* Employee Routes */
    empBookingManagement: '/:branch_name/booking-management',
    empTableManagement: '/:branch_name/table-management',
    empMenuManagement: '/:branch_name/menu-management',
    empKitchenOrderManagement: '/:branch_name/kitchen-orders',

    /* Admin Routes */
    admDashboard: '/admin/dashboard',
    admBranchesManagement: '/admin/branches-management',
    admEmployeeManagement: '/admin/employee-management',
    admMenuManagement: '/admin/menu-management',
    admOrderManagement: '/admin/order-management',
};

export default routes;
