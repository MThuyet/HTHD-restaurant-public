import { Input, Typography } from 'antd';
import FormBooking from '~/components/Customers/FormBooking';
import { useRef } from 'react';
import { isTablet } from 'react-device-detect';

const CheckBooking = () => {
    const inputRef = useRef(null);

    const handleLabelClick = () => {
        inputRef.current?.focus();
    };

    return (
        <div className="flex flex-col w-full items-center gap-5">
            <Typography.Title level={2} className="!text-[#FCCF64] !font-pacifico !font-normal !text-4xl">
                Kiểm tra mã đặt bàn
            </Typography.Title>

            <div
                className={`flex flex-col justify-center sm:gap-8 gap-4 ${
                    isTablet ? 'sm:w-[70%] w-full' : 'sm:w-[50%]'
                } w-full`}
            >
                <div className="py-2 px-4 bg-[rgba(255,255,255,0.05)] flex  items-center gap-6 w-full rounded-sm m-auto">
                    <label className="font-semibold text-nowrap cursor-pointer" onClick={handleLabelClick}>
                        Mã đặt bàn <span className="text-[#FF0000]">*</span>
                    </label>

                    <Input
                        ref={inputRef}
                        placeholder="Nhập mã đặt bàn"
                        className="!bg-[rgba(255,255,255,0.05)] border-none !text-white font-semibold uppercase !placeholder-[#999] focus:!border-none focus:!ring-0 !placeholder:font-normal !rounded-md"
                    />
                </div>

                <div className="flex sm:gap-5 gap-3">
                    <div
                        className="py-[10px] cursor-pointer sm:px-12 px-8 text-textPrimary font-bold bg-white rounded-xl"
                        style={{ background: 'linear-gradient(90deg, #8E7A49 0%, #FCCF64 50%, #8E7A49 100%)' }}
                    >
                        Kiểm tra
                    </div>
                    <div className="py-[10px] cursor-pointer sm:px-12 px-8 text-textPrimary font-bold  bg-white rounded-xl">
                        Hoàn tác
                    </div>
                </div>

                <div className="bg-white/55 h-[2px] rounded w-full"></div>
            </div>

            <div className={`w-full ${isTablet ? 'sm:w-[70%]' : 'sm:w-[50%]'}`}>
                <FormBooking idCheckBooking={true} />
            </div>
        </div>
    );
};

export default CheckBooking;
