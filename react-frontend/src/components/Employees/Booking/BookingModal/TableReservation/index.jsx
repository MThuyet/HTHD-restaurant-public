import { useState, useCallback } from 'react';
import { MdOutlineTableRestaurant } from 'react-icons/md';
import { Input, InputNumber, DatePicker, Select } from 'antd';
import { UserOutlined, PhoneOutlined, TeamOutlined, ClockCircleOutlined, PushpinOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';

import { tableList } from '~/apis/mockData';
import { TABLE_STATUS } from '~/utils/constants';

const { TextArea } = Input;

const TableReservation = ({ currentBookingData = null }) => {
    const [bookingCode, setBookingCode] = useState(currentBookingData != null ? currentBookingData.booking_code : null);

    const generateRandomBookingCode = useCallback(() => {
        const randomCode = Math.random().toString(36).substring(2, 10).toUpperCase();
        setBookingCode(randomCode);
    }, []);

    const getDisabledTime = (current) => {
        const now = dayjs();
        const minTime = now.add(5, 'minutes');

        if (!current || !current.isSame(now, 'date')) {
            return {
                disabledMinutes: () => Array.from({ length: 60 }, (_, i) => i !== 0),
            };
        }

        const minHour = minTime.hour();
        const minMinute = minTime.minute();

        return {
            disabledHours: () => {
                const hours = [];
                for (let i = 0; i <= minHour; i++) {
                    if (i < minHour || (i === minHour && minMinute > 0)) {
                        hours.push(i);
                    }
                }
                return hours;
            },
            disabledMinutes: () => Array.from({ length: 60 }, (_, i) => i !== 0),
        };
    };

    return (
        <>
            <div className="grid grid-col-1 grid-col-3 pb-4">
                <div>
                    <div className="p-2">
                        <label htmlFor="phone_number">
                            <PhoneOutlined /> Số điện thoại
                        </label>
                        <Input
                            id="phone_number"
                            type="text"
                            placeholder="Nhập số điện thoại khách hàng"
                            defaultValue={
                                currentBookingData && currentBookingData.phone_number
                                    ? currentBookingData.phone_number
                                    : null
                            }
                            disabled={currentBookingData && currentBookingData.completed_at ? true : false}
                        ></Input>
                    </div>
                    <div className="p-2">
                        <label htmlFor="full_name">
                            <UserOutlined /> Họ tên
                        </label>
                        <Input
                            id="full_name"
                            type="text"
                            placeholder="Nhập họ tên khách hàng"
                            defaultValue={
                                currentBookingData && currentBookingData.full_name ? currentBookingData.full_name : null
                            }
                            disabled={currentBookingData && currentBookingData.completed_at ? true : false}
                        ></Input>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <div className="flex items-center">
                        <div className="p-2">
                            <label htmlFor="people_number">
                                <TeamOutlined />
                                Số lượng khách
                            </label>
                            <br />
                            <InputNumber
                                id="people_number"
                                defaultValue={
                                    currentBookingData && currentBookingData.people_numbers
                                        ? currentBookingData.people_numbers
                                        : 1
                                }
                                disabled={currentBookingData && currentBookingData.completed_at ? true : false}
                            ></InputNumber>
                        </div>
                        <div className="p-2 flex-1">
                            <label htmlFor="full_name">
                                <ClockCircleOutlined /> Thời gian đặt
                            </label>
                            <DatePicker
                                id="booking_at"
                                showTime
                                format="DD-MM-YYYY HH:mm"
                                placeholder="Chọn thời gian đặt bàn"
                                style={{ width: '100%' }}
                                disabledTime={getDisabledTime}
                                defaultValue={
                                    currentBookingData && currentBookingData.booking_at
                                        ? dayjs(currentBookingData.booking_at)
                                        : null
                                }
                                disabled={currentBookingData && currentBookingData.completed_at ? true : false}
                            />
                        </div>
                    </div>
                    <div className="p-2">
                        <label htmlFor="full_name" className="flex items-center gap-1">
                            <MdOutlineTableRestaurant /> Chọn bàn
                        </label>
                        <Select
                            className="w-full"
                            filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                            showSearch
                            defaultValue={
                                currentBookingData && currentBookingData.tab_code ? currentBookingData.tab_code : null
                            }
                            optionFilterProp="label"
                            placeholder="Chọn bàn"
                            onChange={(value) => {
                                console.log('Selected table:', value);
                            }}
                            options={tableList.map((table) => {
                                const isDisabled = ['MAINTENANCE', 'OCCUPIED', 'RESERVED'].includes(table.status);
                                return {
                                    value: table.tab_code,
                                    label: `Tầng ${table.flo_name} - Khu ${table.area_name} - Bàn ${table.tab_name} - Sức chứa ${table.capacity} người`,
                                    status: table.status,
                                    disabled: isDisabled,
                                };
                            })}
                            optionRender={(option) => {
                                return (
                                    <div className="flex items-center gap-2">
                                        <div
                                            className={`flex items-center w-32 gap-2 ${
                                                option.data.disabled ? 'opacity-50' : null
                                            }`}
                                        >
                                            <div
                                                className={`w-3 h-3 rounded-full ${
                                                    TABLE_STATUS[option.data.status]?.background
                                                } ${TABLE_STATUS[option.data.status]?.border}`}
                                            ></div>
                                            <span className={`${TABLE_STATUS[option.data.status]?.color}`}>
                                                {TABLE_STATUS[option.data.status]?.text}
                                            </span>
                                        </div>
                                        <span>{option.label}</span>
                                    </div>
                                );
                            }}
                            disabled={currentBookingData && currentBookingData.completed_at ? true : false}
                        ></Select>
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <div className="p-2">
                        <label htmlFor="note">
                            <PushpinOutlined /> Ghi chú
                        </label>
                        <TextArea
                            showCount
                            maxLength={255}
                            placeholder="Nhập ghi chú cho lịch đặt bàn"
                            style={{ height: 80, resize: 'none' }}
                            defaultValue={
                                currentBookingData && currentBookingData.note ? currentBookingData.note : null
                            }
                            disabled={currentBookingData && currentBookingData.completed_at ? true : false}
                        ></TextArea>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TableReservation;
