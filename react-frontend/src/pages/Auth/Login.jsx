import React from 'react';
import { Input } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ROUTES } from '~/utils/routes';

const Login = () => {
    return (
        <form action="" className="flex flex-col gap-6">
            <div>
                <label className="font-bold flex items-center gap-2 mb-2" htmlFor="username">
                    <UserOutlined />
                    Tên tài khoản
                </label>
                <Input
                    id="username"
                    className="!p-3 max-w-[500px] min-w-[300px] !bg-bgBlue placeholder:text-textPrimary !rounded-none !border-none"
                    placeholder="Nhập tên tài khoản"
                />
            </div>
            <div>
                <label className="font-bold flex items-center gap-2 mb-2" htmlFor="password">
                    <LockOutlined />
                    Mật khẩu
                </label>
                <Input.Password
                    className="!p-3 max-w-[500px] min-w-[300px] !bg-bgBlue placeholder:text-textPrimary  !rounded-none !border-none"
                    id="password"
                    placeholder="Nhập mật khẩu..."
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </div>
            <div className="flex gap-4 mt-4">
                <button
                    type="submit"
                    className="bg-primary text-nowrap text-white font-bold py-3 sm:px-10 px-6 rounded-lg border-none hover:opacity-85"
                    style={{
                        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
                    }}
                >
                    Đăng nhập
                </button>
                <Link to={ROUTES.PUBLIC_ROUTES.forgotPassword}>
                    <button
                        className="bg-[#F3F3F3] text-nowrap text-black font-bold py-3 sm:px-10 px-6 rounded-lg border-none hover:opacity-85"
                        style={{
                            boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
                        }}
                    >
                        Quên mật khẩu
                    </button>
                </Link>
            </div>
        </form>
    );
};

export default Login;
