import { isDesktop, isMobile, isTablet } from 'react-device-detect';
import vietnamFlag from '~/assets/common/vietNamFlag.png';
import { FaQrcode, FaAngleDown, FaArrowLeft } from 'react-icons/fa';
import { useContext, useState } from 'react';
import QrCodeModal from '~/components/Commons/Modal/QrCodeModal';
import logo from '~/assets/common/logo.webp';
import UserContext from '~/contexts/UserContext';

const Header = () => {
    const [isOpenQrCodeModal, setIsOpenQrCodeModal] = useState(false);
    const [valueQr, setValueQr] = useState('');

    // check quyền user
    const { user } = useContext(UserContext);
    const isEmployee = user && user?.permissions.includes('employee.order');

    return (
        <>
            {isTablet || isDesktop ? (
                <header className="flex justify-between items-center">
                    {isEmployee && (
                        <div
                            style={{ boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)' }}
                            className="cursor-pointer font-bold px-4 py-[10px] bg-white rounded-xl flex items-center gap-2 text-sm h-[42px]"
                        >
                            <FaArrowLeft className="testIcon !text-base" />
                            Quay lại
                        </div>
                    )}

                    <div className="flex items-center gap-2">
                        <img src={logo} alt="logo" className="w-12 h-12 rounded-lg" />
                        <span className="text-sm font-bold">HTHD Restaurant</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div
                            onClick={() => {
                                setIsOpenQrCodeModal(true);
                                setValueQr({
                                    title: 'Bàn A',
                                    value: 'https://ant.design/',
                                });
                            }}
                            style={{ boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)' }}
                            className="cursor-pointer flex items-center justify-between bg-white px-4 py-[10px] rounded-xl gap-2 text-sm h-[42px]"
                        >
                            <div className="flex items-center gap-1 font-bold">
                                <FaQrcode />
                                QR code
                            </div>
                            <div className="bg-[#808080] text-white px-2 py-1 rounded uppercase font-[500]">Bàn 1</div>
                        </div>

                        {!isEmployee && (
                            <div
                                style={{ boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)' }}
                                className="cursor-pointer font-bold px-2 py-[10px] bg-white rounded-xl flex items-center gap-3 text-sm h-[42px]"
                            >
                                <div className="flex items-center gap-1">
                                    <img src={vietnamFlag} alt="vietnam-flag" className="w-5" />
                                    Tiếng Việt
                                </div>
                                <FaAngleDown />
                            </div>
                        )}
                    </div>
                </header>
            ) : isMobile ? (
                <header className="flex justify-between items-center p-2">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2">
                            <img src={logo} alt="logo" className="w-12 h-12 rounded-lg" />
                        </div>

                        <div
                            onClick={() => {
                                setIsOpenQrCodeModal(true);
                                setValueQr({
                                    title: 'Bàn A',
                                    value: 'https://ant.design/',
                                });
                            }}
                            style={{ boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)' }}
                            className="cursor-pointer flex items-center justify-between bg-white px-2 py-[10px] rounded-xl gap-2 text-sm h-[42px]"
                        >
                            <div className="flex items-center gap-1 font-bold">
                                <FaQrcode />
                                QR code
                            </div>
                            <div className="bg-[#808080] text-white px-2 py-1 rounded uppercase font-[500]">Bàn 1</div>
                        </div>
                    </div>

                    <div
                        style={{ boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)' }}
                        className="cursor-pointer font-bold px-2 py-[10px] bg-white rounded-xl flex items-center gap-3 text-sm h-[42px]"
                    >
                        <div className="flex items-center gap-1">
                            <img src={vietnamFlag} alt="vietnam-flag" className="w-5" />
                            Tiếng Việt
                        </div>
                        <FaAngleDown />
                    </div>
                </header>
            ) : null}

            {/* Modal Qr Code */}
            <QrCodeModal
                isOpenQrCodeModal={isOpenQrCodeModal}
                setIsOpenQrCodeModal={setIsOpenQrCodeModal}
                valueQr={valueQr}
            />
        </>
    );
};

export default Header;
