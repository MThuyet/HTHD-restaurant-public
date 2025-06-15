import { Typography } from 'antd';
import { products } from '~/apis/mockData';
import Product from '~/components/Commons/Product';
import SegmentedCategories from '~/components/Commons/SegmentedCategories';
import { FaAngleDown } from 'react-icons/fa';
import { isMobile } from 'react-device-detect';

const Menu = () => {
    return (
        <div className="flex flex-col w-full items-center ">
            <Typography.Title level={2} className="!text-[#FCCF64] !font-pacifico !font-normal !text-4xl">
                Menu
            </Typography.Title>

            {isMobile ? (
                <div className="overflow-x-auto px-2 flex justify-center w-full scrollbar-home bg-[rgba(0,0,0,0.5)] rounded-lg">
                    <SegmentedCategories
                        bgItemSelected="linear-gradient(90deg, #8E7A49 0%, #FCCF64 50%, #8E7A49 100%)"
                        bgContainer="transparent"
                        textColor="white"
                        textSelectedColor={'#333'}
                        hoverBg="rgba(255, 255, 255, 0.2)"
                        slidingColor="linear-gradient(90deg, #8E7A49 0%, #FCCF64 50%, #8E7A49 100%)"
                    />
                </div>
            ) : (
                <div className="overflow-x-auto px-2 flex justify-center w-full scrollbar-home bg-[rgba(0,0,0,0.5)] rounded-lg">
                    <SegmentedCategories
                        bgItemSelected="linear-gradient(90deg, #8E7A49 0%, #FCCF64 50%, #8E7A49 100%)"
                        bgContainer="transparent"
                        textColor="white"
                        textSelectedColor={'#333'}
                        hoverBg="rgba(255, 255, 255, 0.2)"
                        slidingColor="linear-gradient(90deg, #8E7A49 0%, #FCCF64 50%, #8E7A49 100%)"
                    />
                </div>
            )}

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-16 w-full">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
            <div className="mt-10 cursor-pointer text-[#FCCF64] font-semibold flex items-center gap-1">
                Xem thêm
                <FaAngleDown className="text-base" />
            </div>
        </div>
    );
};

export default Menu;
