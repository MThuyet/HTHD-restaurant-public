import { ConfigProvider } from 'antd';
import { alreadyOrdered, currentSelectedItem } from '~/apis/mockData';
import OrderSideBar from './OrderSideBar';
import OrderMenu from './OrderMenu';
import Header from '~/pages/Common/Order/Header';
import InputSearchMenu from '~/pages/Common/Order/InputSearchMenu';

const Order = () => {
    return (
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
    );
};

export default Order;
