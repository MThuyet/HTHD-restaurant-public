import OrderEmpty from '~/components/Orders/OrderEmpty';
import OrderFooter from '~/components/Orders/OrderFooter';
import OrderDetails from '~/components/Orders/OrderDetails';

const AlreadyOrdered = ({ listItem }) => {
    if (listItem.length === 0)
        return <OrderEmpty title="Chưa đặt món nào!" description="Vui lòng đặt các món đang chọn" />;

    return (
        <div className="flex flex-col">
            {/* Danh sách món đã chọn */}
            <div className="h-[calc(100vh-220px)] overflow-y-auto px-3">
                <div className="flex flex-col gap-3 pb-3">
                    {listItem.map((item) => {
                        return <OrderDetails key={item} data={item} />;
                    })}
                </div>
            </div>

            {/* Footer cố định */}
            <OrderFooter totalPrice={230000} isOrdered={false} />
        </div>
    );
};

export default AlreadyOrdered;
