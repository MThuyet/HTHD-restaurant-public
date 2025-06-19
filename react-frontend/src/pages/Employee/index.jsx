import { NavLink, Outlet } from 'react-router-dom';

import Header from '~/components/Employee/Header';
import { ROUTES } from '~/utils/routes';

const items = [
    {
        value: 'Table Management',
        label: (
            <NavLink className="font-[500]" to={ROUTES.EMPLOYEE_ROUTES.tableManagement}>
                Quản lý bàn
            </NavLink>
        ),
        role: 'RECEPTIONIST',
    },
    {
        value: 'Booking Management',
        label: (
            <NavLink className="font-[500]" to={ROUTES.EMPLOYEE_ROUTES.bookingManagement}>
                Quản lý đặt bàn
            </NavLink>
        ),
        role: 'RECEPTIONIST',
    },
    {
        value: 'Menu Management',
        label: (
            <NavLink className="font-[500]" to={ROUTES.EMPLOYEE_ROUTES.menuManagement}>
                Quản lý menu
            </NavLink>
        ),
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
