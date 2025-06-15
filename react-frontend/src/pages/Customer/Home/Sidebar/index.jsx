import vietNamFlag from '~/assets/common/vietNamFlag.png';
import logoFb from '~/assets/customer/logoFb.png';
import logoYtb from '~/assets/customer/logoYtb.png';
import logoTik from '~/assets/customer/logoTik.png';
import logoIns from '~/assets/customer/logoIns.png';
import { Link } from 'react-router-dom';
import logoZalo from '~/assets/customer/logoZalo.png';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useState } from 'react';

const SiderBar = () => {
    const [activeMenu, setActiveMenu] = useState('about');

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveMenu(id);
        }
    };

    return (
        <aside className="">
            {/* Menu */}
            <div className="flex flex-col gap-8 font-[500]">
                <div
                    onClick={() => scrollToSection('about')}
                    className={`cursor-pointer flex items-center gap-2 ${
                        activeMenu === 'about' ? 'text-[#FCCF64]' : ''
                    }`}
                >
                    {activeMenu === 'about' && <FaLongArrowAltRight className="text-lg" />}
                    Giới thiệu
                </div>
                <div
                    onClick={() => scrollToSection('menu')}
                    className={`cursor-pointer flex items-center gap-2 ${
                        activeMenu === 'menu' ? 'text-[#FCCF64]' : ''
                    }`}
                >
                    {activeMenu === 'menu' && <FaLongArrowAltRight className="text-lg" />}
                    Menu
                </div>
                <div
                    onClick={() => scrollToSection('branch')}
                    className={`cursor-pointer flex items-center gap-2 ${
                        activeMenu === 'branch' ? 'text-[#FCCF64]' : ''
                    }`}
                >
                    {activeMenu === 'branch' && <FaLongArrowAltRight className="text-lg" />}
                    Chi nhánh
                </div>
                <div
                    onClick={() => scrollToSection('events')}
                    className={`cursor-pointer flex items-center gap-2 ${
                        activeMenu === 'events' ? 'text-[#FCCF64]' : ''
                    }`}
                >
                    {activeMenu === 'events' && <FaLongArrowAltRight className="text-lg" />}
                    Sự kiện & Bài viết
                </div>
                <div
                    onClick={() => scrollToSection('check-booking')}
                    className={`cursor-pointer flex items-center gap-2 ${
                        activeMenu === 'check-booking' ? 'text-[#FCCF64]' : ''
                    }`}
                >
                    {activeMenu === 'check-booking' && <FaLongArrowAltRight className="text-lg" />}
                    Kiểm tra mã đặt bàn
                </div>
                <div
                    onClick={() => scrollToSection('booking')}
                    className="flex w-fit cursor-pointer items-center justify-center px-6 py-2 font-bold text-textPrimary rounded-md"
                    style={{
                        background: 'linear-gradient(90deg, #8E7A49 0%, #FCCF64 50%, #8E7A49 100%)',
                    }}
                >
                    Đặt bàn ngay
                </div>
            </div>

            {/* Social */}
            <div className="mt-5">
                <div className="flex font-semibold gap-2 items-center bg-[rgba(255,255,255,0.15)] rounded-md py-2 justify-center w-fit px-2 cursor-pointer">
                    <img src={vietNamFlag} className="w-5 " alt="Tiếng Việt" />
                    <span className="text-xs">Tiếng Việt</span>
                </div>

                <div className="flex gap-3 mt-5">
                    <Link to="https://www.facebook.com" target="_blank">
                        <img src={logoFb} alt="Facebook" className="w-6" />
                    </Link>
                    <Link to="https://www.youtube.com" target="_blank">
                        <img src={logoYtb} alt="Youtube" className="w-6" />
                    </Link>
                    <Link to="https://www.instagram.com" target="_blank">
                        <img src={logoIns} alt="Instagram" className="w-6" />
                    </Link>
                    <Link to="https://www.tiktok.com" target="_blank">
                        <img src={logoTik} alt="Tiktok" className="w-6" />
                    </Link>
                </div>

                <div className="mt-4 flex gap-4 items-center">
                    <img src={logoZalo} alt="Zalo" className="w-10" />
                    <div className="flex items-center justify-center w-10 h-10 p-1 rounded-full bg-[#B10909]">
                        <div className="bg-[#E60808] w-full h-full rounded-full flex items-center justify-center">
                            <FaPhoneAlt className="text-white text-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SiderBar;
