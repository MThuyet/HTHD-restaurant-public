import backgroundImage from '~/assets/customer/background.png';
import logo from '~/assets/common/logo.webp';
import SiderBar from './Sidebar';
import Content from './Content';
import { isMobile } from 'react-device-detect';
import { IoIosMenu } from 'react-icons/io';
import DrawerSiderbar from './Sidebar/DrawerSiderbar';
import { useState } from 'react';

const Home = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <div
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className="w-full h-[100dvh] bg-cover bg-center bg-no-repeat sm:px-5 sm:py-4 px-0 py-0 relative"
        >
            <div className="absolute inset-0 bg-[rgba(255,255,255,0.05)]"></div>

            <div className="relative border border-[#F3CEA1] sm:rounded-3xl rounded-none text-white h-full py-4 sm:px-6 px-3 flex flex-col justify-between ">
                {isMobile ? (
                    <header className="h-[60px] w-full flex gap-2 items-center pb-4 justify-between">
                        <div className="h-full flex gap-2 items-center">
                            <img src={logo} alt="HTHD Restaurant" className="rounded-lg h-full" />
                            <span className="font-bold text-sm">HTHD Restaurant</span>
                        </div>

                        <div onClick={() => setOpenDrawer(true)} className="h-full flex gap-2 items-center">
                            <IoIosMenu className="text-3xl text-[#FCCF64]" />
                        </div>
                    </header>
                ) : (
                    <header className="h-[50px] w-fit flex gap-1 items-center sm:mb-0 mb-2">
                        <img src={logo} alt="HTHD Restaurant" className="rounded-lg h-full" />
                        <span className="font-bold">HTHD Restaurant</span>
                    </header>
                )}

                <main className="flex flex-1 gap-10 overflow-hidden h-full">
                    {!isMobile && (
                        <div className="sticky self-center md:w-[200px] sm:w-[150px]">
                            <SiderBar />
                        </div>
                    )}
                    <div className="flex-1 overflow-y-auto scrollbar-none h-full">
                        <Content />
                    </div>
                </main>
            </div>

            <DrawerSiderbar open={openDrawer} onClose={() => setOpenDrawer(false)} />
        </div>
    );
};

export default Home;
