import config from '~/config';

/* ---------------------------EMPLOYEE LAYOUTS---------------------------- */
import EmployeeLayout from '~/layouts/Employee';

/* ----------------------------ADMIN LAYOUTS------------------------------ */
import AdminLayout from '~/layouts/Admin';

/* -----------------------------COMMON PAGES------------------------------ */
import Home from '~/pages/Customer/Home';
import Auth from '~/pages/Auth/Auth';
import Order from '~/pages/Common/Order';

/* ----------------------------EMPLOYEE PAGES---------------------------- */
import EmpTableManagement from '~/pages/Employee/TableManagement';
import EmpBookingManagement from '~/pages/Employee/BookingManagement';
import EmpMenuManagement from '~/pages/Employee/MenuManagement';
import EmpKitchenOrderManagement from '~/pages/Employee/KitchenOrderManagement';

/* ----------------------------ADMIN PAGES---------------------------- */
import AdmDashboard from '~/pages/Admin/Dashboard';
import AdmBranchesManagement from '~/pages/Admin/BranchesManagement';
import AdmEmployeeManagement from '~/pages/Admin/EmployeeManagement';
import AdmMenuManagement from '~/pages/Admin/MenuManagement';
import AdmOrderManagement from '~/pages/Admin/OrderManagement';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: Auth },
    { path: config.routes.forgotPassword, component: Auth },
    { path: config.routes.resetPassword, component: Auth },
    { path: config.routes.order, component: Order },
];

const privateRoutes = [
    /* =======================EMPLOYEE========================== */
    {
        path: config.routes.empTableManagement,
        component: EmpTableManagement,
        layout: EmployeeLayout,
        permission: 'employee.table',
    },
    {
        path: config.routes.empBookingManagement,
        component: EmpBookingManagement,
        layout: EmployeeLayout,
        permission: 'employee.booking',
    },
    {
        path: config.routes.empMenuManagement,
        component: EmpMenuManagement,
        layout: EmployeeLayout,
        permission: 'employee.menu',
    },
    {
        path: config.routes.empKitchenOrderManagement,
        component: EmpKitchenOrderManagement,
        layout: EmployeeLayout,
        permission: 'employee.kitchen',
    },
    /* ========================ADMIN============================ */
    {
        path: config.routes.admDashboard,
        component: AdmDashboard,
        layout: AdminLayout,
        permission: 'admin',
    },
    {
        path: config.routes.admBranchesManagement,
        component: AdmBranchesManagement,
        layout: AdminLayout,
        permission: 'admin',
    },
    {
        path: config.routes.admEmployeeManagement,
        component: AdmEmployeeManagement,
        layout: AdminLayout,
        permission: 'admin',
    },
    {
        path: config.routes.admMenuManagement,
        component: AdmMenuManagement,
        layout: AdminLayout,
        permission: 'admin',
    },
    {
        path: config.routes.admOrderManagement,
        component: AdmOrderManagement,
        layout: AdminLayout,
        permission: 'admin',
    },
];

export { publicRoutes, privateRoutes };
