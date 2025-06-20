import { Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Errors from './pages/Errors';
import Home from './pages/Customer/Home';
import Order from './pages/Common/Order';
import BookingManagement from './pages/Employee/BookingManagement';
import TableManagement from './pages/Employee/TableManagement';
import Admin from './pages/Admin';
import Employee from './pages/Employee';
import Dashboard from './pages/Admin/Dashboard';
import MenuManagement from './pages/Admin/MenuManagement';
import OrderManagement from './pages/Admin/OrderManagement';
import EmployeeManagement from './pages/Admin/EmployeeManagement';
import { ROUTES } from './utils/routes';
import { useContext } from 'react';
import UserContext from './contexts/UserContext';
import LoadingScreen from './components/Commons/LoadingScreen';

const EmployeesRoutes = ({ user, isLoading }) => {
    if (isLoading) {
        return <LoadingScreen />;
    }
    if (user && user.permissions?.includes('employee.order')) {
        return <Outlet />;
    }
    if (user && user.permissions?.includes('employee.booking')) {
        return <Employee />;
    }

    return <Errors title={403} content="Bạn không có quyền truy cập trang này" />;
};

const AdminRoutes = ({ user, isLoading }) => {
    if (isLoading) {
        return <LoadingScreen />;
    }
    if (user && user.permissions?.includes('admin')) {
        return <Admin />;
    }
    return <Errors title={403} content="Bạn không có quyền truy cập trang này" />;
};

function App() {
    const { user, isLoading } = useContext(UserContext);

    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            {/* Auth */}
            <Route path={ROUTES.PUBLIC_ROUTES.login} element={<Auth />} />
            <Route path={ROUTES.PUBLIC_ROUTES.forgotPassword} element={<Auth />} />
            <Route path={ROUTES.PUBLIC_ROUTES.resetPassword} element={<Auth />} />

            {/* Employee Routes */}
            <Route element={<EmployeesRoutes user={user} isLoading={isLoading} />}>
                <Route path={ROUTES.EMPLOYEE_ROUTES.order} element={<Order />} />
                <Route path={ROUTES.EMPLOYEE_ROUTES.bookingManagement} element={<BookingManagement />} />
                <Route path={ROUTES.EMPLOYEE_ROUTES.tableManagement} element={<TableManagement />} />
            </Route>

            {/* Admin Routes */}
            <Route element={<AdminRoutes user={user} isLoading={isLoading} />}>
                <Route path={ROUTES.ADMIN_ROUTES.dashboard} element={<Dashboard />} />
                <Route path={ROUTES.ADMIN_ROUTES.menuManagement} element={<MenuManagement />} />
                <Route path={ROUTES.ADMIN_ROUTES.orderManagement} element={<OrderManagement />} />
                <Route path={ROUTES.ADMIN_ROUTES.employeeManagement} element={<EmployeeManagement />} />
            </Route>

            {/* Error */}
            <Route path="*" element={<Errors />} replace />
        </Routes>
    );
}

export default App;
