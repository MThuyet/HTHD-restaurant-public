import { products } from '~/apis/mockData';
import Product from '~/components/Commons/Product';
import SegmentedCategories from '~/components/Commons/SegmentedCategories';

const OrderListMobile = () => {
    return (
        <div className="flex flex-col gap-3">
            {/* Segmented */}
            <SegmentedCategories />

            {/* Content */}
            <div className="max-h-[100dvh] overflow-y-auto pb-80">
                <div className="grid grid-cols-1 gap-3 items-center">
                    {products.map((product) => {
                        return <Product key={product.id} product={product} isOrder={true} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default OrderListMobile;
