import { formatPrice } from '~/utils/formatter';

const OrderItem = ({ order }) => {
    return (
        <div className="grid grid-cols-2">
            <div>
                <h4 className="font-semibold">Gà chiên nướng mắm</h4>
                <span>
                    <sup>đ</sup>
                    {formatPrice(250000)} x 2
                </span>
            </div>
            <div className="font-semibold text-[15px] text-end">
                <sup>đ</sup>
                {formatPrice(500000)}
            </div>
        </div>
    );
};

export default OrderItem;
