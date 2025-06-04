import { Input, Typography } from 'antd';
import { LockOutlined, LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';

const ResetPassword = () => {
    return (
        <form action="" className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 mt-8">
                <div>
                    <label className="font-bold flex items-center gap-2 mb-2">
                        <LockOutlined /> Mật khẩu mới
                    </label>
                    <Input.Password
                        id="password"
                        placeholder="Nhập mật khẩu mới..."
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
                        placeholder="Nhập lại mật khẩu mới..."
                        className="!p-3 max-w-[500px] min-w-[300px] !bg-bgBlue placeholder:text-textPrimary !rounded-none !border-none"
                    />
                </div>

                <div className="flex gap-4 mt-4">
                    <Link to={routes.loginRoute}>
                        <button
                            className="bg-[#ececec] font-bold py-3 px-10 rounded-lg border-none hover:opacity-85"
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
                        className="bg-primary text-white font-bold py-3 px-10 rounded-lg border-none hover:opacity-85"
                        style={{
                            boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
                        }}
                    >
                        Xác nhận
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ResetPassword;
