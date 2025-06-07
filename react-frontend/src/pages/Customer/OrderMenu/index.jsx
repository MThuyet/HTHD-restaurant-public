import { ConfigProvider } from 'antd';
import { Segmented } from 'antd';
import Product from '~/components/Product';
import { alreadyOrdered, categories, currentSelectedItem, products } from '~/apis/mockData';
import OrderSideBar from './OrderSideBar';
import { isMobile } from 'react-device-detect';
import Header from '~/components/Header/Index';
import InputSearchMenu from '~/components/InputSearchMenu/Index';

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
    return (
        <ConfigProvider theme={theme}>
            <div className="flex tablet-container overflow-hidden h-screen">
                <div className="w-[70%] sm:flex hidden flex-col gap-3 bg-bgBlue px-3 py-2 ">
                    {/* Header*/}
                    <Header />

                    {/* Search */}
                    <InputSearchMenu />

                    {/* Segmented */}
                    {!isMobile && (
                        <Segmented
                            className="bg-white !px-2 py-2 text-textPrimary !font-[500] overflow-x-auto !flex-shrink-0 border-none"
                            options={options}
                            style={{ boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)' }}
                            onChange={(value) => {
                                console.log(value); // string
                            }}
                        />
                    )}

                    {/* Content */}
                    <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-2 gap-3 items-center overflow-y-scroll">
                        {products.map((product) => {
                            return <Product key={product.id} product={product} isOrder={true} />;
                        })}
                    </div>
                </div>
                <div className="sm:w-[30%] w-full">
                    <OrderSideBar currentSelectedItem={currentSelectedItem} alreadyOrdered={alreadyOrdered} />
                </div>
            </div>
        </ConfigProvider>
    );
};

export default OrderMenu;
