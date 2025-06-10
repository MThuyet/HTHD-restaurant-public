import { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    DollarOutlined,
    UnorderedListOutlined,
    AppstoreOutlined,
    LogoutOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { Button, ConfigProvider, Layout, Menu, Typography, Avatar, Dropdown } from 'antd';
import viVN from 'antd/locale/vi_VN';
import logo from '~/assets/common/logo.webp';
import { ROUTES } from '~/utils/routes';

const { Header, Sider, Content } = Layout;

// danh sách menu sidebar
const items = [
    {
        key: ROUTES.ADMIN_ROUTES.dashboard,
        icon: <AppstoreOutlined />,
        label: (
            <Link className="font-[500]" to={ROUTES.ADMIN_ROUTES.dashboard}>
                Bảng điều khiển
            </Link>
        ),
    },
    {
        key: ROUTES.ADMIN_ROUTES.employeeManagement,
        icon: <UserOutlined />,
        label: (
            <Link className="font-[500]" to={ROUTES.ADMIN_ROUTES.employeeManagement}>
                Quản lý nhân viên
            </Link>
        ),
    },
    {
        key: ROUTES.ADMIN_ROUTES.menuManagement,
        icon: <UnorderedListOutlined />,
        label: (
            <Link className="font-[500]" to={ROUTES.ADMIN_ROUTES.menuManagement}>
                Quản lý menu
            </Link>
        ),
    },
    {
        key: ROUTES.ADMIN_ROUTES.orderManagement,
        icon: <DollarOutlined />,
        label: (
            <Link className="font-[500]" to={ROUTES.ADMIN_ROUTES.orderManagement}>
                Quản lý đơn hàng
            </Link>
        ),
    },
];

// danh sách menu dropdown
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

// ghi đè theme gốc của antd
const configTheme = {
    token: {
        colorPrimary: '#C3551A',
        colorText: '#333',
    },
    components: {
        Menu: {
            itemSelectedBg: '#C3551A',
            itemSelectedColor: '#fff',
            itemHoverBg: 'rgba(195, 85, 26, 0.1)',
            itemHoverColor: '#C3551A',
            motionDurationSlow: '0s',
            motionDurationMid: '0s',
            motionDurationFast: '0s',
        },
    },
};

const Admin = () => {
    const location = useLocation();

    const [collapsed, setCollapsed] = useState(false);
    const [activeMenu, setActiveMenu] = useState(location.pathname);

    // Tìm title dựa trên menu đang được active
    const getPageTitle = () => {
        const currentItem = items.find((item) => item.key === activeMenu);
        // lấy text của component thông qua props.children
        return currentItem ? currentItem.label.props.children : 'Bảng điều khiển';
    };

    // Xử lý sự kiện cho user dropdown menu
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

    return (
        <ConfigProvider locale={viVN} theme={configTheme}>
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    width={250}
                    className="!bg-white !h-[100vh] !p-3 !pt-1"
                >
                    <div className={'flex items-center h-16 gap-3 !mb-8 !p-1'}>
                        {collapsed ? (
                            <img src={logo} alt="logo" className="w-12 object-contain rounded-[12px]" />
                        ) : (
                            <div className="flex items-center gap-3">
                                <img src={logo} alt="logo" className="w-12 rounded-[12px]" />
                                <span className="font-bold">HTHD Restaurant</span>
                            </div>
                        )}
                    </div>
                    <Menu
                        selectedKeys={activeMenu}
                        onClick={(e) => {
                            setActiveMenu(e.key);
                        }}
                        items={items}
                        style={{
                            borderRight: 'none',
                        }}
                    />
                </Sider>
                <Layout className="!bg-white !pt-0 !pr-3 !pb-3 !pl-3">
                    <Header className="!bg-white !p-0 !flex items-center justify-between !h-[85px]">
                        <div className="flex items-center gap-3">
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                className="!text-xl !font-[700]"
                            />
                            <Typography.Title level={4} className="text-xl !m-0 !font-[700]">
                                {getPageTitle()}
                            </Typography.Title>
                        </div>
                        <Dropdown
                            menu={{
                                items: userMenuItems,
                                onClick: handleUserMenuClick,
                            }}
                            trigger={['click']}
                            placement="bottomRight"
                        >
                            <div className="flex items-center gap-2 !mr-2 cursor-pointer">
                                <Avatar size={40} icon={<UserOutlined />} />
                                <span className="font-medium">Quang Hưng</span>
                            </div>
                        </Dropdown>
                    </Header>
                    <Content className="!bg-[#F1F5FB] rounded-[20px] overflow-hidden !p-4">
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};

export default Admin;
