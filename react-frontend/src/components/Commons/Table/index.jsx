import { useState } from 'react';
import { MoreOutlined, BellOutlined, ClockCircleFilled } from '@ant-design/icons';
import dayjs from 'dayjs';

import TableModal from '~/components/Employees/Table/TableModal';
import { TABLE_STATUS } from '~/utils/constants';

const Table = ({ table }) => {
    const [isOpenTableModal, setIsOpenTableModal] = useState(false);
    return (
        <>
            <div
                className={`flex flex-col items-center justify-between p-2 ${
                    TABLE_STATUS[table.status].border
                } h-[250px] rounded-md bg-white cursor-pointer`}
                onClick={() => setIsOpenTableModal(true)}
            >
                <div className={`flex items-start justify-between w-full h-[min-content]`}>
                    <div>
                        <h3 className="font-bold">Bàn {table.tab_name}</h3>
                        <p className="text-gray-500 text-sm">({table.capacity} chỗ)</p>
                    </div>
                    <MoreOutlined className="text-lg" />
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className={`p-2 rounded-md ${TABLE_STATUS[table.status].background}`}>
                        <img
                            height={50}
                            width={50}
                            src={TABLE_STATUS[table.status].image}
                            alt={TABLE_STATUS[table.status].text}
                        />
                    </div>

                    <div className="h-[50px]">
                        {table.status != 'RESERVED' && (
                            <p className={`font-semibold ${TABLE_STATUS[table.status].color}`}>
                                {TABLE_STATUS[table.status].text}
                            </p>
                        )}

                        {table.status === 'OCCUPIED' && (
                            <p className="text-[15px] text-center">
                                <ClockCircleFilled /> {dayjs(TABLE_STATUS[table.completed_at]).format('HH:mm')}
                            </p>
                        )}
                    </div>
                </div>
                <div
                    className={`p-1 flex items-center justify-center gap-2 rounded-md w-full ${
                        table.queueTime && table.queueTime > 30 ? `bg-whiteRed text-darkRed` : 'bg-gray-300'
                    } `}
                >
                    <BellOutlined />
                    {table.queue > 0 ? `Hàng chờ ${table.queueTime}` : 'Hàng chờ trống'}
                </div>
            </div>
            <TableModal
                isOpenTableModal={isOpenTableModal}
                setIsOpenTableModal={setIsOpenTableModal}
                currentTableData={table}
            ></TableModal>
        </>
    );
};

export default Table;
