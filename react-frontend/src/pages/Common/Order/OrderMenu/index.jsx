import { isMobile } from 'react-device-detect';
import { products } from '~/apis/mockData';
import Product from '~/components/Commons/Product';
import SegmentedCategories from '~/components/Commons/SegmentedCategories';

const OrderMenu = () => {
    return (
        <>
            {!isMobile && <SegmentedCategories />}

            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-2 gap-3 items-center overflow-y-scroll">
                {products.map((product) => {
                    return <Product key={product.id} product={product} isOrder={true} />;
                })}
            </div>
        </>
    );
};

export default OrderMenu;
