import { useContext } from 'react';
import { FloatButton } from 'antd';

import UserContext from '~/contexts/UserContext';
import Header from './Header';
import ROUTES from '~/config/routes';

const items = [
    {
        value: ROUTES.empTableManagement,
        label: 'Quản lý bàn',
        permission: 'employee.table',
    },
    {
        value: ROUTES.empBookingManagement,
        label: 'Quản lý đặt bàn',
        permission: 'employee.booking',
    },
    {
        value: ROUTES.empKitchenOrders,
        label: 'Order của bếp',
        permission: 'employee.kitchen',
    },
    {
        value: ROUTES.empMenuManagement,
        label: 'Quản lý menu',
        permission: 'employee.menu',
    },
];

const EmployeeLayout = ({ children }) => {
    const user = useContext(UserContext).user;
    const userPermissions = user?.permissions;

    const navTabs = items.filter((item) => userPermissions.includes(item.permission)).map((item) => item);

    return (
        <div className="bg-bgBlue">
            <Header navTabs={navTabs}></Header>
            <main className="p-4">
                {children}
                <FloatButton.BackTop visibilityHeight={0} duration={0} type="primary" />
            </main>
        </div>
    );
};

export default EmployeeLayout;
