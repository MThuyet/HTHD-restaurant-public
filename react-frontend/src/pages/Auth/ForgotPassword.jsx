import { Input, Typography } from 'antd';
import { PhoneOutlined, LeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import ROUTES from '~/config/routes';

const ForgotPassword = () => {
    const onChange = (text) => {
        console.log('onChange:', text);
    };
    const onInput = (value) => {
        console.log('onInput:', value);
    };
    const sharedProps = {
        onChange,
        onInput,
    };

    return (
        <form action="" className="flex flex-col gap-6">
            <div>
                <Typography.Text className="text-gray-600">
                    Vui lòng nhập số điện thoại đã đăng ký tài khoản để khôi phục
                </Typography.Text>
            </div>

            {/* Số điện thoại */}
            <div>
                <label className="font-bold flex items-center gap-2 mb-2" htmlFor="phone">
                    <PhoneOutlined />
                    Số điện thoại <span className="text-red-500">*</span>
                </label>
                <div className="flex sm:gap-2 gap-3">
                    <Input
                        id="phone"
                        placeholder="Nhập số điện thoại"
                        className="!p-3 max-w-[500px] sm:min-w-[300px] min-w-[200px] !bg-bgBlue placeholder:text-textPrimary !rounded-none !border-none"
                    />
                    <button
                        type="button"
                        className="!p-3 !bg-darkBlue hover:opacity-85 rounded-md text-white text-nowrap font-bold"
                    >
                        Gửi mã
                    </button>
                </div>
            </div>

            <div className="mt-6">
                <label className="font-medium block mb-2">Mã SMS</label>
                <div className="flex gap-5">
                    <Input.OTP
                        length={6}
                        className="custom-otp"
                        separator={(i) => <span style={{ color: i & 1 ? 'red' : 'blue' }}>/</span>}
                        {...sharedProps}
                    />
                </div>
            </div>

            {/* Nút */}
            <div className="flex flex-wrap gap-4 mt-4">
                <Link to={ROUTES.login}>
                    <button
                        className="bg-[#F3F3F3] text-black font-bold py-3 px-6 rounded-lg border-none hover:opacity-85 whitespace-nowrap"
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
                    className="bg-primary text-white font-bold py-3 px-6 rounded-lg border-none hover:opacity-85 whitespace-nowrap"
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

export default ForgotPassword;
