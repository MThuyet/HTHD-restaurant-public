import React, { useContext } from 'react';
import { App, Input } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ROUTES } from '~/utils/routes';
import { Controller, useForm } from 'react-hook-form';
import { VALIDATE_PASSWORD, VALIDATE_USERNAME } from '~/utils/formatter';
import FormFieldError from '~/components/Employees/FormFieldError';
import { loginAPI } from '~/apis';
import UserContext from '~/contexts/UserContext';

const Login = () => {
    const { loginUser } = useContext(UserContext);
    const { message } = App.useApp();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await loginAPI(data);
            // lưu thông tin người dùng vào context
            loginUser(response.data);
            // Lưu token vào sessionStorage
            if (response?.token) {
                sessionStorage.setItem('token', response.token);
            }
            message.success('Đăng nhập thành công');
        } catch (error) {
            message.error(error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div>
                <label className="font-bold flex items-center gap-2 mb-2" htmlFor="username">
                    <UserOutlined />
                    Tên tài khoản
                </label>
                <Controller
                    name="username"
                    control={control}
                    rules={VALIDATE_USERNAME}
                    render={({ field }) => (
                        <Input
                            {...field}
                            id="username"
                            className="!p-3 max-w-[500px] min-w-[300px] !bg-bgBlue placeholder:text-textPrimary !rounded-none !border-none"
                            placeholder="Nhập tên tài khoản"
                        />
                    )}
                />
                {errors.username && <FormFieldError errors={errors} fieldName="username" />}
            </div>
            <div>
                <label className="font-bold flex items-center gap-2 mb-2" htmlFor="password">
                    <LockOutlined />
                    Mật khẩu
                </label>
                <Controller
                    name="password"
                    control={control}
                    rules={VALIDATE_PASSWORD}
                    render={({ field }) => (
                        <Input.Password
                            {...field}
                            className="!p-3 max-w-[500px] min-w-[300px] !bg-bgBlue placeholder:text-textPrimary !rounded-none !border-none"
                            id="password"
                            placeholder="Nhập mật khẩu..."
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    )}
                />
                {errors.password && <FormFieldError errors={errors} fieldName="password" />}
            </div>
            <div className="flex gap-4 mt-4">
                <button
                    type="submit"
                    className="bg-primary text-nowrap text-white font-bold py-3 sm:px-10 px-6 rounded-lg border-none hover:opacity-85 interceptor-loading"
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
