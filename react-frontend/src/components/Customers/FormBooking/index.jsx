import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaSort } from 'react-icons/fa';
import { FaCalendarDays } from 'react-icons/fa6';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { FaNotesMedical } from 'react-icons/fa';

const FormBooking = ({ idCheckBooking = false }) => {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="sm:py-4 py-2 sm:px-6 px-4 uppercase font-bold text-lg bg-[rgba(255,255,255,0.05)] rounded-sm">
                Thông tin đặt bàn
            </div>

            {idCheckBooking ? (
                <div className="sm:py-4 py-2 sm:px-6 px-4 bg-[rgba(255,255,255,0.05)] rounded-sm flex flex-col gap-8">
                    {/* Chi nhánh */}
                    <div className="flex text-nowrap sm:flex-row flex-col  sm:items-center gap-3">
                        <label htmlFor="" className="font-semibold min-w-[30%]">
                            Chi nhánh
                        </label>
                        <div className="relative w-full">
                            <input
                                value={'HTHD Restaurant - Tân Phong, Biên Hòa'}
                                placeholder="Chọn chi nhánh"
                                className="w-full bg-[rgba(255,255,255,0.05)] text-white placeholder-[#999] placeholder:font-normal  rounded-md border-none focus:outline-none focus:ring-0 pr-10 py-3 px-4"
                            />
                            <FaMapMarkerAlt className="absolute right-3 top-1/2 text-lg -translate-y-1/2 text-white" />
                        </div>
                    </div>

                    {/* Họ và tên người đặt */}
                    <div className="flex text-nowrap sm:flex-row flex-col  sm:items-center gap-3">
                        <label htmlFor="" className="font-semibold min-w-[30%]">
                            Họ và tên người đặt
                        </label>
                        <div className="relative w-full">
                            <input
                                value={'Bùi Quang Hưng'}
                                placeholder="Nhập họ và tên"
                                className="w-full bg-[rgba(255,255,255,0.05)] text-white placeholder-[#999] placeholder:font-normal  rounded-md border-none focus:outline-none focus:ring-0 pr-10 py-3 px-4"
                            />
                            <FaUser className="absolute right-3 top-1/2 text-lg -translate-y-1/2 text-white" />
                        </div>
                    </div>

                    {/* Số điện thoại */}
                    <div className="flex text-nowrap sm:flex-row flex-col  sm:items-center gap-3">
                        <label htmlFor="" className="font-semibold min-w-[30%]">
                            Số điện thoại
                        </label>
                        <div className="relative w-full">
                            <input
                                value={'0332393031'}
                                placeholder="Nhập số điện thoại"
                                className="w-full bg-[rgba(255,255,255,0.05)] text-white placeholder-[#999] placeholder:font-normal  rounded-md border-none focus:outline-none focus:ring-0 pr-10 py-3 px-4"
                            />
                            <FaPhoneAlt className="absolute right-3 top-1/2 text-lg -translate-y-1/2 text-white" />
                        </div>
                    </div>

                    {/* Số lượng người */}
                    <div className="flex text-nowrap sm:flex-row flex-col  sm:items-center gap-3">
                        <label htmlFor="" className="font-semibold min-w-[30%]">
                            Số lượng người
                        </label>
                        <div className="relative w-full">
                            <input
                                value={'5'}
                                placeholder="Nhập số lượng người"
                                className="w-full bg-[rgba(255,255,255,0.05)] text-white placeholder-[#999] placeholder:font-normal  rounded-md border-none focus:outline-none focus:ring-0 pr-10 py-3 px-4"
                            />
                            <FaSort className="absolute right-3 top-1/2 text-lg -translate-y-1/2 text-white" />
                        </div>
                    </div>

                    {/*  Ngày đặt */}
                    <div className="flex text-nowrap sm:flex-row flex-col  sm:items-center gap-3">
                        <label htmlFor="" className="font-semibold min-w-[30%]">
                            Ngày đặt
                        </label>
                        <div className="relative w-full">
                            <input
                                value={'15/06/2025'}
                                placeholder="Chọn ngày đặt"
                                className="w-full bg-[rgba(255,255,255,0.05)] text-white placeholder-[#999] placeholder:font-normal  rounded-md border-none focus:outline-none focus:ring-0 pr-10 py-3 px-4"
                            />
                            <FaCalendarDays className="absolute right-3 top-1/2 text-lg -translate-y-1/2 text-white" />
                        </div>
                    </div>

                    {/* Giờ đặt */}
                    <div className="flex text-nowrap sm:flex-row flex-col  sm:items-center gap-3">
                        <label htmlFor="" className="font-semibold min-w-[30%]">
                            Giờ đặt
                        </label>
                        <div className="relative w-full">
                            <input
                                value={'12:21'}
                                placeholder="Chọn giờ đặt"
                                className="w-full bg-[rgba(255,255,255,0.05)] text-white placeholder-[#999] placeholder:font-normal  rounded-md border-none focus:outline-none focus:ring-0 pr-10 py-3 px-4"
                            />
                            <MdOutlineAccessTimeFilled className="absolute right-3 top-1/2 text-lg -translate-y-1/2 text-white" />
                        </div>
                    </div>

                    {/* Ghi chú */}
                    <div className="flex text-nowrap sm:flex-row flex-col gap-3">
                        <label htmlFor="" className="font-semibold min-w-[30%]">
                            Ghi chú
                        </label>
                        <div className="relative w-full">
                            <textarea
                                value={'Chỗ ngồi riêng tư '}
                                placeholder="Nhập ghi chú"
                                className="w-full bg-[rgba(255,255,255,0.05)] text-white placeholder-[#999] placeholder:font-normal  rounded-md border-none focus:outline-none focus:ring-0 pr-10 py-3 px-4 resize-none"
                            />
                            <FaNotesMedical className="absolute right-3 top-4 text-lg text-white" />
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="sm:py-4 py-2 sm:px-6 px-4 bg-[rgba(255,255,255,0.05)] rounded-sm flex flex-col gap-8">
                        {/* Chi nhánh */}
                        <div className="flex text-nowrap sm:flex-row flex-col  sm:items-center gap-3">
                            <label htmlFor="" className="font-semibold min-w-[30%]">
                                Chi nhánh <span className="text-[#FF0000]">*</span>
                            </label>
                            <div className="relative w-full">
                                <input
                                    placeholder="Chọn chi nhánh"
                                    className="w-full bg-[rgba(255,255,255,0.05)] text-white placeholder-[#999] placeholder:font-normal  rounded-md border-none focus:outline-none focus:ring-0 pr-10 py-3 px-4"
                                />
                                <FaMapMarkerAlt className="absolute right-3 top-1/2 text-lg -translate-y-1/2 text-white" />
                            </div>
                        </div>

                        {/* Họ và tên người đặt */}
                        <div className="flex text-nowrap sm:flex-row flex-col  sm:items-center gap-3">
                            <label htmlFor="" className="font-semibold min-w-[30%]">
                                Họ và tên người đặt <span className="text-[#FF0000]">*</span>
                            </label>
                            <div className="relative w-full">
                                <input
                                    placeholder="Nhập họ và tên"
                                    className="w-full bg-[rgba(255,255,255,0.05)] text-white placeholder-[#999] placeholder:font-normal  rounded-md border-none focus:outline-none focus:ring-0 pr-10 py-3 px-4"
                                />
                                <FaUser className="absolute right-3 top-1/2 text-lg -translate-y-1/2 text-white" />
                            </div>
                        </div>

                        {/* Số điện thoại */}
                        <div className="flex text-nowrap sm:flex-row flex-col  sm:items-center gap-3">
                            <label htmlFor="" className="font-semibold min-w-[30%]">
                                Số điện thoại <span className="text-[#FF0000]">*</span>
                            </label>
                            <div className="relative w-full">
                                <input
                                    placeholder="Nhập số điện thoại"
                                    className="w-full bg-[rgba(255,255,255,0.05)] text-white placeholder-[#999] placeholder:font-normal  rounded-md border-none focus:outline-none focus:ring-0 pr-10 py-3 px-4"
                                />
                                <FaPhoneAlt className="absolute right-3 top-1/2 text-lg -translate-y-1/2 text-white" />
                            </div>
                        </div>

                        {/* Số lượng người */}
                        <div className="flex text-nowrap sm:flex-row flex-col  sm:items-center gap-3">
                            <label htmlFor="" className="font-semibold min-w-[30%]">
                                Số lượng người <span className="text-[#FF0000]">*</span>
                            </label>
                            <div className="relative w-full">
                                <input
                                    placeholder="Nhập số lượng người"
                                    className="w-full bg-[rgba(255,255,255,0.05)] text-white placeholder-[#999] placeholder:font-normal  rounded-md border-none focus:outline-none focus:ring-0 pr-10 py-3 px-4"
                                />
                                <FaSort className="absolute right-3 top-1/2 text-lg -translate-y-1/2 text-white" />
                            </div>
                        </div>

                        {/*  Ngày đặt */}
                        <div className="flex text-nowrap sm:flex-row flex-col  sm:items-center gap-3">
                            <label htmlFor="" className="font-semibold min-w-[30%]">
                                Ngày đặt <span className="text-[#FF0000]">*</span>
                            </label>
                            <div className="relative w-full">
                                <input
                                    placeholder="Chọn ngày đặt"
                                    className="w-full bg-[rgba(255,255,255,0.05)] text-white placeholder-[#999] placeholder:font-normal  rounded-md border-none focus:outline-none focus:ring-0 pr-10 py-3 px-4"
                                />
                                <FaCalendarDays className="absolute right-3 top-1/2 text-lg -translate-y-1/2 text-white" />
                            </div>
                        </div>

                        {/* Giờ đặt */}
                        <div className="flex text-nowrap sm:flex-row flex-col  sm:items-center gap-3">
                            <label htmlFor="" className="font-semibold min-w-[30%]">
                                Giờ đặt <span className="text-[#FF0000]">*</span>
                            </label>
                            <div className="relative w-full">
                                <input
                                    placeholder="Chọn giờ đặt"
                                    className="w-full bg-[rgba(255,255,255,0.05)] text-white placeholder-[#999] placeholder:font-normal  rounded-md border-none focus:outline-none focus:ring-0 pr-10 py-3 px-4"
                                />
                                <MdOutlineAccessTimeFilled className="absolute right-3 top-1/2 text-lg -translate-y-1/2 text-white" />
                            </div>
                        </div>

                        {/* Ghi chú */}
                        <div className="flex text-nowrap sm:flex-row flex-col gap-3">
                            <label htmlFor="" className="font-semibold min-w-[30%]">
                                Ghi chú
                            </label>
                            <div className="relative w-full">
                                <textarea
                                    placeholder="Nhập ghi chú"
                                    className="w-full bg-[rgba(255,255,255,0.05)] text-white placeholder-[#999] placeholder:font-normal  rounded-md border-none focus:outline-none focus:ring-0 pr-10 py-3 px-4 resize-none"
                                />
                                <FaNotesMedical className="absolute right-3 top-4 text-lg text-white" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <div className="flex sm:gap-5 gap-3">
                            <div
                                className="py-[10px] cursor-pointer sm:px-12 px-8 text-textPrimary font-bold  bg-white rounded-xl"
                                style={{ background: 'linear-gradient(90deg, #8E7A49 0%, #FCCF64 50%, #8E7A49 100%)' }}
                            >
                                Đặt bàn ngay
                            </div>
                            <div className="py-[10px] cursor-pointer sm:px-12 px-8 text-textPrimary font-bold  bg-white rounded-xl">
                                Hoàn tác
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default FormBooking;
