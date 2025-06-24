import { isDesktop, isTablet } from 'react-device-detect';
import { products } from '~/apis/mockData';
import Product from '~/components/Commons/Product';
import SegmentedCategories from '~/components/Commons/SegmentedCategories';

const OrderMenu = () => {
    return (
        <>
            {isTablet || isDesktop ? <SegmentedCategories /> : null}

            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-2 gap-3 items-center overflow-y-scroll scrollbar-none">
                {products.map((product) => {
                    return <Product key={product.id} product={product} isOrder={true} />;
                })}
            </div>
        </>
    );
};

export default OrderMenu;
