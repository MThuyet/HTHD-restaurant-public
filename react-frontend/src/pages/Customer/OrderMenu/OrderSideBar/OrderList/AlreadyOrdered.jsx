import { useState } from 'react';
import OrderEmpty from '~/components/Orders/OrderEmpty';
import OrderFooter from '~/components/Orders/OrderFooter';
import OrderDetails from '~/components/Orders/OrderDetails';
import OrderedStatus from '~/components/Orders/OrderedStatus';

const AlreadyOrdered = ({ listItem }) => {
    const [selectedStatus, setSelectedStatus] = useState('pending');

    // Giả định rằng listItem có trường status để lọc
    const filteredItems = listItem.filter((item) => item.status === selectedStatus);

    if (listItem.length === 0)
        return <OrderEmpty title="Chưa đặt món nào!" description="Vui lòng đặt các món đang chọn" />;

    return (
        <div className="flex flex-col">
            <div className="h-[calc(100vh-220px)] overflow-y-auto px-3">
                {/* Dropdown trạng thái */}
                <OrderedStatus selectedStatus={selectedStatus} onStatusChange={setSelectedStatus} />

                {/* Danh sách món đã chọn - đã lọc theo trạng thái */}
                <div className="flex flex-col gap-3 pb-3">
                    {filteredItems.map((item) => {
                        return <OrderDetails isOrdered={true} key={item.id || item} data={item} />;
                    })}
                </div>
            </div>

            {/* Footer cố định */}
            <OrderFooter totalPrice={230000} isOrdered={false} />
        </div>
    );
};

export default AlreadyOrdered;
