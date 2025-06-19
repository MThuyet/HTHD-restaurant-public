import { useState, useRef, useCallback } from 'react';
import { Button, message, Tooltip, DatePicker } from 'antd';
import { ProTable } from '@ant-design/pro-components';
import { PlusOutlined, EditOutlined, EyeOutlined, PhoneOutlined, MessageOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';

import BookingDetailModal from '~/components/Employee/Booking/BookingModal/BookingDetailModal';
import BookingModal from '~/components/Employee/Booking/BookingModal';
import { bookingList } from '~/apis/mockData';
import { RESERVATION_STATUS } from '~/utils/constants';

const bookingManagement = () => {
    const actionRef = useRef();
    const [isOpenBookingDetailModal, setIsOpenBookingDetailModal] = useState(false);
    const [isOpenBookingModal, setIsOpenBookingModal] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);

    const handleViewDetail = useCallback((record) => {
        setSelectedBooking(record);
        setIsOpenBookingDetailModal(true);
    }, []);

    const handleOpenModalAdd = useCallback(() => {
        setSelectedBooking('');
        setIsOpenBookingModal(true);
    }, []);

    const handleEdit = useCallback((record) => {
        setSelectedBooking(record);
        setIsOpenBookingModal(true);
    }, []);

    const handleCall = useCallback((record) => {
        if (record.phone_number) {
            const telLink = `tel:${record.phone_number}`;
            window.location.href = telLink;
            message.success(`Đang gọi đến ${record.phone_number}`);
        } else {
            message.error('Không có số điện thoại');
        }
    }, []);

    const handleMessage = useCallback((record) => {
        if (record.phone_number) {
            // Create SMS link
            const smsLink = `sms:${record.phone_number}`;
            window.location.href = smsLink;
            message.success(`Đang soạn tin nhắn đến ${record.phone_number}`);
        } else {
            message.error('Không có số điện thoại');
        }
    }, []);

    const BookingActionButtons = ({ record, onView, onEdit, onCall, onMessage }) => {
        return (
            <div className="flex items-center gap-3">
                <Tooltip title="Xem chi tiết">
                    <Button
                        className="text-darkBlue hover:!text-darkBlue 
                                        hover:!bg-whiteBlue hover:!border-[darkBlue] border-[darkBlue]"
                        onClick={() => onView(record)}
                    >
                        <EyeOutlined />
                    </Button>
                </Tooltip>

                <Tooltip title="Chỉnh sửa">
                    <Button
                        className="text-textPrimary hover:!text-textPrimary
                                        hover:!bg-[#ececec] hover:!border-[#333] border-[#333]"
                        onClick={() => onEdit(record)}
                    >
                        <EditOutlined />
                    </Button>
                </Tooltip>

                <Tooltip title="Gọi điện để xác nhận">
                    <Button
                        type={`tel`}
                        className="text-darkGreen hover:!text-darkGreen
                                        hover:!bg-whiteGreen hover:!border-[darkGreen] border-[darkGreen]"
                        onClick={() => onCall(record)}
                    >
                        <PhoneOutlined />
                    </Button>
                </Tooltip>

                <Tooltip title="Gửi mã đặt bàn">
                    <Button
                        className="text-darkYellow hover:!text-darkYellow
                                        hover:!bg-whiteYellow hover:!border-darkYellow border-darkYellow"
                        onClick={() => onMessage(record)}
                    >
                        <MessageOutlined />
                    </Button>
                </Tooltip>
            </div>
        );
    };

    const columns = [
        {
            title: 'Họ tên khách hàng',
            dataIndex: 'full_name',
            fieldProps: {
                placeholder: 'Nhập họ tên khách hàng cần tim',
            },
            onFilter: (value, record) => record.full_name?.toLowerCase().includes(value.toLowerCase()),
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone_number',
            fieldProps: {
                placeholder: 'Nhập số điện thoại cần tìm',
            },
        },
        {
            title: 'Số lượng khách',
            dataIndex: 'people_numbers',
            search: false,
        },
        {
            title: 'Thời gian đặt bàn',
            dataIndex: 'booking_at',
            order: 2,
            renderFormItem: (_, { type, defaultRender, ...rest }, form) => {
                return (
                    <DatePicker
                        style={{ width: '100%' }}
                        showTime
                        format="DD-MM-YYYY HH:mm"
                        placeholder="Chọn thời gian đặt bàn"
                        defaultValue={dayjs()}
                        onChange={(value) => {
                            form.setFieldsValue({ booking_at: value });
                        }}
                    />
                );
            },
            render: (_, record) => dayjs(record.booking_at).format('DD-MM-YYYY HH:mm'),
        },
        {
            title: 'Bàn',
            dataIndex: 'table_name',
            search: false,
            render: (_, record) => {
                return record.floor_name && record.area_name && record.table_name ? (
                    <span className="text-textPrimary">
                        Tầng {record.floor_name} - Khu {record.area_name} - Bàn {record.table_name}
                    </span>
                ) : (
                    <span className="text-red-500 font-bold">Chưa chọn vị trí bàn</span>
                );
            },
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            order: 1,
            render: (_, record) => {
                return (
                    <div className="flex items-center gap-2">
                        <div
                            className={`w-3 h-3 rounded-full 
                                ${RESERVATION_STATUS[record.status]?.background} 
                                ${RESERVATION_STATUS[record.status]?.border} 
                            `}
                        ></div>
                        <span className={`${RESERVATION_STATUS[record.status]?.color} font-semibold`}>
                            {RESERVATION_STATUS[record.status]?.text}
                        </span>
                    </div>
                );
            },
            valueEnum: RESERVATION_STATUS,
        },
        {
            title: 'Mã đặt bàn',
            dataIndex: 'booking_code',
            search: true,
            fieldProps: {
                placeholder: 'Nhập mã đặt bàn cần tìm',
            },
            render: (_, record) => {
                return record.booking_code ? (
                    <span className="text-textPrimary">{record.booking_code}</span>
                ) : (
                    <span className="text-red-500 font-bold">Chưa có mã đặt bàn</span>
                );
            },
        },
        {
            title: 'Hành động',
            width: 120,
            hideInSearch: true,
            render: (_, record) => (
                <BookingActionButtons
                    record={record}
                    onView={handleViewDetail}
                    onEdit={handleEdit}
                    onCall={handleCall}
                    onMessage={handleMessage}
                />
            ),
        },
    ];

    return (
        <>
            <ProTable
                columns={columns}
                actionRef={actionRef}
                cardBordered
                dataSource={bookingList}
                request={async (params = { status: ['PENDING_CONFIRMATION'] }, sort, filter) => {}}
                editable={{
                    type: 'multiple',
                }}
                rowKey="id"
                search={{
                    resetText: 'Hoàn tác',
                    labelWidth: 'auto',
                    span: 6,
                }}
                options={{
                    density: false,
                }}
                form={{
                    syncToUrl: (values, type) => {
                        if (type === 'get') {
                            return {
                                ...values,
                                created_at: [values.startTime, values.endTime],
                            };
                        }
                        return values;
                    },
                }}
                pagination={{
                    pageSize: 5,
                    onChange: (page) => console.log(page),
                }}
                dateFormatter="string"
                headerTitle="Danh sách đặt bàn"
                toolBarRender={() => [
                    <Button key="button" icon={<PlusOutlined />} type="primary" onClick={() => handleOpenModalAdd()}>
                        Thêm lịch đặt mới
                    </Button>,
                ]}
            />
            {isOpenBookingDetailModal && (
                <BookingDetailModal
                    isOpenBookingDetailModal={isOpenBookingDetailModal}
                    setIsOpenBookingDetailModal={setIsOpenBookingDetailModal}
                    bookingDetailData={selectedBooking}
                    onMessage={handleMessage}
                    setIsOpenBookingModal={setIsOpenBookingModal}
                />
            )}
            {isOpenBookingModal && (
                <BookingModal
                    isOpenBookingModal={isOpenBookingModal}
                    setIsOpenBookingModal={setIsOpenBookingModal}
                    currentBookingData={selectedBooking}
                />
            )}
        </>
    );
};

export default bookingManagement;
