import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import UserContext from '~/contexts/UserContext';
import Header from '~/components/Employees/Header';
import { ROUTES } from '~/utils/routes';

const items = [
    {
        value: ROUTES.EMPLOYEE_ROUTES.tableManagement,
        label: 'Quản lý bàn',
        permission: 'employee.table',
    },
    {
        value: ROUTES.EMPLOYEE_ROUTES.bookingManagement,
        label: 'Quản lý đặt bàn',
        permission: 'employee.booking',
    },
    {
        value: ROUTES.EMPLOYEE_ROUTES.menuManagement,
        label: 'Quản lý menu',
        permission: 'employee.menu',
    },
    {
        value: ROUTES.EMPLOYEE_ROUTES.kitchenOrders,
        label: 'Order của bếp',
        permission: 'employee.kitchen',
    },
];

const index = () => {
    const user = useContext(UserContext).user;
    const userPermissions = user?.permissions;

    const navTabs = items.filter((item) => userPermissions.includes(item.permission)).map((item) => item);

    return (
        <div className="bg-bgBlue">
            <Header navTabs={navTabs}></Header>
            <main className="p-4">
                <Outlet />
            </main>
        </div>
    );
};

export default index;
