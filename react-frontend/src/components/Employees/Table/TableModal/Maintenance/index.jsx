import { Button, Input } from 'antd';

const { TextArea } = Input;

const Maintenance = ({ setIsOpenTableModal, currentTableData }) => {
    return (
        <>
            {currentTableData.status === 'MAINTENANCE' ? (
                <>
                    <div className="p-4 border rounded-md mb-3">
                        <h2 className="font-bold mb-3 text-lg">Bỏ đánh dấu bảo trì</h2>
                        <div className="flex flex-col gap-1 mb-3">
                            <label className="font-semibold">Lý do bảo trì </label>
                            <TextArea
                                placeholder="Nhập lý do bảo trì"
                                className="w-full h-20 !bg-gray-100 text-textPrimary opacity-1"
                                showCount
                                maxLength={255}
                                value={'Chân bàn bị gãy'}
                                disabled
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                        <Button type="primary" className="py-5 w-[75%] text-lg">
                            Bỏ đánh dấu bảo trì
                        </Button>
                        <Button className="py-5 w-[25%] text-lg" onClick={() => setIsOpenTableModal(false)}>
                            Đóng
                        </Button>
                    </div>
                </>
            ) : (
                <>
                    <div className="p-4 border rounded-md mb-3">
                        <h2 className="font-bold mb-3 text-lg">Đánh dấu bảo trì</h2>
                        <div className="flex flex-col gap-1 mb-3">
                            <label className="font-semibold">Lý do bảo trì </label>
                            <TextArea
                                placeholder="Nhập lý do bảo trì"
                                className="w-full h-20"
                                showCount
                                maxLength={255}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                        <Button type="primary" className="py-5 w-[75%] text-lg">
                            Đánh dấu bảo trì
                        </Button>
                        <Button className="py-5 w-[25%] text-lg" onClick={() => setIsOpenTableModal(false)}>
                            Đóng
                        </Button>
                    </div>
                </>
            )}
        </>
    );
};

export default Maintenance;
