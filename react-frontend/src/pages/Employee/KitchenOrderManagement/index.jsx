import { Segmented } from 'antd';

const KitchenOrderManagement = () => {
    return (
        <>
            <div className="fixed bottom-2 left-[50%] translate-x-[-50%] flex items-center gap-2 p-2 rounded-lg text-nowrap bg-[#333] text-[16px] text-white shadow-lg">
                Chế độ hiển thị:
                <Segmented
                    className="ml-2 rounded-md bg-gray-200"
                    options={[
                        {
                            value: '',
                            label: <div className="flex items-center gap-1 text-[16px]"></div>,
                        },
                        {
                            value: '',
                            label: <div className="flex items-center gap-1 text-[16px]"></div>,
                        },
                    ]}
                ></Segmented>
            </div>
        </>
    );
};

export default KitchenOrderManagement;
