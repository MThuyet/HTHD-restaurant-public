import { useNavigate } from 'react-router-dom';
import { Segmented, Dropdown, Avatar } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';

import logo from '~/assets/common/logo.webp';
import CurrentTime from '~/components/CurrentTime';

const userMenuItems = [
    {
        key: 'profile',
        icon: <UserOutlined />,
        label: 'Thông tin tài khoản',
    },
    {
        key: 'settings',
        icon: <SettingOutlined />,
        label: 'Cài đặt',
    },
    {
        type: 'divider',
    },
    {
        key: 'logout',
        icon: <LogoutOutlined style={{ color: 'red' }} />,
        label: <span style={{ color: 'red' }}>Đăng xuất</span>,
    },
];

const handleUserMenuClick = ({ key }) => {
    if (key === 'logout') {
        // Xử lý đăng xuất
        console.log('Đăng xuất');
        // Thêm logic đăng xuất ở đây
    } else if (key === 'profile') {
        // Xử lý xem thông tin tài khoản
        console.log('Xem thông tin tài khoản');
    } else if (key === 'settings') {
        // Xử lý mở cài đặt
        console.log('Mở cài đặt');
    }
};

const Header = ({ navTabs }) => {
    console.log(navTabs);

    const navigate = useNavigate();

    const handleActive = (value) => {
        if (value) {
            navigate(value);
        }
    };

    return (
        <header className="sticky z-[100] top-0 w-full flex items-center justify-between px-4 py-2 bg-white shadow-md">
            <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="w-14 h-14 rounded-lg" />
                <h3 className="text-md font-bold">HTHD Restaurant</h3>
            </div>
            <div className="flex items-center gap-4 p-2 rounded-md bg-bgBlue shadow-sm">
                <Segmented size="large" options={navTabs} onChange={handleActive}></Segmented>
            </div>
            <div className="flex items-center gap-4">
                <CurrentTime />
                <Dropdown
                    menu={{
                        items: userMenuItems,
                        onClick: handleUserMenuClick,
                    }}
                    trigger={['click']}
                    placement="bottomRight"
                >
                    <div className="flex items-center gap-2 mr-2 cursor-pointer">
                        <Avatar size={40} icon={<UserOutlined />} />
                        <span className="font-medium">Quang Hưng</span>
                    </div>
                </Dropdown>
            </div>
        </header>
    );
};

export default Header;
