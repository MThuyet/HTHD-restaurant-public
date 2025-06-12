export const API_URL = 'http://127.0.0.1:8000/api';

export const RESERVATION_STATUS = {
    PENDING_CONFIRMATION: {
        text: 'Chờ xác nhận',
        color: 'text-darkBlue',
        border: 'border border-darkBlue',
        background: 'bg-whiteBlue',
    },
    CONFIRMED: {
        text: 'Đã xác nhận',
        color: 'text-darkYellow',
        border: 'border border-darkYellow',
        background: 'bg-whiteYellow',
    },
    COMPLETED: {
        text: 'Hoàn thành',
        color: 'text-darkGreen',
        border: 'border border-[darkGreen]',
        background: 'bg-[whiteGreen]',
    },
    CANCELLED: {
        text: 'Đã hủy',
        color: 'text-darkRed',
        border: 'border border-darkRed',
        background: 'bg-whiteRed',
    },
    LATE: {
        text: 'Đến trễ',
        color: 'text-darkPurple',
        border: 'border border-darkPurple',
        background: 'bg-whitePurple',
    },
};

export const TABLE_STATUS = {
    EMPTY: {
        text: 'Bàn trống',
        color: 'text-darkGreen',
        border: 'border border-darkGreen',
        background: 'bg-whiteGreen',
    },
    CLEANING: {
        text: 'Đang dọn',
        color: 'text-darkYellow',
        border: 'border border-darkYellow',
        background: 'bg-whiteYellow',
    },
    OCCUPIED: {
        text: 'Đã đặt trước',
        color: 'text-darkBlue',
        border: 'border border-[darkBlue]',
        background: 'bg-[whiteBlue]',
    },
    RESERVED: {
        text: 'Đang sử dụng',
        color: 'text-darkRed',
        border: 'border border-darkRed',
        background: 'bg-whiteRed',
    },
    MAINTENANCE: {
        text: 'Đang bảo trì',
        color: 'text-darkPurple',
        border: 'border border-darkPurple',
        background: 'bg-whitePurple',
    },
};
