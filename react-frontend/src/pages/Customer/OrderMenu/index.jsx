import logo from '~/assets/logo.webp';
import { Input } from 'antd';
import { ConfigProvider } from 'antd';
import { Segmented } from 'antd';
import ProductItem from '~/components/ProductItem';
import { IoSearchSharp } from 'react-icons/io5';
import { FaArrowLeft } from 'react-icons/fa';
import { FaQrcode } from 'react-icons/fa';
import { alreadyOrdered, categories, currentSelectedItem, products } from '~/apis/mockData';
import { useState } from 'react';
import QrCodeModal from '~/components/Modal/QrCodeModal';
import OrderSideBar from './OrderSideBar';

// ghi đè theme gốc của antd
const theme = {
    components: {
        Input: {
            borderRadius: 12,
            paddingInline: 16,
            paddingBlock: 10,
            boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
            colorTextPlaceholder: '#333', // textPrimary
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

// customize option
const options = categories.map((category) => ({
    label: <span className="px-3">{category}</span>,
    value: category,
}));

const OrderMenu = () => {
    const [isOpenQrCodeModal, setIsOpenQrCodeModal] = useState(false);
    const [valueQr, setValueQr] = useState('');

    return (
        <ConfigProvider theme={theme}>
            <div className="flex tablet-container overflow-hidden h-screen">
                <div className="sm:w-[70%] w-full flex flex-col gap-3 bg-bgBlue px-3 py-2">
                    {/* Header */}
                    <header className="flex justify-between items-center">
                        <div
                            style={{ boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)' }}
                            className="cursor-pointer font-bold px-4 py-[10px] bg-white rounded-xl flex items-center gap-2 text-sm h-[42px]"
                        >
                            <FaArrowLeft className="testIcon !text-base" />
                            Quay lại
                        </div>

                        <div className="flex items-center gap-2">
                            <img src={logo} alt="logo" className="w-12 h-12 rounded-lg" />
                            <span className="text-sm font-bold">HTHD Restaurant</span>
                        </div>

                        <div
                            onClick={() => {
                                setIsOpenQrCodeModal(true);
                                setValueQr({
                                    title: 'Bàn A',
                                    value: 'https://ant.design/',
                                });
                            }}
                            style={{ boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)' }}
                            className="cursor-pointer flex items-center justify-between bg-white px-4 py-[10px] rounded-xl gap-2 text-sm h-[42px]"
                        >
                            <div className="flex items-center gap-1 font-bold">
                                <FaQrcode />
                                QR code
                            </div>
                            <div className="bg-[#808080] text-white px-2 py-1 rounded uppercase font-[500]">Bàn 1</div>
                        </div>
                    </header>

                    {/* Search */}
                    <Input
                        style={{ boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)' }}
                        placeholder="Nhập tên món ăn hoặc đồ uống bạn cần tìm..."
                        prefix={<IoSearchSharp className="!mr-2 text-[22px]" />}
                        className="border-0 font-[500]"
                    />

                    {/* Segmented */}
                    <Segmented
                        className="bg-white !px-2 py-2 text-textPrimary !font-[500] overflow-x-auto !flex-shrink-0 border-none"
                        options={options}
                        style={{ boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)' }}
                        onChange={(value) => {
                            console.log(value); // string
                        }}
                    />

                    {/* Content */}
                    <div className="grid grid-cols-2 gap-2 items-center overflow-y-scroll">
                        {products.map((product) => {
                            return <ProductItem key={product.id} product={product} isOrder={true} />;
                        })}
                    </div>
                </div>
                <div className="w-[30%] border h-full">
                    <OrderSideBar currentSelectedItem={currentSelectedItem} alreadyOrdered={alreadyOrdered} />
                </div>
            </div>

            {/* Modal Qr Code */}
            <QrCodeModal
                isOpenQrCodeModal={isOpenQrCodeModal}
                setIsOpenQrCodeModal={setIsOpenQrCodeModal}
                valueQr={valueQr}
            />
        </ConfigProvider>
    );
};

export default OrderMenu;
