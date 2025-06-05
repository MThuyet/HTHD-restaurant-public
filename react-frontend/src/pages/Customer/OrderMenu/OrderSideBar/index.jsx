import { FaConciergeBell } from 'react-icons/fa';
import { Tabs } from 'antd';
import AlreadyOrdered from './OrderList/AlreadyOrdered';
import CurrentSelectedOrder from './OrderList/CurrentSelectedOrder';
import OrderEmpty from '~/components/Orders/OrderEmpty';

const onChange = (key) => {
    console.log(key);
};

const OrderSideBar = ({ currentSelectedItem, alreadyOrdered }) => {
    const isEmpty = () => {
        return currentSelectedItem.length === 0 && alreadyOrdered.length === 0;
    };

    const items = [
        {
            key: '1',
            label: (
                <div className="flex items-center">
                    <span className=" font-[500]">Món đang chọn</span>
                    <span className="ml-2 flex items-center justify-center bg-primary text-white rounded-full w-7 h-7 font-[500]">
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
                    <span className="ml-2 flex items-center justify-center bg-primary text-white rounded-full w-7 h-7 font-[500]">
                        {alreadyOrdered.length}
                    </span>
                </div>
            ),
            children: <AlreadyOrdered listItem={alreadyOrdered} />,
        },
    ];

    return (
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-3 border-b-2 text-base">
                <span className="font-bold">Đặt Món</span>
                {!isEmpty() && <span className="cursor-pointer text-primary font-[500]">Xóa tất cả</span>}
            </div>

            <div className="flex-1 overflow-hidden">
                {isEmpty() ? (
                    <div className="p-3 flex-1">
                        <OrderEmpty title={'Chưa đặt món nào'} description={'Tiến hành đặt món ngay'} />
                    </div>
                ) : (
                    <Tabs
                        defaultActiveKey="1"
                        items={items}
                        onChange={onChange}
                        className="h-full flex flex-col"
                        tabBarStyle={{ padding: '0 12px' }}
                    />
                )}
            </div>
        </div>
    );
};

export default OrderSideBar;
