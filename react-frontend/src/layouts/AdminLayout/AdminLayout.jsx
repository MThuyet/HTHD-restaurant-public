import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    DollarOutlined,
    UnorderedListOutlined,
    AppstoreOutlined,
    DownOutlined,
    LogoutOutlined,
    HomeOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { Button, ConfigProvider, Layout, Menu, theme, Typography } from 'antd';
import viVN from 'antd/locale/vi_VN';
import { Dropdown, Space } from 'antd';

import config from '../../config';

const { Header, Sider, Content } = Layout;

const items = [
    {
        key: config.routes.adminRoutes.dashboard,
        icon: <AppstoreOutlined />,
        label: <Link to={config.routes.adminRoutes.dashboard}>Bảng điều khiển</Link>,
    },
    {
        key: config.routes.adminRoutes.employeeManagement,
        icon: <UserOutlined />,
        label: <Link to={config.routes.adminRoutes.employeeManagement}>Quản lý nhân viên</Link>,
    },
    {
        key: config.routes.adminRoutes.menuManagement,
        icon: <UnorderedListOutlined />,
        label: <Link to={config.routes.adminRoutes.menuManagement}>Quản lý menu</Link>,
    },
    {
        key: config.routes.adminRoutes.orderManagement,
        icon: <DollarOutlined />,
        label: <Link to={config.routes.adminRoutes.orderManagement}>Quản lý đơn hàng</Link>,
    },
];

const menuDropdown = [
    {
        key: '/',
        icon: <HomeOutlined />,
        label: <Link href="/">Trang chủ</Link>,
    },
    {
        key: '/admin/logout',
        icon: <LogoutOutlined />,
        label: <Link href="/admin/logout">Đăng xuất</Link>,
    },
];

const AdminLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [activeMenu, setActiveMenu] = useState('');

    return (
        <ConfigProvider locale={viVN}>
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    style={{ background: colorBgContainer, height: '100vh' }}
                >
                    <div className="text-center text-[#fff] p-4 font-semibold cursor-default text-[20px]">
                        {collapsed ? <SettingOutlined /> : 'Trang quản trị'}
                    </div>
                    <Menu
                        selectedKeys={[activeMenu]}
                        onClick={(e) => {
                            setActiveMenu(e.key);
                        }}
                        items={items}
                    />
                </Sider>
                <Layout>
                    <Header className="h-[45px] leading-[45px] p-0 flex items-center justify-between bg-[#f5f5f5]">
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <div className="mr-6 ">
                            <Dropdown placement="bottom" menu={{ items: menuDropdown }} trigger={['click']}>
                                <Space className="cursor-pointer font-bold ">
                                    Xin chào Admin <DownOutlined />
                                </Space>
                            </Dropdown>
                        </div>
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};

export default AdminLayout;
