export const products = [
    {
        id: 1,
        name: 'Thịt heo xào hành tây',
        price: 230000,
        star: 4.5,
        starCount: 125,
        time: '15-20',
        description: 'Thịt heo thái mỏng, xào cùng hành tây tươi thơm lừng. Sự kết hợp mặn ngọt hài hòa.',
        image: 'https://storage.quannhautudo.com/data/thumb_400/Data/images/product/2024/06/202406051701344383.webp',
    },
    {
        id: 2,
        name: 'Gà nướng lá chanh',
        price: 250000,
        star: 4.5,
        starCount: 12,
        time: '15-20',
        description: 'Thịt heo thái mỏng, xào cùng hành tây tươi thơm lừng. Sự kết hợp mặn ngọt hài hòa.',
        image: 'https://storage.quannhautudo.com/data/thumb_400/Data/images/product/2024/06/202406051701344383.webp',
    },
    {
        id: 3,
        name: 'Tôm sú hấp bia',
        price: 280000,
        star: 4.5,
        starCount: 12,
        time: '15-20',
        description: 'Thịt heo thái mỏng, xào cùng hành tây tươi thơm lừng. Sự kết hợp mặn ngọt hài hòa.',
        image: 'https://storage.quannhautudo.com/data/thumb_400/Data/images/product/2024/06/202406051701344383.webp',
    },
    {
        id: 4,
        name: 'Bò lúc lắc khoai tây',
        price: 270000,
        star: 4.5,
        starCount: 12,
        time: '15-20',
        description: 'Thịt heo thái mỏng, xào cùng hành tây tươi thơm lừng. Sự kết hợp mặn ngọt hài hòa.',
        image: 'https://storage.quannhautudo.com/data/thumb_400/Data/images/product/2024/06/202406051701344383.webp',
    },
    {
        id: 5,
        name: 'Mực chiên giòn',
        price: 220000,
        star: 4.5,
        starCount: 12,
        time: '15-20',
        description: 'Thịt heo thái mỏng, xào cùng hành tây tươi thơm lừng. Sự kết hợp mặn ngọt hài hòa.',
        image: 'https://storage.quannhautudo.com/data/thumb_400/Data/images/product/2024/06/202406051701344383.webp',
    },
    {
        id: 6,
        name: 'Lẩu thái hải sản',
        price: 350000,
        star: 4.5,
        starCount: 12,
        time: '15-20',
        description: 'Thịt heo thái mỏng, xào cùng hành tây tươi thơm lừng. Sự kết hợp mặn ngọt hài hòa.',
        image: 'https://storage.quannhautudo.com/data/thumb_400/Data/images/product/2024/06/202406051701344383.webp',
    },
    {
        id: 7,
        name: 'Sườn nướng mật ong',
        price: 260000,
        star: 4.5,
        starCount: 12,
        time: '15-20',
        description: 'Thịt heo thái mỏng, xào cùng hành tây tươi thơm lừng. Sự kết hợp mặn ngọt hài hòa.',
        image: 'https://storage.quannhautudo.com/data/thumb_400/Data/images/product/2024/06/202406051701344383.webp',
    },
    {
        id: 8,
        name: 'Ngao hấp sả',
        price: 180000,
        star: 4.5,
        starCount: 12,
        time: '15-20',
        description: 'Thịt heo thái mỏng, xào cùng hành tây tươi thơm lừng. Sự kết hợp mặn ngọt hài hòa.',
        image: 'https://storage.quannhautudo.com/data/thumb_400/Data/images/product/2024/06/202406051701344383.webp',
    },
    {
        id: 9,
        name: 'Cá chép om dưa',
        price: 300000,
        star: 4.5,
        starCount: 12,
        time: '15-20',
        description: 'Thịt heo thái mỏng, xào cùng hành tây tươi thơm lừng. Sự kết hợp mặn ngọt hài hòa.',
        image: 'https://storage.quannhautudo.com/data/thumb_400/Data/images/product/2024/06/202406051701344383.webp',
    },
    {
        id: 10,
        name: 'Nem rán hải sản',
        price: 200000,
        star: 4.5,
        starCount: 12,
        time: '15-20',
        description: 'Thịt heo thái mỏng, xào cùng hành tây tươi thơm lừng. Sự kết hợp mặn ngọt hài hòa.',
        image: 'https://storage.quannhautudo.com/data/thumb_400/Data/images/product/2024/06/202406051701344383.webp',
    },
    {
        id: 11,
        name: 'Ếch xào sả ớt',
        price: 230000,
        star: 4.5,
        starCount: 12,
        time: '15-20',
        description: 'Thịt heo thái mỏng, xào cùng hành tây tươi thơm lừng. Sự kết hợp mặn ngọt hài hòa.',
        image: 'https://storage.quannhautudo.com/data/thumb_400/Data/images/product/2024/06/202406051701344383.webp',
    },
];

