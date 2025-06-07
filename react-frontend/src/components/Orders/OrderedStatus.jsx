import { FaAngleDown } from 'react-icons/fa';
import { Dropdown } from 'antd';

const statusOrdered = {
    pending: {
        label: 'Chờ tiếp nhận',
        className: 'text-darkBlue',
        dotColor: 'bg-whiteBlue border-darkBlue',
        count: 10,
    },
    processing: {
        label: 'Đang chế biến',
        className: 'text-darkYellow',
        dotColor: 'bg-whiteYellow border-darkYellow',
        count: 10,
    },
    served: {
        label: 'Đã phục vụ',
        className: 'text-darkGreen',
        dotColor: 'bg-whiteGreen border-darkGreen',
        count: 10,
    },
    cancelled: {
        label: 'Đã hủy',
        className: 'text-darkRed',
        dotColor: 'bg-whiteRed border-darkRed',
        count: 10,
    },
};

const OrderedStatus = ({ selectedStatus = 'pending', onStatusChange }) => {
    const handleMenuClick = ({ key }) => {
        if (onStatusChange) {
            onStatusChange(key);
        }
    };

    const selected = statusOrdered[selectedStatus];

    const items = Object.entries(statusOrdered)
        .filter(([key]) => key !== selectedStatus) // loại trạng thái đang được chọn
        .map(([key, item]) => ({
            key,
            label: (
                <div className={`flex items-center gap-1 text-sm font-semibold ${item.className} py-1`}>
                    <div className={`w-4 h-4 rounded-full ${item.dotColor} border mr-1`}></div>
                    <p>{item.label}</p> - <span>({item.count} món)</span>
                </div>
            ),
        }));

    return (
        <Dropdown
            menu={{ items, onClick: handleMenuClick }}
            trigger={['click']}
            className={`cursor-pointer flex mb-3 items-center ${selected.dotColor} !bg-white border-2 px-2 py-1 rounded-full font-semibold`}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm">
                    <div className={`w-4 h-4 rounded-full ${selected.dotColor} border mr-1`}></div>
                    <p className={`${selected.className}`}>{selected.label}</p> - <span>({selected.count} món)</span>
                </div>
                <FaAngleDown className={`text-lg ml-2 ${selected.className}`} />
            </div>
        </Dropdown>
    );
};

export default OrderedStatus;
