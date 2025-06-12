import { Modal, Steps, Badge } from 'antd';
import {
    UserOutlined,
    PhoneOutlined,
    TeamOutlined,
    CloseOutlined,
    ToolOutlined,
    FieldTimeOutlined,
    ClockCircleOutlined,
    PushpinOutlined,
} from '@ant-design/icons';
import { MdOutlineTableRestaurant } from 'react-icons/md';

import { RESERVATION_STATUS } from '~/utils/constants';
import { formatPrice } from '~/utils/formatter';

const BookingDetailModal = ({
    isOpenBookingDetailModal,
    setIsOpenBookingDetailModal,
    setIsOpenUpdateBookingModal,
    bookingDetailData,
    onMessage,
}) => {
    return (
        <Modal
            width={1000}
            style={{ top: 20 }}
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isOpenBookingDetailModal}
            onCancel={() => setIsOpenBookingDetailModal(false)}
            footer={null}
        >
            {bookingDetailData && (
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Thông tin chi tiết booking</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-[#d9d9d9] py-4">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <UserOutlined />
                                <div>
                                    <label className="text-gray-400">Họ và tên </label>
                                    <p className="font-semibold">{bookingDetailData.full_name}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <PhoneOutlined />
                                <div>
                                    <label className="text-gray-400">Số điện thoại </label>
                                    <p className="font-semibold">{bookingDetailData.phone_number}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <div
                                    className={`w-3 h-3 rounded-full 
                                            ${RESERVATION_STATUS[bookingDetailData.status]?.background} 
                                            ${RESERVATION_STATUS[bookingDetailData.status]?.border} 
                                        `}
                                ></div>
                                <div>
                                    <label className="text-gray-400">Trạng thái </label>
                                    <p
                                        className={`font-semibold ${
                                            RESERVATION_STATUS[bookingDetailData.status]?.color
                                        }`}
                                    >
                                        {RESERVATION_STATUS[bookingDetailData.status]?.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <FieldTimeOutlined />
                                <div>
                                    <label className="text-gray-400">Gửi yêu cầu lúc </label>
                                    <p className="font-semibold">{bookingDetailData.created_at}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <TeamOutlined />
                                <div>
                                    <label className="text-gray-400">Số lượng khách </label>
                                    <p className="font-semibold">{bookingDetailData.people_numbers}</p>
                                </div>
                            </div>
                            {bookingDetailData.status === 'CANCELLED' && (
                                <div className="sm:col-span-3">
                                    <div className="flex items-center gap-2 mb-3">
                                        <CloseOutlined className="text-darkRed" />
                                        <div>
                                            <label className="text-darkRed">Lý do hủy </label>
                                            <p className="font-semibold">{bookingDetailData.cancel_reason}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {bookingDetailData.status === 'MAINTENANCE' && (
                                <div className="flex items-center gap-2 mb-3">
                                    <ToolOutlined />
                                    <div>
                                        <label className="text-darkPurple">Lý do bảo trì </label>
                                        <p className="font-semibold">{bookingDetailData.maintenance_reason}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <ClockCircleOutlined />
                                <div>
                                    <label className="text-gray-400">Thời gian đặt </label>
                                    <p className="font-semibold">{bookingDetailData.booking_at}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <MdOutlineTableRestaurant />
                                <div>
                                    <label className="text-gray-400">Vị trí </label>
                                    {bookingDetailData.floor_name &&
                                    bookingDetailData.area_name &&
                                    bookingDetailData.table_name ? (
                                        <p className="font-semibold">
                                            Tầng {bookingDetailData.floor_name} - Khu {bookingDetailData.area_name} -
                                            Bàn {bookingDetailData.table_name}
                                        </p>
                                    ) : (
                                        <>
                                            <span className="text-red-500 font-bold mr-4">Chưa chọn vị trí bàn</span>
                                            <button
                                                type="button"
                                                className="py-1 px-2 !bg-primary hover:opacity-85 rounded-md text-white text-nowrap font-semibold"
                                                onClick={() => {
                                                    setIsOpenBookingDetailModal(false);
                                                    setIsOpenUpdateBookingModal(true);
                                                }}
                                            >
                                                Chọn ngay
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <span>#</span>
                                <div>
                                    <label className="text-gray-400">Mã đặt bàn </label>
                                    {bookingDetailData.booking_code ? (
                                        <p className="font-semibold">{bookingDetailData.booking_code}</p>
                                    ) : (
                                        <p>
                                            <span className="text-red-500 font-bold mr-4">Chưa có mã đặt bàn</span>
                                            {bookingDetailData.table_name && (
                                                <button
                                                    type="button"
                                                    className="py-1 px-2 !bg-primary hover:opacity-85 rounded-md text-white text-nowrap font-semibold"
                                                    onClick={() => onMessage(bookingDetailData)}
                                                >
                                                    Gửi ngay
                                                </button>
                                            )}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        {bookingDetailData.note && (
                            <div className="sm:col-span-3 bg-whiteYellow p-4">
                                <p>
                                    <label className="font-semibold mr-1">
                                        <PushpinOutlined /> Ghi chú:
                                    </label>
                                    {bookingDetailData.note}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="py-4 border-b border-[#d9d9d9]">
                        <Steps
                            progressDot
                            current={
                                bookingDetailData?.completed_at ? 2 : bookingDetailData?.created_booking_code_at ? 1 : 0
                            }
                            direction="horizontal"
                            items={[
                                {
                                    title: 'Gửi yêu cầu',
                                    description: bookingDetailData.created_at,
                                },
                                {
                                    title: 'Xác nhận & Gửi mã đặt bàn',
                                    description: bookingDetailData.created_booking_code_at ?? '',
                                },
                                {
                                    title: 'Đã sử dụng mã',
                                    description: bookingDetailData.completed_at ?? '',
                                },
                            ]}
                        />
                    </div>
                    {bookingDetailData.products && bookingDetailData.products.length > 0 && (
                        <div className="py-4 border-b border-[#d9d9d9]">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="flex items-center gap-2 font-bold text-lg mb-1">
                                    Sản phẩm đã đặt
                                    <Badge
                                        count={bookingDetailData.products.reduce(
                                            (acc, cur) => (acc += cur.quantity),
                                            0,
                                        )}
                                        showZero
                                        color="#C3551A"
                                    />
                                </h3>
                                <div className="text-lg">
                                    <strong className="mr-2">Tổng cộng: </strong>
                                    <div className="inline-block text-primary">
                                        <sup className="font-[500] underline">đ</sup>
                                        <span className="font-bold">
                                            {formatPrice(
                                                bookingDetailData.products.reduce(
                                                    (acc, cur) => (acc += cur.quantity * cur.price),
                                                    0,
                                                ),
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[240px] overflow-y-auto">
                                {bookingDetailData.products.map(() => (
                                    <div className="flex items-start justify-between border border-[#d9d9d9] rounded-md p-2">
                                        <div className="flex items-start gap-2">
                                            <img
                                                src="https://storage.quannhautudo.com/Data/images/Data/images/product/2024/05/202405141554352143.webp"
                                                className="sm:w-[100px] w-[120px] object-cover rounded-lg"
                                            />
                                            <div>
                                                <div className="font-semibold">2 x Pizza Hải Sản</div>
                                                <div className="text-[#808080] text-xs font-[500]">
                                                    + Phô mai thêm (2)
                                                    <span className=" text-gray-400 ml-1">- Topping</span>
                                                </div>
                                                <div className="text-[#808080] text-xs font-[500]">
                                                    + Xốt cay
                                                    <span className="text-[10px] text-gray-400 ml-1">- Nước sốt</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex text-primary">
                                            <span className="text-[10px] font-[500] underline">đ</span>
                                            <p className="font-bold">159,000</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </Modal>
    );
};

export default BookingDetailModal;
