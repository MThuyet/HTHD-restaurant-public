import { Outlet, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Errors from './pages/Errors';
import Home from './pages/Customer/Home';
import Order from './pages/Common/Order';
import Admin from './pages/Admin';
import Dashboard from './pages/Admin/Dashboard';
import MenuManagement from './pages/Admin/MenuManagement';
import OrderManagement from './pages/Admin/OrderManagement';
import EmployeeManagement from './pages/Admin/EmployeeManagement';
import { ROUTES } from './utils/routes';

const EmployeesRoutes = () => {
    // viết điều kiện ở trên đây
    return <Outlet />;
};

const AdminRoutes = () => {
    // viết điều kiện ở trên đây
    return <Admin />;
};

function App() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            {/* Auth */}
            <Route path={ROUTES.PUBLIC_ROUTES.login} element={<Auth />} />
            <Route path={ROUTES.PUBLIC_ROUTES.forgotPassword} element={<Auth />} />
            <Route path={ROUTES.PUBLIC_ROUTES.resetPassword} element={<Auth />} />

            {/* Employee Routes */}
            <Route element={<EmployeesRoutes />}>
                <Route path={ROUTES.EMPLOYEE_ROUTES.order} element={<Order />} />
            </Route>

            {/* Admin Routes */}
            <Route element={<AdminRoutes />}>
                <Route path={ROUTES.ADMIN_ROUTES.dashboard} element={<Dashboard />} />
                <Route path={ROUTES.ADMIN_ROUTES.menuManagement} element={<MenuManagement />} />
                <Route path={ROUTES.ADMIN_ROUTES.orderManagement} element={<OrderManagement />} />
                <Route path={ROUTES.ADMIN_ROUTES.employeeManagement} element={<EmployeeManagement />} />
            </Route>

            {/* Error */}
            <Route path="*" element={<Errors />} />
        </Routes>
    );
}

export default App;
