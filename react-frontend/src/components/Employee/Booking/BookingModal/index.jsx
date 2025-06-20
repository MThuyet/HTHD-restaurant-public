import { Modal, Tabs } from 'antd';

import OrderBookingDetails from './OrderDetails';
import TableReservation from './TableReservation';

const BookingModal = ({ isOpenBookingModal, setIsOpenBookingModal, currentBookingData = null }) => {
    return (
        <Modal
            closable={{ 'aria-label': 'Custom Close Button' }}
            width={1000}
            style={{ top: 20 }}
            open={isOpenBookingModal}
            onCancel={() => setIsOpenBookingModal(false)}
            okText={currentBookingData ? 'Cập nhật' : 'Tạo lịch đặt'}
            cancelText="Hủy"
            className="centered-tabs-nav-list"
        >
            <Tabs
                defaultActiveKey="1"
                items={[
                    {
                        key: '1',
                        label: 'Thông tin đặt bàn',
                        children: <TableReservation currentBookingData={currentBookingData} />,
                    },
                    {
                        key: '2',
                        label: 'Thông tin đặt món',
                        children: <OrderBookingDetails currentBookingData={currentBookingData} />,
                    },
                ]}
            ></Tabs>
        </Modal>
    );
};

export default BookingModal;
