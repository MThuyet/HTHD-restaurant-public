export const API_URL = 'http://localhost:8000';

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

import tableEmpty from '~/assets/common/table--empty.webp';
import tableMaintenance from '~/assets/common/table--maintenance.webp';
import tableOccupied from '~/assets/common/table--occupied.webp';
import tableReserved from '~/assets/common/table--reserved.webp';
import tableCleaning from '~/assets/common/table--cleaning.webp';
export const TABLE_STATUS = {
    EMPTY: {
        text: 'Bàn trống',
        color: 'text-darkGreen',
        border: 'border border-darkGreen',
        background: 'bg-whiteGreen',
        image: tableEmpty,
    },
    CLEANING: {
        text: 'Đang dọn',
        color: 'text-darkYellow',
        border: 'border border-darkYellow',
        background: 'bg-whiteYellow',
        image: tableCleaning,
    },
    OCCUPIED: {
        text: 'Đã đặt trước',
        color: 'text-darkBlue',
        border: 'border border-darkBlue',
        background: 'bg-whiteBlue',
        image: tableOccupied,
    },
    RESERVED: {
        text: 'Đang sử dụng',
        color: 'text-darkRed',
        border: 'border border-darkRed',
        background: 'bg-whiteRed',
        image: tableReserved,
    },
    MAINTENANCE: {
        text: 'Đang bảo trì',
        color: 'text-darkPurple',
        border: 'border border-darkPurple',
        background: 'bg-whitePurple',
        image: tableMaintenance,
    },
};
