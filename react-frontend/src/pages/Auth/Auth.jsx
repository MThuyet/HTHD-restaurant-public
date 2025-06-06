import { useLocation } from 'react-router-dom';
import routes from '~/config/routes';

import Login from './Login';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';

import logo from '~/assets/logo.webp';
import chefImage1 from '~/assets/auth/imgs/chef/chef1.webp';
import chefImage2 from '~/assets/auth/imgs/chef/chef2.webp';
import chefImage3 from '~/assets/auth/imgs/chef/chef3.webp';
import chefImage4 from '~/assets/auth/imgs/chef/chef4.webp';
import { Typography, Carousel } from 'antd';

const Auth = () => {
    const location = useLocation();

    const isLoginPage = location.pathname === routes.loginRoute;
    const isForgotPasswordPage = location.pathname === routes.forgotPasswordRoute;
    const isResetPasswordPage = location.pathname === routes.resetPasswordRoute;

    return (
        <div className="min-w-screen min-h-screen flex md:flex-row flex-col-reverse items-center gap-8">
            <div className="md:w-6/12 md:h-screen w-full">
                <Carousel autoplay draggable>
                    <div>
                        <img src={chefImage1} alt="chef-1" className="w-full sm:h-screen object-cover" />
                    </div>
                    <div>
                        <img src={chefImage2} alt="chef-2" className="w-full sm:h-screen object-cover" />
                    </div>
                    <div>
                        <img src={chefImage3} alt="chef-3" className="w-full sm:h-screen object-cover" />
                    </div>
                    <div>
                        <img src={chefImage4} alt="chef-4" className="w-full sm:h-screen object-cover" />
                    </div>
                </Carousel>
            </div>
            <div className="sm:w-8/12 w-full md:h-screen p-6">
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
                    {isResetPasswordPage && <ResetPassword />}
                </div>
            </div>
        </div>
    );
};

export default Auth;
