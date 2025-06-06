import { Modal, Typography } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { useState } from 'react';
import { MdOutlineAccessTime } from 'react-icons/md';
import { RiTeamLine } from 'react-icons/ri';
import { formatPrice } from '~/utils/formatter';
import { Segmented } from 'antd';

const options = ['Nguyên liệu', 'Dinh dưỡng', 'Dị ứng'];

const ProductDetailsModal = ({ open, setOpen, product }) => {
    const [tab, setTab] = useState('Nguyên liệu');
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    if (!product) return null;

    return (
        <Modal width={650} open={open} onCancel={() => setOpen(false)} footer={null}>
            <div className="flex flex-col gap-3">
                <div className="font-bold text-lg">Thông tin chi tiết món ăn</div>

                {/* Infor */}
                <div className="flex gap-4 bg-whiteBlue rounded-lg p-3">
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
                                        activeImageIndex === index ? 'bg-white border border-gray-300' : ''
                                    }`}
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
                <div className="bg-gray-100 p-2 rounded w-full">
                    <Segmented
                        options={options}
                        value={tab}
                        onChange={setTab}
                        block
                        className="!w-full !p-0 !font-semibold !bg-gray-100 !rounded"
                        style={{ display: 'flex' }}
                    />

                    <div className="mt-4">
                        {tab === 'Nguyên liệu' && <div>Danh sách nguyên liệu...</div>}
                        {tab === 'Dinh dưỡng' && <div>Thông tin dinh dưỡng...</div>}
                        {tab === 'Dị ứng' && <div>Thành phần dễ gây dị ứng...</div>}
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ProductDetailsModal;
