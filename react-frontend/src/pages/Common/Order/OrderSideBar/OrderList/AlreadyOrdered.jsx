import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import OrderDetails from '~/components/Commons/Orders/OrderDetails';
import OrderedStatus from '~/components/Commons/Orders/OrderedStatus';
import OrderEmpty from '~/components/Commons/Orders/OrderEmpty';
import OrderFooter from '~/components/Commons/Orders/OrderFooter';

const AlreadyOrdered = ({ listItem }) => {
    const [selectedStatus, setSelectedStatus] = useState('pending');

    // Giả định rằng listItem có trường status để lọc
    const filteredItems = listItem.filter((item) => item.status === selectedStatus);

    if (listItem.length === 0)
        return <OrderEmpty title="Chưa đặt món nào!" description="Vui lòng đặt các món đang chọn" />;

    return (
        <div className="flex flex-col bg-white rounded-lg sm:p-0 p-2 max-h-screen">
            <div
                className={`${
                    isMobile ? 'h-[calc(100vh-280px)]' : 'h-[calc(100vh-200px)]'
                } overflow-y-auto sm:px-3 px-0`}
            >
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
