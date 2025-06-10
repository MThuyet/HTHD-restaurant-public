import { Input } from 'antd';
import { LockOutlined, LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ROUTES } from '~/utils/routes';

const ResetPassword = () => {
    return (
        <form action="" className="flex flex-col gap-6">
            <div>
                <label className="font-bold flex items-center gap-2 mb-2">
                    <LockOutlined /> Mật khẩu mới
                </label>
                <Input.Password
                    id="password"
                    placeholder="Nhập mật khẩu..."
                    className="!p-3 max-w-[500px] min-w-[300px] !bg-bgBlue placeholder:text-textPrimary !rounded-none !border-none"
                />
            </div>

            <div>
                <label className="font-bold flex items-center gap-2 mb-2">
                    <LockOutlined />
                    Xác nhận mật khẩu mới
                </label>
                <Input.Password
                    id="confirmPassword"
                    placeholder="Nhập mật khẩu..."
                    className="!p-3 max-w-[500px] min-w-[300px] !bg-bgBlue placeholder:text-textPrimary !rounded-none !border-none"
                />
            </div>

            <div className="flex gap-4 mt-4">
                <Link to={ROUTES.PUBLIC_ROUTES.forgotPassword}>
                    <button
                        className="bg-[#F3F3F3] text-black font-bold py-3 sm:px-10 px-6 whitespace-nowrap rounded-lg border-none hover:opacity-85"
                        style={{
                            boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
                        }}
                    >
                        <LeftOutlined className="mr-2" />
                        Trở về đăng nhập
                    </button>
                </Link>
                <button
                    type="submit"
                    className="bg-primary text-white font-bold py-3 sm:px-10 px-6 whitespace-nowrap rounded-lg border-none hover:opacity-85"
                    style={{
                        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
                    }}
                >
                    Xác nhận
                </button>
            </div>
        </form>
    );
};

export default ResetPassword;
