import routes from '~/config/routes';

import { useLocation } from 'react-router-dom';

import Login from './Login';
import ForgotPassword from './ForgotPassword';

import logo from '~/assets/logo.webp';
import chefImage from '~/assets/auth/imgs/chef.jpg';
import { Typography } from 'antd';

const Auth = () => {
    const location = useLocation();

    // kiểm tra xem đang ở path nào
    const isLoginPage = location.pathname === routes.loginRoute;
    const isForgotPasswordPage = location.pathname === routes.forgotPasswordRoute;

    return (
        <div className="w-screen h-screen flex items-center overflow-hidden gap-8">
            <div className="w-4/12 h-full">
                <img src={chefImage} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-8/12 h-full p-6">
                <div className="mb-12 flex items-center gap-2">
                    <img src={logo} alt="" className="w-14 h-14 rounded-lg " />
                    <Typography.Title level={5} className="!font-[700]">
                        HTHD Restaurant
                    </Typography.Title>
                </div>

                <Typography.Title level={2} className="!text-primary !font-[800] !mb-5">
                    {isLoginPage ? 'Đăng nhập' : 'Quên mật khẩu'}
                </Typography.Title>

                <Typography.Title level={3} className="!font-[800]" style={{ margin: 0 }}>
                    {isLoginPage ? 'Chào mừng bạn quay trở lại' : ''}
                </Typography.Title>

                {/* Render theo path */}
                <div className="mt-5 w-full">
                    {isLoginPage && <Login />}
                    {isForgotPasswordPage && <ForgotPassword />}
                </div>
            </div>
        </div>
    );
};
export default Auth;
