import { FaStar } from 'react-icons/fa6';
import { formatPrice } from '~/utils/formatter';

const ProductItem = ({ data }) => {
    return (
        <div className="flex gap-3 bg-white p-3 rounded-md">
            <img src={data.image} alt={data.name} className="rounded-md w-20 h-20" />

            <div className="flex flex-col w-full">
                <div className="flex justify-between items-start">
                    <p className="font-bold text-base">{data.name}</p>
                    <span className="border rounded-full px-3 font-semibold">{data.category}</span>
                </div>

                <div className="flex">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1 items-center">
                            <FaStar className="text-[#FACC16]" />
                            <span className="font-semibold">{data.rating}</span>
                        </div>
                        <span className="text-gray-500 font-semibold">({data.reviews} đánh giá)</span>
                    </div>
                </div>

                <div className="text-[#808080] line-clamp-2 text-sm">{data.description}</div>

                <div className="mt-2 flex justify-between items-center text-gray-500">
                    <div className="font-bold text-base text-primary">{formatPrice(data.price)}đ</div>
                    <div className="text-xs">{data.lastUpdated}</div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
