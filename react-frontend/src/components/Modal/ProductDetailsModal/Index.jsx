import { Modal, Typography } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { useState } from 'react';
import { MdOutlineAccessTime } from 'react-icons/md';
import { RiTeamLine } from 'react-icons/ri';
import { formatPrice } from '~/utils/formatter';
import { Segmented, ConfigProvider } from 'antd';
import IngredientInfor from './IngredientInfor/Index';
import NutritionInfor from './NutritionInfor';
import AllergyInfor from './AllergyInfor/Index';
import { FaPlus } from 'react-icons/fa';

const options = ['Nguyên liệu', 'Dinh dưỡng', 'Dị ứng'];

// Theme riêng cho segmented trong ProductDetailsModal
const detailsTheme = {
    components: {
        Segmented: {
            itemSelectedBg: '#ffffff',
            itemSelectedColor: '#333',
            colorBgLayout: '#f0f2f5',
        },
    },
};

const ProductDetailsModal = ({ open, setOpen, product }) => {
    const [tab, setTab] = useState('Nguyên liệu');
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    if (!product) return null;

    return (
        <Modal width={650} open={open} centered onCancel={() => setOpen(false)} footer={null}>
            <div className="flex flex-col gap-3">
                <div className="font-bold text-lg">Thông tin chi tiết món ăn</div>

                {/* Infor */}
                <div className="flex gap-4 bg-bgBlue rounded-lg p-3">
                    {/* Image */}
                    <div className="bg-white rounded-lg p-3 relative w-1/2">
                        <img src={product.image} alt={product.name} className="rounded-lg w-full" />
                        <div className="flex gap-1 bg-white rounded-full absolute bottom-4 right-4 py-1 px-3 font-semibold">
                            <StarFilled className="!text-[#ffff00]" /> {product.star} ({product.starCount})
                        </div>
                    </div>

                    {/* Description */}
                    <div className="w-1/2 flex flex-col justify-between">
                        <div>
                            <Typography.Title className="!font-[800]" level={3}>
                                {product.name}
                            </Typography.Title>
                            <div className="font-semibold">{product.description}</div>
                        </div>
                        <div className="flex gap-3 items-center w-[100%] overflow-x-scroll min-height-scrollbar pb-1">
                            {[0, 1, 2, 3, 4].map((index) => (
                                <div
                                    key={index}
                                    className={`p-[6px] rounded-xl cursor-pointer flex-shrink-0 ${
                                        activeImageIndex === index ? 'bg-white ' : ''
                                    }`}
                                    style={{
                                        boxShadow:
                                            activeImageIndex === index ? '0px 0px 10px 0px rgba(0, 0, 0, 0.1)' : '',
                                    }}
                                    onClick={() => setActiveImageIndex(index)}
                                >
                                    <img src={product.image} alt="" className="rounded-lg w-16 h-16 object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Time & count */}
                <div className="flex gap-8">
                    <div className="flex gap-3 items-center">
                        <MdOutlineAccessTime className="text-lg" /> 15-20 phút
                    </div>
                    <div className="flex gap-3 items-center">
                        <RiTeamLine className="text-lg" /> 2-4 người
                    </div>
                </div>

                {/* Price */}
                <div className="flex font-bold text-primary">
                    <span className="">đ</span>
                    <span className="text-2xl">{formatPrice(product.price)}</span>
                </div>

                {/* Tabs */}
                <div className="rounded w-full">
                    <div className="bg-bgBlue rounded-lg">
                        <ConfigProvider theme={detailsTheme}>
                            <Segmented
                                options={options}
                                value={tab}
                                onChange={setTab}
                                block
                                className="prd-details-segmented !w-full !p-[6px] !font-semibold !rounded"
                                style={{
                                    display: 'flex',
                                    '--background-color': '#f0f2f5',
                                }}
                            />
                        </ConfigProvider>
                    </div>

                    <div className="mt-4 ">
                        {tab === 'Nguyên liệu' && <IngredientInfor listData={product.ingredients} />}
                        {tab === 'Dinh dưỡng' && <NutritionInfor listData={product.nutrition} />}
                        {tab === 'Dị ứng' && <AllergyInfor listData={product.allergy} />}
                    </div>
                </div>

                {/* Action */}
                <div className="flex gap-5 border-t-2 pt-3 mt-2">
                    <div className="cursor-pointer hover:opacity-75 flex border-2-[#333333] rounded font-semibold py-2 justify-center gap-3 items-center bg-[#333333] w-[65%] text-white">
                        <FaPlus />{' '}
                        <div>
                            Thêm vào đơn - <span>đ{formatPrice(product.price)}</span>
                        </div>
                    </div>

                    <div className="cursor-pointer hover:opacity-75 flex border-2 rounded font-semibold py-2 justify-center gap-3 items-center  w-[35%] ">
                        Tùy chỉnh
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ProductDetailsModal;
