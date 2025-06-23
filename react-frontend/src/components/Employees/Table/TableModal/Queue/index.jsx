import { Button } from 'antd';
import { LiaUserClockSolid } from 'react-icons/lia';

import QueueItem from './QueuItem';
import { bookingList } from '~/apis/mockData';
const Queue = ({ setIsOpenTableModal, currentTable }) => {
    return (
        <>
            <div className="p-4 border rounded-md mb-3">
                <h2 className="flex items-center gap-1 mb-3 text-lg font-bold">
                    <LiaUserClockSolid /> Danh sách hàng chờ
                </h2>
                <p className="p-3 mb-2 rounded-md bg-whiteBlue text-darkBlue">
                    Xếp bàn khác cho hàng chờ nếu như không thể di chuyển khách đang sử dụng bàn hiện tại
                </p>
                <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto">
                    {bookingList.map((element) => (
                        <QueueItem queue={element} />
                    ))}
                </div>
            </div>
            <div className="flex justify-end">
                <Button className="py-5 w-[25%] text-lg" onClick={() => setIsOpenTableModal(false)}>
                    Đóng
                </Button>
            </div>
        </>
    );
};

export default Queue;
