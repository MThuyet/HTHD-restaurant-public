import { useContext, useState } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    DollarOutlined,
    UnorderedListOutlined,
    AppstoreOutlined,
    LogoutOutlined,
    SettingOutlined,
    BranchesOutlined,
} from '@ant-design/icons';
import { Button, ConfigProvider, Layout, Menu, Typography, Avatar, Dropdown, App } from 'antd';
import viVN from 'antd/locale/vi_VN';
import logo from '~/assets/common/logo.webp';
import ROUTES from '~/config/routes';
import { logoutAPI } from '~/apis';
import UserContext from '~/contexts/UserContext';

const { Header, Sider, Content } = Layout;

// danh sách menu sidebar
const items = [
    {
        key: ROUTES.admDashboard,
        icon: <AppstoreOutlined />,
        label: (
            <Link className="font-[500]" to={ROUTES.admDashboard}>
                Bảng điều khiển
            </Link>
        ),
    },
    {
        key: ROUTES.admBranchesManagement,
        icon: <BranchesOutlined />,
        label: (
            <Link className="font-[500]" to={ROUTES.admBranchesManagement}>
                Quản lý chi nhánh
            </Link>
        ),
    },
    {
        key: ROUTES.admEmployeeManagement,
        icon: <UserOutlined />,
        label: (
            <Link className="font-[500]" to={ROUTES.admEmployeeManagement}>
                Quản lý nhân viên
            </Link>
        ),
    },
    {
        key: ROUTES.admMenuManagement,
        icon: <UnorderedListOutlined />,
        label: (
            <Link className="font-[500]" to={ROUTES.admMenuManagement}>
                Quản lý menu
            </Link>
        ),
    },
    {
        key: ROUTES.admOrderManagement,
        icon: <DollarOutlined />,
        label: (
            <Link className="font-[500]" to={ROUTES.admOrderManagement}>
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

const AdminLayout = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { message } = App.useApp();
    const { logoutUser } = useContext(UserContext);

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
        <ConfigProvider locale={viVN} theme={configTheme}>
            <Layout className="!h-[100dvh]">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    width={220}
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
                    <Content className="!bg-[#F1F5FB] rounded-md overflow-auto scrollbar-none !p-2">{children}</Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};

export default AdminLayout;
