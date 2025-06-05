import { useLocation } from 'react-router-dom';
import routes from '~/config/routes';
import Error404 from './Error404';

import logo from '~/assets/logo.webp';
import { Typography } from 'antd';

const Errors = () => {
    const location = useLocation();
    const isError404Page = location.pathname === routes.errorRoute;
    return (
        <div className="min-w-screen min-h-screen flex-col-reverse items-center gap-8">
            <div className="m-10 mb-12 flex items-center gap-2">
                <img src={logo} alt="" className="w-14 h-14 rounded-lg " />
                <Typography.Title level={5} className="!font-[700] mt-2">
                    HTHD Restaurant
                </Typography.Title>
            </div>
            <div className="h-80 flex flex-col justify-center items-center text-center">
                {isError404Page && <Error404 />}
            </div>
        </div>
    );
};
export default Errors;
