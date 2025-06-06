import { Button } from 'antd';
import { useState } from 'react';
import { FaEdit, FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import { formatPrice } from '~/utils/formatter';

const OrderDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const price = 230000;
    const note = 'abc';

    return (
        <div className="flex flex-col gap-3">
            <div className="border rounded-lg p-3 flex flex-col gap-1 max-w-md">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="font-semibold">{quantity} x Thịt heo xào hành tây</div>
                        <div className="text-[#808080] text-xs font-[500]">+ Thịt heo thêm (0.5)</div>
                        <div className="text-[#808080] text-xs font-[500]">Độ cay: Nhẹ</div>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="text-primary flex gap-[1px]">
                            <span className="text-[10px] font-[500] underline">đ</span>
                            <p className="font-bold text-xs">{formatPrice(price)}</p>
                        </div>
                        <div className="flex gap-2 mt-2">
                            <Button
                                className="rounded custom-antd-btn-dark-blue text-darkBlue custom-antd-btn-black"
                                icon={<FaEdit />}
                            ></Button>
                            <Button
                                className="rounded  custom-antd-btn-dark-red text-darkRed"
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
                    <span className="font-semibold">Ghi chú:</span> {note}
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
