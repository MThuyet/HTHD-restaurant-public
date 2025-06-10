import { Tabs } from 'antd';
import AlreadyOrdered from './OrderList/AlreadyOrdered';
import CurrentSelectedOrder from './OrderList/CurrentSelectedOrder';
import { isMobile } from 'react-device-detect';
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

        if (isMobile) {
            return [
                baseItems[0],
                {
                    key: '3',
                    label: (
                        <div className="flex items-center">
                            <span className=" font-[500]">Menu</span>
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
        <div className={isMobile ? 'bg-bgBlue' : ''}>
            {isMobile && <Header />}
            {isMobile && (
                <div className="p-2">
                    <InputSearchMenu />
                </div>
            )}
            <div className="flex flex-col h-full">
                {!isMobile && (
                    <div className="flex items-center justify-between sm:p-3 p-2 border-b-2 text-base">
                        <span className="font-bold">Đặt Món</span>
                        {!isEmpty() && <span className="cursor-pointer text-primary font-[500]">Xóa tất cả</span>}
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
                            className={isMobile ? '!p-2 rounded-lg' : 'h-full flex flex-col'}
                            tabBarStyle={{
                                overflow: 'hidden',
                                padding: isMobile ? '0 8px' : '0 12px',
                                backgroundColor: isMobile ? 'white' : '',
                                borderRadius: isMobile ? '12px' : '',
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default OrderSideBar;
