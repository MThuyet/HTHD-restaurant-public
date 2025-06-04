import React from 'react';
import { Button, Input, Typography } from 'antd';
import { LockOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import routes from '~/config/routes';

const ResetPassword = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-md w-full">
            <Typography.Title level={2} className="!text-orange-700 !font-bold">
                Đặt mật khẩu mới
            </Typography.Title>

            <div className="flex flex-col gap-4 mt-8">
                <div>
                    <label className="font-semibold">Mật khẩu mới</label>
                    <Input.Password
                        placeholder="Nhập mật khẩu..."
                        prefix={<LockOutlined />}
                        className="!p-3 max-w-[500px] min-w-[300px] !bg-bgBlue placeholder:text-textPrimary !rounded-none !border-none"
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

                <div>
                    <label className="font-semibold">Xác nhận mật khẩu mới</label>
                    <Input.Password
                        placeholder="Nhập mật khẩu..."
                        prefix={<LockOutlined />}
                        className="!p-3 max-w-[500px] min-w-[300px] !bg-bgBlue placeholder:text-textPrimary !rounded-none !border-none"
                    />
                </div>

                <div className="flex gap-3 mt-4">
                    <Button icon={<ArrowLeftOutlined />} onClick={() => navigate(routes.loginRoute)}>
                        Trở về đăng nhập
                    </Button>

                    <Button type="primary" className="bg-orange-700 hover:bg-orange-600">
                        Xác nhận
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
