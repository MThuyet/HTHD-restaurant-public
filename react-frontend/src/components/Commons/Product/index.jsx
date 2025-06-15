import { StarFilled } from '@ant-design/icons';
import { Typography } from 'antd';
import { formatPrice } from '~/utils/formatter';
import { MdOutlineAccessTime } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';
import ProductDetailsModal from '../Modal/ProductDetailsModal';
import { useState } from 'react';
import CustomOrderModal from '~/components/Commons/Modal/CustomOrderModal';

const Product = ({ product, isOrder = false }) => {
    const [isOpenDetails, setIsOpenDetails] = useState(false);
    const [isOpenCustomOrder, setIsOpenCustomOrder] = useState(false);

    return (
        <div
            className={`p-2 rounded-md flex gap-2 items-center justify-center border-[1.5px] ${
                isOrder ? 'bg-white' : 'bg-transparent'
            }`}
            style={{ boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)' }}
        >
            <img
                src={product.image}
                alt={product.name}
                className="cursor-pointer sm:w-[100px] w-[120px] object-cover rounded-lg"
                onClick={() => setIsOpenDetails(true)}
            />

            {/* Modal Details*/}
            <ProductDetailsModal product={product} open={isOpenDetails} setOpen={setIsOpenDetails} />

            <div className="">
                <div className="flex flex-col">
                    <Typography.Title
                        level={5}
                        className={`sm:!text-base !text-[13px] !m-0 ${isOrder ? '' : '!text-white'}`}
                    >
                        {product.name}
                    </Typography.Title>

                    <div className="flex items-center text-[11px] font-[500] gap-2 mt-1">
                        <div className="flex gap-[3px] items-center">
                            <div className="flex gap-[2px]">
                                <StarFilled className="!text-[#ffff00]" /> {product.star}
                            </div>
                            ({product.starCount})
                        </div>
                        <div className="flex gap-[3px] items-center">
                            <div className="flex gap-[2px]">
                                <MdOutlineAccessTime className="!mt-[2px]" /> {product.time}
                            </div>
                            (phút)
                        </div>
                    </div>

                    <div className={`mt-1 text-[11px] font-[500] ${isOrder ? 'text-[#808080]' : '!text-white'}`}>
                        {product.description}
                    </div>
                </div>

                <div className="flex items-center justify-between mt-2 flex-wrap ">
                    <div className="text-primary flex gap-[1px] sm:mb-0 mb-2">
                        <span className="text-[10px] font-[500] underline">đ</span>
                        <p className="font-bold text-xs">{formatPrice(product.price)}</p>
                    </div>

                    {isOrder && (
                        <div className="flex sm:gap-1 gap-4 text-xs">
                            <button
                                className="flex items-center gap-2 font-[500] !text-white bg-[#333333] !px-4 !py-1 rounded-md"
                                style={{ border: '2px solid #333333' }}
                            >
                                <FaPlus /> Thêm
                            </button>
                            <button
                                className="!px-3 !py-1 rounded-md font-bold"
                                style={{ border: '2px solid #D9D9D9' }}
                                onClick={() => setIsOpenCustomOrder(true)}
                            >
                                Tùy chỉnh
                            </button>

                            {/* Modal Custom Order */}
                            <CustomOrderModal
                                isOpenCustomOrderModal={isOpenCustomOrder}
                                setIsOpenCustomOrderModal={setIsOpenCustomOrder}
                                product={product}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;
