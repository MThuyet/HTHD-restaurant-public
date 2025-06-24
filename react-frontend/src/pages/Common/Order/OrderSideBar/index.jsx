import { Tabs } from 'antd';
import AlreadyOrdered from './OrderList/AlreadyOrdered';
import CurrentSelectedOrder from './OrderList/CurrentSelectedOrder';
import { isDesktop, isTablet } from 'react-device-detect';
import Header from '~/pages/Common/Order/Header';
import InputSearchMenu from '~/pages/Common/Order/InputSearchMenu';
import OrderListMobile from './OrderList/OrderListMobile';

const onChange = (key) => {
    console.log(key);
};

const OrderSideBar = ({ currentSelectedItem, alreadyOrdered }) => {
    const isEmpty = () => {
        return currentSelectedItem.length === 0 && alreadyOrdered.length === 0;
    };

    const getItems = () => {
        const baseItems = [
            {
                key: '1',
                label: (
                    <div className="flex items-center">
                        <span className=" font-[500]">Món đang chọn</span>
                        <span className="ml-1 flex items-center justify-center bg-primary text-white rounded-full w-6 h-6 font-[500]">
                            {currentSelectedItem.length}
                        </span>
                    </div>
                ),
                children: <CurrentSelectedOrder listItem={currentSelectedItem} />,
            },
            {
                key: '2',
                label: (
                    <div className="flex items-center">
                        <span className="font-[500]">Món đã gọi</span>
                        <span className="ml-1 flex items-center justify-center bg-primary text-white rounded-full w-6 h-6 font-[500]">
                            {alreadyOrdered.length}
                        </span>
                    </div>
                ),
                children: <AlreadyOrdered listItem={alreadyOrdered} />,
            },
        ];

        if (!isTablet && !isDesktop) {
            return [
                baseItems[0],
                {
                    key: '3',
                    label: (
                        <div className="flex items-center">
                            <span className="font-[500]">Menu</span>
                        </div>
                    ),
                    children: <OrderListMobile />,
                },
                baseItems[1],
            ];
        }

        return baseItems;
    };

    return (
        <div className={isTablet || isDesktop ? '' : 'bg-bgBlue'}>
            {isTablet || isDesktop ? null : <Header />}
            {isTablet || isDesktop ? null : (
                <div className="px-2 mb-2">
                    <InputSearchMenu />
                </div>
            )}

            <div className="flex flex-col h-full">
                {isTablet || isDesktop ? (
                    <div className="flex bg-white items-center justify-between sm:p-3 p-2 border-b-2 text-base">
                        <span className="font-bold">Đặt Món</span>
                        {!isEmpty() && <span className="cursor-pointer text-primary font-[500]">Xóa tất cả</span>}
                    </div>
                ) : (
                    <div className="px-2">
                        <div className="flex bg-white rounded-lg items-center justify-between px-2 py-3 border-b-2 text-base">
                            <span className="font-bold">Đặt Món</span>
                            {!isEmpty() && <span className="cursor-pointer text-primary font-[500]">Xóa tất cả</span>}
                        </div>
                    </div>
                )}

                <div className="flex-1 overflow-hidden">
                    {isEmpty() ? (
                        <div className="sm:p-3 p-2 flex-1">
                            <OrderEmpty title={'Chưa đặt món nào'} description={'Tiến hành đặt món ngay'} />
                        </div>
                    ) : (
                        <Tabs
                            defaultActiveKey="1"
                            items={getItems()}
                            onChange={onChange}
                            className={isTablet || isDesktop ? 'h-full flex flex-col' : '!p-2 rounded-lg'}
                            tabBarStyle={{
                                overflow: 'hidden',
                                padding: isTablet || isDesktop ? '0 12px' : '0 8px',
                                backgroundColor: isTablet || isDesktop ? '' : 'white',
                                borderRadius: isTablet || isDesktop ? '' : '12px',
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default OrderSideBar;
