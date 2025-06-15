import { Typography, Carousel, Divider, Tooltip } from 'antd';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6';
import { IoIosStar } from 'react-icons/io';
import { BsArrowRightCircle } from 'react-icons/bs';
import bannerAbout1 from '~/assets/customer/bannerAbout1.webp';
import bannerAbout2 from '~/assets/customer/bannerAbout2.webp';
import branchAbout1 from '~/assets/customer/branchAbout1.webp';
import branchAbout2 from '~/assets/customer/branchAbout2.webp';
import branchAbout3 from '~/assets/customer/branchAbout3.webp';
import branchAbout4 from '~/assets/customer/branchAbout4.webp';
import branchAbout5 from '~/assets/customer/branchAbout5.webp';
import { useState } from 'react';

const About = () => {
    const banners = [bannerAbout1, bannerAbout2];
    const branches = [branchAbout1, branchAbout2, branchAbout3, branchAbout4, branchAbout5];

    const [activeBranchImg, setActiveBranchImg] = useState(0);

    const handleActiveBranchImg = (index) => {
        setActiveBranchImg(index);
    };

    return (
        <div className="flex flex-col w-full items-center gap-5 ">
            <Typography.Title level={2} className="!text-[#FCCF64] !font-pacifico !font-normal !text-4xl">
                Về chúng tôi
            </Typography.Title>

            {/* Carousel */}
            <div className="sm:w-[90%] hidden md:block">
                <Carousel arrows dots={false} prevArrow={<FaCaretLeft />} nextArrow={<FaCaretRight />}>
                    {banners.map((src, index) => (
                        <div key={index} className="sm:px-12 px-0 sm:py-4 bg-[rgba(0,0,0,0.2)] rounded-lg ">
                            <img src={src} alt={`slide-${index}`} className={`aspect-[7/3] object-cover rounded-xl`} />
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* Video */}
            <div className="flex relative w-full items-center rounded-lg">
                {/* Video nền */}
                <div className="relative w-full sm:px-2 px-0">
                    <video
                        className="w-full relative md:aspect-[8/3] object-cover rounded-xl brightness-[0.4]"
                        src="https://cdn.marsvenus.com.vn/marsvenus/public/uploads/marsvenus-restaurant.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    ></video>

                    {/* Nội dung chữ */}
                    <div className="absolute bottom-3 px-2 sm:w-1/2 w-full text-white z-10">
                        <Typography.Title level={2} className="!text-[#FCCF64] sm:!text-4xl !text-lg">
                            Lurnaria Cruise
                        </Typography.Title>
                        <p className="font-semibold sm:text-base text-xs">
                            Một không gian, một khoảnh khắc, một trải nghiệm, một khởi đầu của hành trình khám phá những
                            bí ẩn thú vị. Ở nơi giữa biển trời bao la, những câu chuyện chưa kể đang chờ đợi bạn khám
                            phá.
                        </p>
                    </div>
                </div>
            </div>

            {/* Branch */}
            <div className="mt-14 sm:w-full lg:w-[90%] flex flex-col gap-3">
                <div className="bg-[rgba(0,0,0,0.5)] rounded-xl p-3 flex sm:flex-row flex-col gap-4">
                    <div className="sm:w-1/2 w-full">
                        <img
                            className="w-full aspect-[4/3] rounded-xl object-cover"
                            src={branches[activeBranchImg]}
                            alt=""
                        />
                    </div>
                    <div className="sm:w-1/2 w-full flex flex-col sm:px-10 px-0 gap-1">
                        <h2 className="uppercase !font-bold sm:!text-3xl !text-2xl">Lurnaria Cruise (T)</h2>
                        <p className="sm:text-base text-sm font-semibold text-[rgb(230,230,230)]">Quận 7</p>
                        <p className="flex items-center gap-1">
                            <p className="sm:text-base text-sm font-semibold text-[rgb(230,230,230)]">Giờ hoạt động:</p>
                            <span className="font-semibold sm:text-lg text-sm">17:00 – 22:00 hàng ngày</span>
                        </p>
                        <div className="flex gap-3 my-5">
                            <div className="flex items-center gap-[10px] text-yellow-500 text-base ">
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                            </div>
                            <p className="text-[rgb(78,156,238)] border-l text-xs pl-3">662 đánh giá</p>
                        </div>

                        <hr />

                        <p className="line-clamp-3 mt-4 font-semibold sm:text-[17px] text-sm text-[rgb(230,230,230)]">
                            Khi những vệt nắng cuối cùng của buổi chiều hoàng hôn dần khuất dạng, nhường chỗ cho màn đêm
                            huyền bí mang theo vài ánh sao lấp lánh, đó
                        </p>

                        <Tooltip
                            placement="right"
                            title="Khi những vệt nắng cuối cùng của buổi chiều hoàng hôn dần khuất dạng, nhường chỗ cho màn đêm huyền bí mang theo vài ánh sao lấp lánh, đó là khi bạn đến với Lurnaria Cruise. Một không gian, một khoảnh khắc, một trải nghiệm, một khởi đầu của hành trình khám phá những bí ẩn thú vị. Ở nơi giữa biển trời bao la, những câu chuyện chưa kể đang chờ đợi bạn khám phá."
                            styles={{
                                body: {
                                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                },
                            }}
                        >
                            <div className="font-[500] text-base text-yellow-500 w-fit mt-2 cursor-pointer">
                                Xem thêm
                            </div>
                        </Tooltip>
                        <BsArrowRightCircle className="mt-2 text-3xl cursor-pointer text-yellow-500" />
                    </div>
                </div>

                <div className="bg-[rgba(0,0,0,0.5)] rounded-lg sm:p-3 p-1">
                    <div className="flex sm:gap-3 gap-1">
                        {branches.map((src, index) => (
                            <div key={index} onClick={() => handleActiveBranchImg(index)} className="w-1/3">
                                <img
                                    className={`w-full cursor-pointer aspect-[4/3] sm:rounded-xl rounded-md border object-cover transition-all ${
                                        activeBranchImg === index
                                            ? 'border-yellow-500'
                                            : 'border-transparent hover:border-yellow-500'
                                    }`}
                                    src={src}
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
