import OrderDetails from '~/components/Orders/OrderDetails';
import OrderEmpty from '~/components/Orders/OrderEmpty';
import OrderFooter from '~/components/Orders/OrderFooter';

const CurrentSelectedOrder = ({ listItem }) => {
    if (listItem.length === 0)
        return <OrderEmpty title="Chưa chọn món nào!" description="Vui lòng chọn món tại menu" />;

    return (
        <div className="flex flex-col">
            {/* Danh sách món đang chọn */}
            <div className="h-[calc(100vh-350px)] overflow-y-auto px-3">
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
