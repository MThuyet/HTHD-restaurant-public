import { useNavigate } from 'react-router-dom';

import logo from '~/assets/common/logo.webp';
import { Typography } from 'antd';

const Errors = ({ title = 404, content = 'Không tìm thấy trang' }) => {
    const navigate = useNavigate();

    return (
        <div className="min-w-screen min-h-screen flex-col-reverse items-center gap-8">
            <div className="m-10 mb-12 flex items-center gap-2">
                <img src={logo} alt="" className="w-14 h-14 rounded-lg " />
                <Typography.Title level={5} className="!font-[700] mt-2">
                    HTHD Restaurant
                </Typography.Title>
            </div>
            <div className="h-80 flex flex-col justify-center items-center text-center">
                <div>
                    <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-amber-700 to-orange-400">
                        {title}
                    </h1>
                    <h2 className="mt-10 text-2xl font-extrabold text-black">{content}</h2>

                    <button
                        onClick={() => navigate('/')}
                        className="mt-4 px-6 py-2 bg-amber-700 hover:bg-amber-800 text-white font-extrabold rounded shadow"
                    >
                        Trở lại trang chủ
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Errors;
