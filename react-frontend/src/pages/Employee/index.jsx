import { Outlet } from 'react-router-dom';

import Header from '~/components/Employees/Header';
import { ROUTES } from '~/utils/routes';

const items = [
    {
        value: ROUTES.EMPLOYEE_ROUTES.tableManagement,
        label: 'Quản lý bàn',
        role: 'RECEPTIONIST',
    },
    {
        value: ROUTES.EMPLOYEE_ROUTES.bookingManagement,
        label: 'Quản lý đặt bàn',
        role: 'RECEPTIONIST',
    },
    {
        value: ROUTES.EMPLOYEE_ROUTES.menuManagement,
        label: 'Quản lý menu',
        role: 'KITCHEN_STAFF',
    },
];

const index = () => {
    const role = 'RECEPTIONIST';
    const navTabs = items.filter((item) => item.role === role).map((item) => item);

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
