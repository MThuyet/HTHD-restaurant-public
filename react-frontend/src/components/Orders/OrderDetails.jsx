import { Button } from 'antd';
import { useState } from 'react';
import { FaEdit, FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import { formatPrice } from '~/utils/formatter';
import { FaAngleDown } from 'react-icons/fa';

// Sử dụng lại cấu trúc statusOrdered từ OrderedStatus
const statusOrdered = {
    pending: {
        label: 'Chờ tiếp nhận',
        className: 'text-darkBlue',
        dotColor: 'bg-whiteBlue border-darkBlue',
    },
    processing: {
        label: 'Đang chế biến',
        className: 'text-darkYellow',
        dotColor: 'bg-whiteYellow border-darkYellow',
    },
    served: {
        label: 'Đã phục vụ',
        className: 'text-darkGreen',
        dotColor: 'bg-whiteGreen border-darkGreen',
    },
    cancelled: {
        label: 'Đã hủy',
        className: 'text-darkRed',
        dotColor: 'bg-whiteRed border-darkRed',
    },
};

const OrderDetails = ({ isOrdered, data }) => {
    const [quantity, setQuantity] = useState(data?.quantity || 1);

    // Lấy thông tin trạng thái từ data nếu có
    const status = data?.status ? statusOrdered[data.status] : statusOrdered.pending;

    return (
        <div className="flex flex-col gap-3">
            <div className="border rounded-lg p-3 flex flex-col gap-1 max-w-md">
                {isOrdered && (
                    <div className="flex items-center justify-between rounded-full font-semibold">
                        <div className="flex items-center gap-1 text-xs">
                            <div className={`w-4 h-4 rounded-full ${status.dotColor} border mr-1`}></div>
                            <p className={status.className}>{status.label}</p> - <span>Lúc {data.orderTime}</span>
                        </div>
                        <FaAngleDown className="text-lg" />
                    </div>
                )}
                <div className="flex justify-between items-start">
                    <div>
                        <div className="font-semibold">
                            {quantity} x {data.name}
                        </div>
                        {data.options?.map((option, optionIndex) =>
                            option.items.map((item, itemIndex) => (
                                <div key={`${optionIndex}-${itemIndex}`} className="text-[#808080] text-xs font-[500]">
                                    + {item.name} {item.quantity && `(${item.quantity})`}
                                    <span className="text-[10px] text-gray-400 ml-1">- {option.type}</span>
                                </div>
                            )),
                        )}
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="text-primary flex gap-[1px]">
                            <span className="text-[10px] font-[500] underline">đ</span>
                            <p className="font-bold text-xs">{formatPrice(data.price)}</p>
                        </div>
                        <div className="flex gap-2 mt-2">
                            <Button
                                className="rounded custom-antd-btn-dark-blue text-darkBlue custom-antd-btn-black"
                                icon={<FaEdit />}
                            ></Button>
                            <Button
                                className="rounded custom-antd-btn-dark-red text-darkRed"
                                icon={<FaTimes />}
                            ></Button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3 mt-1">
                    <Button
                        className="rounded"
                        icon={<FaMinus />}
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    ></Button>
                    <span className="font-semibold">{quantity}</span>
                    <Button className="rounded" icon={<FaPlus />} onClick={() => setQuantity((q) => q + 1)}></Button>
                </div>
                <div className="text-xs">
                    <span className="font-semibold">Ghi chú:</span> {data.note || 'Không có'}
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
