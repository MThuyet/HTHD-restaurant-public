import { useState } from 'react';
import { Link } from 'react-router-dom';
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
import logoTemp from '~/assets/admin/logoTemp.png';

import config from '../../config';

const { Header, Sider, Content } = Layout;

const items = [
    {
        key: config.routes.adminRoutes.dashboard,
        icon: <AppstoreOutlined />,
        label: (
            <Link className="font-[500]" to={config.routes.adminRoutes.dashboard}>
                Bảng điều khiển
            </Link>
        ),
    },
    {
        key: config.routes.adminRoutes.employeeManagement,
        icon: <UserOutlined />,
        label: (
            <Link className="font-[500]" to={config.routes.adminRoutes.employeeManagement}>
                Quản lý nhân viên
            </Link>
        ),
    },
    {
        key: config.routes.adminRoutes.menuManagement,
        icon: <UnorderedListOutlined />,
        label: (
            <Link className="font-[500]" to={config.routes.adminRoutes.menuManagement}>
                Quản lý menu
            </Link>
        ),
    },
    {
        key: config.routes.adminRoutes.orderManagement,
        icon: <DollarOutlined />,
        label: (
            <Link className="font-[500]" to={config.routes.adminRoutes.orderManagement}>
                Quản lý đơn hàng
            </Link>
        ),
    },
];

const AdminLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeMenu, setActiveMenu] = useState('');

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

    return (
        <ConfigProvider
            locale={viVN}
            theme={{
                token: {
                    colorPrimary: '#C3551A',
                },
                components: {
                    Menu: {
                        itemSelectedBg: '#C3551A',
                        itemSelectedColor: '#fff',
                        motionDurationSlow: '0s',
                        motionDurationMid: '0s',
                        motionDurationFast: '0s',
                    },
                },
            }}
        >
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
                            <img src={logoTemp} alt="logo" className="w-12 object-contain " />
                        ) : (
                            <div className="flex items-center gap-3">
                                <img src={logoTemp} alt="logo" className="w-12" />
                                <span className="font-bold">HTHD Restaurant</span>
                            </div>
                        )}
                    </div>
                    <Menu
                        selectedKeys={[activeMenu]}
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
                                Bảng điều khiển
                            </Typography.Title>
                        </div>
                        <Dropdown menu={{ items: userMenuItems }} trigger={['click']} placement="bottomRight">
                            <div className="flex items-center gap-2 !mr-2 cursor-pointer">
                                <Avatar size={40} icon={<UserOutlined />} />
                                <span className="font-medium">Quang Hưng</span>
                            </div>
                        </Dropdown>
                    </Header>
                    <Content className="!bg-[#F1F5FB] rounded-[20px] overflow-hidden !p-4">{children}</Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};

export default AdminLayout;
