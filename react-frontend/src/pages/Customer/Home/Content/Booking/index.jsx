import { Typography } from 'antd';
import { isTablet } from 'react-device-detect';
import FormBooking from '~/components/Customers/FormBooking';

const Booking = () => {
    return (
        <div className="flex flex-col w-full items-center gap-5 mb-10">
            <Typography.Title level={2} className="!text-[#FCCF64] !font-pacifico !font-normal">
                Đặt bàn
            </Typography.Title>

            <div className={`w-full ${isTablet ? 'sm:w-[70%]' : 'sm:w-[50%]'}`}>
                <FormBooking />
            </div>
        </div>
    );
};

export default Booking;