export const categories = ['Gợi ý', 'Combo', 'Khai vị', 'Salad', 'Món Chính', 'Tráng Miệng', 'Đồ Uống', 'Lẩu', 'Súp'];

// Các món đang được chọn, chưa đặt
export const currentSelectedItem = [
    {
        id: 1,
        productId: 1,
        name: 'Thịt heo xào hành tây',
        price: 230000,
        quantity: 1,
        note: 'Không hành',
        options: [
            {
                type: 'Thêm thịt',
                items: [{ name: 'Thịt thêm', quantity: 0.5, price: 50000 }],
            },
            {
                type: 'Độ cay',
                items: [{ name: 'Nhẹ' }],
            },
        ],
    },
    {
        id: 2,
        productId: 2,
        name: 'Gà nướng lá chanh',
        price: 250000,
        quantity: 2,
        note: 'Nhiều chanh',
        options: [
            {
                type: 'Món ăn kèm',
                items: [{ name: 'Cơm trắng', quantity: 1, price: 15000 }],
            },
        ],
    },
    {
        id: 3,
        productId: 5,
        name: 'Mực chiên giòn',
        price: 220000,
        quantity: 1,
        note: 'Giòn nhiều',
        options: [
            {
                type: 'Nước chấm',
                items: [{ name: 'Sốt me', quantity: 1, price: 15000 }],
            },
            {
                type: 'Cách chế biến',
                items: [{ name: 'Chiên giòn' }],
            },
            {
                type: 'Độ cay',
                items: [{ name: 'Vừa' }],
            },
        ],
    },
];

// Các món đã đặt, có trạng thái
export const alreadyOrdered = [
    {
        id: 101,
        productId: 3,
        name: 'Tôm sú hấp bia',
        price: 280000,
        quantity: 2,
        orderTime: '11:30',
        status: 'pending', // Chờ tiếp nhận
        note: 'Tươi sống',
        options: [
            {
                type: 'Rau',
                items: [{ name: 'Rau thơm', quantity: 1, price: 0 }],
            },
        ],
    },
    {
        id: 102,
        productId: 4,
        name: 'Bò lúc lắc khoai tây',
        price: 270000,
        quantity: 1,
        orderTime: '11:25',
        status: 'processing', // Đang chế biến
        note: 'Bò tái',
        options: [
            {
                type: 'Món ăn kèm',
                items: [{ name: 'Khoai tây thêm', quantity: 1, price: 30000 }],
            },
            {
                type: 'Mức độ chín',
                items: [{ name: 'Tái' }],
            },
            {
                type: 'Độ cay',
                items: [{ name: 'Cay' }],
            },
        ],
    },
    {
        id: 103,
        productId: 6,
        name: 'Lẩu thái hải sản',
        price: 350000,
        quantity: 1,
        orderTime: '11:15',
        status: 'served', // Đã phục vụ
        note: 'Nhiều nấm',
        options: [
            {
                type: 'Mì',
                items: [{ name: 'Mì thêm', quantity: 1, price: 20000 }],
            },
            {
                type: 'Hải sản',
                items: [{ name: 'Hải sản thêm', quantity: 1, price: 100000 }],
            },
            {
                type: 'Rau củ',
                items: [{ name: 'Nấm thêm', quantity: 1, price: 25000 }],
            },
            {
                type: 'Độ cay',
                items: [{ name: 'Siêu cay' }],
            },
        ],
    },
    {
        id: 104,
        productId: 8,
        name: 'Ngao hấp sả',
        price: 180000,
        quantity: 1,
        orderTime: '11:10',
        status: 'cancelled', // Đã hủy
        note: 'Nhiều sả',
        options: [
            {
                type: 'Rau',
                items: [{ name: 'Rau thơm', quantity: 1, price: 0 }],
            },
            {
                type: 'Nước chấm',
                items: [{ name: 'Nước mắm', quantity: 1, price: 0 }],
            },
        ],
    },
];
