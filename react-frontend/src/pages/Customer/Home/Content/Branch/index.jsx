import { Typography } from 'antd';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const branches = [
    {
        address: '193 Đỗ Văn Thì, Biên Hòa, Đồng Nai',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4842318813884!2d106.7895803!3d10.8712669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276398969f7b%3A0x9672b7efd0893fc4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOw7RuZyBMw6JtIFRQLiBIQ00!5e0!3m2!1svi!2s!4v1623732574573!5m2!1svi!2s',
    },
    {
        address: '25 Nguyễn Văn Bảo, Gò Vấp, TP. HCM',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.857353808126!2d106.68662427465815!3d10.822205089321376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528e5496d03d7%3A0xa5b8e7395ec636b9!2zMjUgTmd1eeG7hW4gVsSDbiBC4bqjbywgUGjGsOG7nW5nIDQsIEfDsiBW4bqlcCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1686138359266!5m2!1svi!2s',
    },
    {
        address: '268 Lý Thường Kiệt, Quận 10, TP. HCM',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6302956359166!2d106.65703107465752!3d10.759917089387957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee4ecfa255d%3A0x9e5ec3fa6801b7d6!2zMjY4IEzDvSBUaMaw4budbmcgS2nhu4d0LCBQaMaw4budbmcgMTQsIFF14bqtbiAxMCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1686138414134!5m2!1svi!2s',
    },
    {
        address: '97 Võ Văn Tần, Quận 3, TP. HCM',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4954607694596!2d106.69098207465764!3d10.77115638936319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3a9d8d1bb3%3A0x32cce024cf009384!2zOTcgVsO1IFbEg24gVOG6p24sIFBoxrDhu51uZyA2LCBRdeG6rW4gMywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1686138456555!5m2!1svi!2s',
    },
];

const Branch = () => {
    const [selectedBranch, setSelectedBranch] = useState(0);

    return (
        <div className="flex flex-col w-full items-center gap-5">
            <Typography.Title level={2} className="!text-[#FCCF64] !font-pacifico !font-normal !text-4xl">
                Địa chỉ
            </Typography.Title>

            <div className="flex sm:flex-row flex-col justify-center items-center gap-10 w-full">
                <div className="flex flex-col gap-4 sm:w-1/2 w-full">
                    {branches.map((branch, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => setSelectedBranch(index)}
                        >
                            <FaMapMarkerAlt
                                className={`text-xl ${
                                    selectedBranch === index ? 'text-[#FCCF64]' : 'text-[#FCCF6480]'
                                }`}
                            />
                            <span className="text-lg">{branch.address}</span>
                        </div>
                    ))}

                    <div className="flex items-center gap-2 mt-2">
                        <FaClock className="text-[#FCCF64] text-xl" />
                        <span className="text-lg">Giờ mở cửa 17:00 - 20:00 hàng ngày</span>
                    </div>

                    <div className="mt-2">
                        <div className="font-bold text-[#FCCF64] text-base">Đặt bàn ngay</div>
                    </div>

                    <div
                        className="flex items-center gap-2 mt-2 rounded-md p-2 text-textPrimary font-semibold w-fit cursor-pointer"
                        style={{ background: 'linear-gradient(90deg, #8E7A49 0%, #FCCF64 50%, #8E7A49 100%)' }}
                    >
                        <span className="text-lg">1900.277270</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-lg w-full">
                            Hoặc qua facebook tại{' '}
                            <Link
                                target="_blank"
                                to="https://www.facebook.com/MThuyet"
                                className="text-[#FCCF64] underline "
                            >
                                HTHDRestaurant
                            </Link>
                        </span>
                    </div>
                </div>

                <div className="sm:mt-4 sm:w-auto w-full">
                    <iframe
                        src={branches[selectedBranch].mapUrl}
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: '8px' }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Maps"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Branch;
