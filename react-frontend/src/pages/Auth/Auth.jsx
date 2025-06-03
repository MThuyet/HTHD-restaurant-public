import routes from '~/config/routes';

import { useLocation } from 'react-router-dom';

import Login from './Login';
import ForgotPassword from './ForgotPassword';

const Auth = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === routes.loginRoute;
    const isForgotPasswordPage = location.pathname === routes.forgotPasswordRoute;
    return (
        <div className="">
            <img className="float-left w-131 h-161" src="../public/imgs/chef.jpg" alt="" />
            {isLoginPage && <Login />}
            {isForgotPasswordPage && <ForgotPassword />}
        </div>
    );
};
export default Auth;
