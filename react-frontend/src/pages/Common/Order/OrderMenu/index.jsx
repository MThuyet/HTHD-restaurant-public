import { isMobile } from 'react-device-detect';
import { Segmented } from 'antd';
import { products } from '~/apis/mockData';
import { categories } from '~/apis/mockData';
import Product from '~/components/Commons/Product';

// customize option
const options = categories.map((category) => ({
    label: <span className="px-3">{category}</span>,
    value: category,
}));

const OrderMenu = () => {
    return (
        <>
            {!isMobile && (
                <Segmented
                    className="bg-white !px-2 py-2 text-textPrimary !font-[500] overflow-x-auto !flex-shrink-0 border-none"
                    options={options}
                    style={{ boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)' }}
                    onChange={(value) => {
                        console.log(value); // string
                    }}
                />
            )}

            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-2 gap-3 items-center overflow-y-scroll">
                {products.map((product) => {
                    return <Product key={product.id} product={product} isOrder={true} />;
                })}
            </div>
        </>
    );
};

export default OrderMenu;
