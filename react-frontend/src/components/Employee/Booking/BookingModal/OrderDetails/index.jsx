import { IoSearchSharp } from 'react-icons/io5';
import { FaConciergeBell, FaEdit, FaTimes } from 'react-icons/fa';
import { Segmented, Input, Button, ConfigProvider, Divider, Badge } from 'antd';

import Product from '~/components/Commons/Product';
import { products } from '~/apis/mockData';
import { categories } from '~/apis/mockData';
import { formatPrice } from '~/utils/formatter';

const options = categories.map((category) => ({
    label: <span className="px-3">{category}</span>,
    value: category,
}));

const theme = {
    components: {
        Input: {
            borderRadius: 12,
            paddingInline: 16,
            paddingBlock: 10,
            boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
            colorTextPlaceholder: 'gray', // textPrimary
        },
        Segmented: {
            itemSelectedBg: '#c3551a', // màu nền khi chọn
            itemSelectedColor: '#fff', // màu chữ khi chọn
            colorBgLayout: '#fff', // nền ngoài cùng
            colorText: '#000', // màu chữ mặc định
            borderRadius: 12,
            controlHeight: 35,
            paddingInline: 10,
        },
    },
};

const OrderBookingDetails = ({ currentBookingData }) => {
    return (
        <div className="flex flex-col px-4">
            {currentBookingData && currentBookingData.products ? (
                <div
                    className="px-2 pb-2 py-4 rounded-md overflow-y-auto bg-bgBlue"
                    style={{
                        maxHeight: currentBookingData?.completed_at ? `${window.innerHeight - 200}px` : '210px',
                    }}
                >
                    <div className="flex items-center gap-2 mb-2 font-semibold">
                        <Badge
                            color="#C3551A"
                            showZero
                            count={currentBookingData.products.reduce((acc, curr) => (acc += curr.quantity), 0)}
                        ></Badge>
                        <h2>Sản phẩm đã chọn</h2>
                        <span>-</span>
                        <h2>Tổng cộng:</h2>
                        <span className="text-primary font-bold">
                            <sup>đ</sup>
                            {formatPrice(
                                currentBookingData.products.reduce(
                                    (acc, curr) => (acc += curr.quantity * curr.price),
                                    0,
                                ),
                            )}
                        </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div
                            className="flex justify-between items-start bg-white border p-2 rounded-md"
                            style={{ boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)' }}
                        >
                            <div>
                                <div className="font-semibold">2 x Pizza Hải Sản</div>
                                <div className="text-[#808080] text-xs font-[500]">
                                    + Phô mai thêm (2)
                                    <span className="text-[10px] text-gray-400 ml-1">- Topping</span>
                                </div>
                                <div className="text-[#808080] text-xs font-[500]">
                                    + Xốt cay
                                    <span className="text-[10px] text-gray-400 ml-1">- Nước sốt</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="text-primary flex gap-[1px]">
                                    <span className="text-[10px] font-[500] underline">đ</span>
                                    <p className="font-bold text-xs">159,000</p>
                                </div>
                                {currentBookingData &&
                                    currentBookingData.products &&
                                    !currentBookingData.completed_at && (
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
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center min-h-[200px] bg-bgBlue rounded-md">
                    <FaConciergeBell className="!w-[80px] !h-[80px]" />
                    <div className="font-bold text-base">Chưa đặt món nào</div>
                </div>
            )}
            <Divider className="my-2" />
            {!currentBookingData.completed_at && (
                <div className="p-2 rounded-md bg-bgBlue">
                    <div className="grid grid-cols-2 items-center gap-2 mb-2">
                        <ConfigProvider theme={theme}>
                            <Input
                                style={{ boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)' }}
                                placeholder="Nhập tên món ăn hoặc đồ uống bạn cần tìm..."
                                prefix={<IoSearchSharp className="!mr-2 text-[22px]" />}
                                className="border-0 font-[500] px-2 py-2 h-full"
                            />
                            <Segmented
                                className=" bg-white !px-2 py-2 text-textPrimary !font-[500] overflow-x-auto border-none flex justify-between"
                                itemSelectedBg="rgba(0,0,0,0.15)"
                                options={options}
                                style={{ boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)' }}
                                onChange={(value) => {
                                    console.log(value); // string
                                }}
                            />
                        </ConfigProvider>
                    </div>
                    <div className="grid grid-cols-2 gap-3 max-h-[300px] overflow-y-auto">
                        {products.map((product) => (
                            <Product product={product} isOrder={true} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderBookingDetails;
