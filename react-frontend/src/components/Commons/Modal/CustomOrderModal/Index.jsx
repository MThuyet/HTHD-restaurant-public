import { ConfigProvider, Modal, Segmented } from 'antd';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { formatPrice } from '~/utils/formatter';

const CustomOrderModal = ({ isOpenCustomOrderModal, setIsOpenCustomOrderModal, product }) => {
    const [tab, setTab] = useState('Đồ ăn kèm');

    const options = ['Đồ ăn kèm', 'Độ cay', 'Ghi chú'];

    const detailsTheme = {
        components: {
            Segmented: {
                itemSelectedBg: '#ffffff',
                itemSelectedColor: '#333',
                colorBgLayout: '#f0f2f5',
            },
        },
    };

    return (
        <Modal open={isOpenCustomOrderModal} onCancel={() => setIsOpenCustomOrderModal(false)} footer={null}>
            <div className="flex items-center gap-2  ">
                <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg" />
                <span className="text-sm font-bold">Tùy chỉnh: {product.name}</span>
            </div>

            <div className="mt-5">
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

                <div className="mt-3">
                    {tab === 'Đồ ăn kèm' && 'đồ ăn kèm'}
                    {tab === 'Độ cay' && 'độ cay'}
                    {tab === 'Ghi chú' && 'ghi chú'}
                </div>
            </div>

            {isMobile ? (
                <div className="flex flex-col justify-between mt-3 py-4 border-t-2 gap-3">
                    <div className="flex gap-2">
                        <div className="font-bold  text-xl">Tổng:</div>
                        <div className="font-semibold text-primary flex">
                            <span className="underline text-sm">đ</span>
                            <div className=" text-xl">{formatPrice(product.price)}</div>
                        </div>
                    </div>
                    <div className="flex gap-3 font-semibold ">
                        <div className="px-4 cursor-pointer hover:opacity-75 py-[6px] border-2 rounded">Hủy chọn</div>
                        <div className="px-4 cursor-pointer hover:opacity-75 py-[6px] border-2 border-[#333333] rounded bg-[#333333] text-white">
                            Thêm vào đơn
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-between mt-3 py-4 border-t-2 items-center">
                    <div className="flex gap-2">
                        <div className="font-bold text-base">Tổng:</div>
                        <div className="font-semibold text-primary flex">
                            <span className="underline text-xs">đ</span>
                            <div className="text-base">{formatPrice(product.price)}</div>
                        </div>
                    </div>
                    <div className="flex gap-3 font-semibold">
                        <div className="px-4 cursor-pointer hover:opacity-75 py-[6px] border-2 rounded">Hủy chọn</div>
                        <div className="px-4 cursor-pointer hover:opacity-75 py-[6px] border-2 border-[#333333] rounded bg-[#333333] text-white">
                            Thêm vào đơn
                        </div>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default CustomOrderModal;
