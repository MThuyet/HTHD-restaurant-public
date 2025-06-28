import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { IoCloseCircleOutline } from 'react-icons/io5';
import ProductItem from './ProductItem';

const initialMenuItems = [
    {
        id: '1',
        name: 'Thịt heo sào hành tây',
        category: 'Món chính',
        price: 230000,
        rating: 4.5,
        reviews: 20,
        description: 'Thịt heo thăn thái mỏng, sào cùng hành tây tươi thơm lừng. Sự kết hợp màn nhạt hài hòa.',
        image: 'https://storage.quannhautudo.com/data/thumb_400/Data/images/product/2024/06/202406051701344383.webp',
        lastUpdated: '19/5/2025 | 15:42',
        status: 'available',
    },
    {
        id: '2',
        name: 'Khoai tây chiên',
        category: 'Khai vị',
        price: 45000,
        rating: 4.2,
        reviews: 15,
        description: 'Khoai tây chiên giòn rụm, ăn kèm với sốt cà chua hoặc mayonnaise.',
        image: 'https://storage.quannhautudo.com/data/thumb_400/Data/images/product/2024/06/202406051701344383.webp',
        lastUpdated: '19/5/2025 | 15:42',
        status: 'available',
    },
    {
        id: '3',
        name: 'Salad Caesar',
        category: 'Salad',
        price: 120000,
        rating: 4.7,
        reviews: 32,
        description: 'Salad rau xanh tươi mát với sốt Caesar đặc trưng và bánh mì nướng.',
        image: 'https://storage.quannhautudo.com/data/thumb_400/Data/images/product/2024/06/202406051701344383.webp',
        lastUpdated: '19/5/2025 | 14:30',
        status: 'out-of-stock',
    },
    {
        id: '4',
        name: 'Súp bí đỏ',
        category: 'Súp',
        price: 65000,
        rating: 4.3,
        reviews: 18,
        description: 'Súp bí đỏ thơm ngon, bổ dưỡng với kem tươi và hạt bí rang.',
        image: 'https://storage.quannhautudo.com/data/thumb_400/Data/images/product/2024/06/202406051701344383.webp',
        lastUpdated: '19/5/2025 | 13:15',
        status: 'out-of-stock',
    },
    {
        id: '5',
        name: 'Bánh flan',
        category: 'Tráng miệng',
        price: 35000,
        rating: 4.6,
        reviews: 25,
        description: 'Bánh flan mềm mịn với lớp caramel đậm đà, hương vị truyền thống.',
        image: 'https://storage.quannhautudo.com/data/thumb_400/Data/images/product/2024/06/202406051701344383.webp',
        lastUpdated: '19/5/2025 | 16:00',
        status: 'available',
    },
    {
        id: '6',
        name: 'Nước cam tươi',
        category: 'Đồ uống',
        price: 25000,
        rating: 4.1,
        reviews: 12,
        description: 'Nước cam tươi nguyên chất, giàu vitamin C, không đường.',
        image: 'https://storage.quannhautudo.com/data/thumb_400/Data/images/product/2024/06/202406051701344383.webp',
        lastUpdated: '19/5/2025 | 15:45',
        status: 'available',
    },
];

const Content = () => {
    return (
        <div className="flex gap-8 w-full h-full">
            <div className="w-1/2 rounded flex flex-col gap-4">
                <div className="flex items-center gap-2 font-bold text-darkGreen">
                    <IoMdCheckmarkCircleOutline className="text-2xl " />
                    <span className="text-lg">Đang phục vụ (4)</span>
                </div>
                <div className="w-full p-3 rounded-md border-2 border-dashed overflow-y-auto scrollbar-none flex flex-col gap-3 h-full">
                    {initialMenuItems.map((item) => (
                        <ProductItem key={item.id} data={item} />
                    ))}
                </div>
            </div>

            <div className="w-1/2 rounded flex flex-col gap-4">
                <div className="flex items-center gap-2 font-bold text-darkRed">
                    <IoCloseCircleOutline className="text-2xl " />
                    <span className="text-lg">Đã hết (2)</span>
                </div>

                <div className="w-full p-3 rounded-md border-2 border-dashed overflow-y-auto scrollbar-none flex flex-col gap-3 h-full">
                    {initialMenuItems.map((item) => (
                        <ProductItem key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Content;
