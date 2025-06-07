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
import { isMobile } from 'react-device-detect';
import { IoClose } from 'react-icons/io5';
import SimpleBar from 'simplebar-react';

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
        <Modal
            width={650}
            open={open}
            className="product-details-modal"
            centered
            onCancel={() => setOpen(false)}
            footer={null}
            closeIcon={null}
            styles={{
                body: {
                    padding: 0,
                    maxHeight: `${isMobile ? `${window.innerHeight - 50}px` : '100vh'}`,
                    overflowY: 'hidden',
                },
            }}
        >
            <div className="sticky top-0 z-10 bg-white flex justify-between items-center py-2">
                <div className="font-bold text-lg">Thông tin chi tiết món ăn</div>
                <IoClose className="text-3xl cursor-pointer" onClick={() => setOpen(false)} />
            </div>

            <SimpleBar style={{ maxHeight: isMobile ? `${window.innerHeight - 100}px` : '100vh' }}>
                <div className="">
                    {isMobile ? (
                        <div className="flex flex-col gap-4 bg-bgBlue rounded-lg p-3">
                            {/* Infor */}
                            <div>
                                <div>
                                    <Typography.Title className="!font-[800]" level={3}>
                                        {product.name}
                                    </Typography.Title>
                                    <div className="font-semibold">{product.description}</div>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="bg-white rounded-lg p-3 relative">
                                <img src={product.image} alt={product.name} className="rounded-lg w-full" />
                                <div className="flex gap-1 bg-white rounded-full absolute bottom-4 right-4 py-1 px-3 font-semibold">
                                    <StarFilled className="!text-[#ffff00]" /> {product.star} ({product.starCount})
                                </div>
                            </div>

                            <div className="w-full overflow-x-auto min-height-scrollbar">
                                <div className="flex gap-3 items-center w-[100%] pb-1">
                                    {[0, 1, 2, 3, 4].map((index) => (
                                        <div
                                            key={index}
                                            className={`p-[6px] rounded-xl cursor-pointer flex-shrink-0 ${
                                                activeImageIndex === index ? 'bg-white ' : ''
                                            }`}
                                            style={{
                                                boxShadow:
                                                    activeImageIndex === index
                                                        ? '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
                                                        : '',
                                            }}
                                            onClick={() => setActiveImageIndex(index)}
                                        >
                                            <img
                                                src={product.image}
                                                alt=""
                                                className="rounded-lg w-16 h-16 object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
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
                                <div className="flex gap-1 items-center w-[100%] pb-1 overflow-x-auto min-height-scrollbar">
                                    {[0, 1, 2, 3, 4].map((index) => (
                                        <div
                                            key={index}
                                            className={`p-[6px] rounded-xl cursor-pointer flex-shrink-0 ${
                                                activeImageIndex === index ? 'bg-white ' : ''
                                            }`}
                                            style={{
                                                boxShadow:
                                                    activeImageIndex === index
                                                        ? '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'
                                                        : '',
                                            }}
                                            onClick={() => setActiveImageIndex(index)}
                                        >
                                            <img
                                                src={product.image}
                                                alt=""
                                                className="rounded-lg w-16 h-16 object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Time & count */}
                    <div className="flex gap-8 mt-3">
                        <div className="flex gap-3 items-center">
                            <MdOutlineAccessTime className="text-lg" /> 15-20 phút
                        </div>
                        <div className="flex gap-3 items-center">
                            <RiTeamLine className="text-lg" /> 2-4 người
                        </div>
                    </div>

                    {/* Price */}
                    <div className="flex font-bold text-primary mt-3">
                        <span className="">đ</span>
                        <span className="text-2xl">{formatPrice(product.price)}</span>
                    </div>

                    {/* Tabs */}
                    <div className="rounded w-full mt-3">
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
                    <div className="flex gap-5 border-t-2 pt-3 mt-4">
                        <div className="cursor-pointer hover:opacity-75 flex border-2-[#333333] rounded font-semibold py-2 justify-center gap-3 items-center bg-[#333333] w-[65%] text-white">
                            <FaPlus />{' '}
                            <div>Thêm vào đơn {isMobile ? '' : <span>- đ{formatPrice(product.price)}</span>}</div>
                        </div>

                        <div className="cursor-pointer hover:opacity-75 flex border-2 rounded font-semibold py-2 justify-center gap-3 items-center w-[35%] ">
                            Tùy chỉnh
                        </div>
                    </div>
                </div>
            </SimpleBar>
        </Modal>
    );
};

export default ProductDetailsModal;
