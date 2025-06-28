import { categories } from '~/apis/mockData';
import { ConfigProvider, Segmented } from 'antd';
import { useEffect, useRef } from 'react';

// customize option
const options = categories.map((category) => ({
    label: <span className="px-3 ">{category}</span>,
    value: category,
}));

const SegmentedCategories = (props) => {
    const { bgItemSelected, bgContainer, textColor, textSelectedColor, hoverBg, slidingColor, borderRadius } = props;
    const styleRef = useRef(null);

    const customThemes = {
        components: {
            Segmented: {
                itemSelectedBg: bgItemSelected && !bgItemSelected.includes('gradient') ? bgItemSelected : '#c3551a', // màu nền khi chọn
                itemSelectedColor: textSelectedColor || '#fff', // màu chữ khi chọn
                colorBgLayout: '#fff', // nền ngoài cùng
                colorText: textColor || '#333', // màu chữ mặc định
                borderRadius: borderRadius || 12,
                controlHeight: 35,
                paddingInline: 10,
            },
        },
    };

    useEffect(() => {
        // Tạo một thẻ style duy nhất cho tất cả các CSS overrides
        const style = document.createElement('style');
        styleRef.current = style;

        // Tạo mảng các đoạn CSS cần áp dụng
        const cssRules = [];

        // Xử lý gradient background nếu có
        if (bgItemSelected && bgItemSelected.includes('gradient')) {
            cssRules.push(`
                .ant-segmented-item-selected {
                    background: ${bgItemSelected} !important;
                }
            `);
        }

        // Xử lý hover background nếu có
        if (hoverBg) {
            cssRules.push(`
                .ant-segmented-item:not(.ant-segmented-item-selected):hover {
                    background: ${hoverBg} !important;
                    transition: background 0.2s ease;
                }

                /* Ngăn hiệu ứng hover khi đang click */
                .ant-segmented-item:active {
                    background: transparent !important;
                    transition: none !important;
                }

                /* Đảm bảo item được chọn không bị ảnh hưởng bởi hover */
                .ant-segmented-item.ant-segmented-item-selected {
                    transition: background 0.3s ease !important;
                }
            `);
        }

        // Xử lý màu cho hiệu ứng trượt giữa các items
        if (slidingColor) {
            cssRules.push(`
                .ant-segmented .ant-segmented-thumb {
                    background-color: ${slidingColor} !important;
                }

                /* Nếu slidingColor là gradient, cần ghi đè thuộc tính background */
                ${
                    slidingColor.includes('gradient')
                        ? `
                        .ant-segmented .ant-segmented-thumb {
                            background: ${slidingColor} !important;
                        }`
                        : ''
                }
            `);
        }

        // Chỉ thêm style vào document nếu có CSS rules
        if (cssRules.length > 0) {
            style.innerHTML = cssRules.join('\n');
            document.head.appendChild(style);
        }

        // Cleanup function
        return () => {
            if (style.parentNode) {
                document.head.removeChild(style);
            }
        };
    }, [bgItemSelected, hoverBg, slidingColor]);

    return (
        <ConfigProvider theme={customThemes}>
            <Segmented
                className="!px-2 py-2 !font-[500] overflow-x-auto md:w-auto w-full !flex-shrink-0 border-none"
                options={options}
                style={{
                    color: textColor || '#333',
                    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
                    backgroundColor: bgContainer || 'white',
                }}
                onChange={(value) => {
                    console.log(value); // string
                }}
            />
        </ConfigProvider>
    );
};

export default SegmentedCategories;
