import { useNavigate } from 'react-router-dom';
import { Segmented, Dropdown, Avatar, App } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';

import logo from '~/assets/common/logo.webp';
import CurrentTime from '~/components/CurrentTime';
import { useContext } from 'react';
import UserContext from '~/contexts/UserContext';
import { logoutAPI } from '~/apis';

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

const Header = ({ navTabs }) => {
    const { logoutUser } = useContext(UserContext);
    const navigate = useNavigate();
    const { message } = App.useApp();

    const handleActive = (value) => {
        if (value) {
            navigate(value);
        }
    };

    const handleUserMenuClick = ({ key }) => {
        if (key === 'logout') {
            try {
                logoutAPI().then(() => {
                    message.success('Đăng xuất thành công');
                    navigate('/login');
                    logoutUser();
                });
            } catch (error) {
                message.error(error.response.data.message);
            }
        } else if (key === 'profile') {
            // Xử lý xem thông tin tài khoản
            console.log('Xem thông tin tài khoản');
        } else if (key === 'settings') {
            // Xử lý mở cài đặt
            console.log('Mở cài đặt');
        }
    };

    return (
        <header className="sticky z-[100] top-0 w-full flex items-center justify-between px-4 py-2 bg-white shadow-md">
            <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="w-14 h-14 rounded-lg" />
                <h3 className="text-md font-bold">HTHD Restaurant</h3>
            </div>
            <div className="flex items-center gap-4 p-2 rounded-md bg-bgBlue shadow-sm">
                <Segmented
                    size="large"
                    options={navTabs}
                    defaultValue={window.location.pathname}
                    onChange={handleActive}
                ></Segmented>
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
