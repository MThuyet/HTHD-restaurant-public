import { Button, Input } from 'antd';
import { FaConciergeBell } from 'react-icons/fa';
import { formatPrice } from '~/utils/formatter';

const OrderFooter = ({ totalPrice = 230000, isOrdered = true }) => {
    return (
        <div className="border-t p-3 bg-white w-full z-10 ">
            {isOrdered && <Input.TextArea placeholder="Ghi chú chung" className="mb-4" rows={2} />}

            <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-bold">Tổng</span>
                <div className="text-primary flex gap-[1px] items-center">
                    <span className="text-sm mb-2 font-[500] underline">đ</span>
                    <p className="font-bold text-lg">{formatPrice(totalPrice)}</p>
                </div>
            </div>

            {isOrdered && (
                <Button
                    type="primary"
                    block
                    className="bg-primary text-white font-bold flex items-center justify-center "
                    icon={<FaConciergeBell className="mr-2 text-base" />}
                >
                    Gửi món đến bếp
                </Button>
            )}

            <div className="text-center text-xs text-gray-500 mt-4">* Bạn có thể đặt thêm món bất kỳ lúc nào</div>
        </div>
    );
};

export default OrderFooter;
