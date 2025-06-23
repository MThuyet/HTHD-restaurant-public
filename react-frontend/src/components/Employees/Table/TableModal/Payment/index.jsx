import { useState } from 'react';
import { Divider, Button } from 'antd';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { UserOutlined, PhoneOutlined, CreditCardOutlined, QrcodeOutlined } from '@ant-design/icons';

import { formatPrice } from '~/utils/formatter';
import OrderItem from './OrderItem';

const PAYMENT_METHODS = {
    CASH: {
        name: 'Tiền mặt',
        icon: <FaRegMoneyBillAlt className="text-xl" />,
    },
    CARD: {
        name: 'Quẹt thẻ',
        icon: <CreditCardOutlined className="text-xl" />,
    },
    TRANSFER: {
        name: 'Chuyển khoản',
        icon: <QrcodeOutlined className="text-xl" />,
    },
};

const Payment = ({ setIsOpenTableModal, currentTableData }) => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(Object.keys(PAYMENT_METHODS)[0]);

    return (
        <>
            <div className="max-h-[550px] overflow-y-auto">
                <div className="p-4 border rounded-md mb-3">
                    <h2 className="font-bold mb-3 text-lg">Thông tin khách hàng</h2>
                    <div className="grid grid-cols-2">
                        <div className="flex items-center gap-2">
                            <UserOutlined />
                            <div>
                                <label className="text-gray-400">Họ và tên </label>
                                <p className="font-semibold">Nguyễn Minh Tuyết</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <PhoneOutlined />
                            <div>
                                <label className="text-gray-400">Số điện thoại </label>
                                <p className="font-semibold">0332600111</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 border rounded-md mb-3">
                    <h2 className="font-bold mb-3 text-lg">Hóa đơn</h2>
                    <OrderItem currentTableData={currentTableData} />
                    <Divider style={{ borderColor: '#d9d9d9' }} className="my-2"></Divider>
                    <div className="flex items-center justify-between">
                        <span>Tạm tính:</span>
                        <span>
                            <sup>đ</sup>
                            {formatPrice(500000)}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span>VAT (10%):</span>
                        <span>
                            <sup>đ</sup>
                            {formatPrice((500000 / 100) * 10)}
                        </span>
                    </div>
                    <Divider style={{ borderColor: '#d9d9d9' }} className="my-2"></Divider>
                    <div className="flex items-center justify-between font-semibold">
                        <span className="text-lg">Tổng cộng:</span>
                        <span className="text-primary">
                            <sup>đ</sup>
                            {formatPrice((500000 / 100) * 10)}
                        </span>
                    </div>
                </div>
                <div className="p-4 border rounded-md">
                    <h2 className="font-bold mb-3 text-lg">Phương thức thanh toán</h2>
                    <div className="grid grid-cols-3 items-center gap-3">
                        {Object.entries(PAYMENT_METHODS).map(([key, element]) => (
                            <div
                                className={`flex flex-col items-center py-2 gap-2 border rounded-md ${
                                    selectedPaymentMethod === key ? `border-primary text-primary` : ''
                                } hover:bg-gray-50 cursor-pointer`}
                                key={key}
                                onClick={() => setSelectedPaymentMethod(key)}
                            >
                                {element.icon}
                                {element.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
                <Button type="primary" className="py-5 w-[75%] text-lg">
                    Thanh toán{' '}
                    <span>
                        <sup>đ</sup>
                        {formatPrice(500000)}
                    </span>
                </Button>
                <Button className="py-5 w-[25%] text-lg" onClick={() => setIsOpenTableModal(false)}>
                    Đóng
                </Button>
            </div>
        </>
    );
};

export default Payment;
