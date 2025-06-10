import { ConfigProvider } from 'antd';
import { alreadyOrdered, currentSelectedItem } from '~/apis/mockData';
import OrderSideBar from './OrderSideBar';
import OrderMenu from './OrderMenu';
import Header from '~/pages/Common/Order/Header';
import InputSearchMenu from '~/pages/Common/Order/InputSearchMenu';

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

const Order = () => {
    return (
        <ConfigProvider theme={theme}>
            <div className="flex tablet-container overflow-hidden h-screen">
                <div className="w-[70%] sm:flex hidden flex-col gap-3 bg-bgBlue px-3 py-2 ">
                    {/* Header*/}
                    <Header />

                    {/* Search */}
                    <InputSearchMenu />

                    {/* Menu */}
                    <OrderMenu />
                </div>
                <div className="sm:w-[30%] w-full">
                    <OrderSideBar currentSelectedItem={currentSelectedItem} alreadyOrdered={alreadyOrdered} />
                </div>
            </div>
        </ConfigProvider>
    );
};

export default Order;
