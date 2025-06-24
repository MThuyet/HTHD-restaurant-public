import { isDesktop, isTablet } from 'react-device-detect';
import OrderDetails from '~/components/Commons/Orders/OrderDetails';
import OrderEmpty from '~/components/Commons/Orders/OrderEmpty';
import OrderFooter from '~/components/Commons/Orders/OrderFooter';

const CurrentSelectedOrder = ({ listItem }) => {
    if (listItem.length === 0)
        return <OrderEmpty title="Chưa chọn món nào!" description="Vui lòng chọn món tại menu" />;

    return (
        <div className="flex flex-col bg-white rounded-lg sm:px-0 px-2 sm:py-0 py-2">
            {/* Danh sách món đang chọn */}
            <div
                className={`overflow-y-auto sm:px-3 px-0 ${
                    isTablet || isDesktop ? 'h-[calc(100vh-300px)]' : 'h-[calc(100dvh-420px)]'
                }`}
            >
                <div className="flex flex-col gap-3 pb-3">
                    {listItem.map((item) => {
                        return <OrderDetails key={item.id} data={item} />;
                    })}
                </div>
            </div>

            {/* Footer cố định */}
            <OrderFooter totalPrice={230000} isOrdered={true} />
        </div>
    );
};

export default CurrentSelectedOrder;
