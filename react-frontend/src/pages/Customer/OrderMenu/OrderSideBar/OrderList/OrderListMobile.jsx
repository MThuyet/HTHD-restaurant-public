import { Segmented } from 'antd';
import { categories } from '~/apis/mockData';
import Product from '~/components/Product';
import { products } from '~/apis/mockData';

// customize option
const options = categories.map((category) => ({
    label: <span className="px-3">{category}</span>,
    value: category,
}));

const OrderListMobile = () => {
    return (
        <div className="flex flex-col gap-3">
            {/* Segmented */}
            <Segmented
                className="bg-white !px-2 py-2 text-textPrimary !font-[500] overflow-x-auto !flex-shrink-0 border-none "
                options={options}
                style={{ boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)' }}
                onChange={(value) => {
                    console.log(value); // string
                }}
            />

            {/* Content */}
            <div className="max-h-screen overflow-y-auto px-0 ">
                <div className="grid grid-cols-1 gap-3 items-center pb-24 ">
                    {products.map((product) => {
                        return <Product key={product.id} product={product} isOrder={true} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default OrderListMobile;
