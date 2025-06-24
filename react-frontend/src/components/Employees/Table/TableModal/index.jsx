import { Modal, Tabs, Button } from 'antd';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { IoIosSwap } from 'react-icons/io';
import { FiTool } from 'react-icons/fi';
import { LiaUserClockSolid } from 'react-icons/lia';
import { ClockCircleOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

import { TABLE_STATUS } from '~/utils/constants';
import Payment from './Payment';
import MoveTable from './MoveTable';
import Maintenance from './Maintenance';
import Queue from './Queue';

const TableModal = ({ isOpenTableModal, setIsOpenTableModal, currentTableData }) => {
    const Children = () => (
        <div
            className={`flex items-center justify-between gap-2 px-4 mb-2 rounded-lg border font-bold ${
                TABLE_STATUS[currentTableData.status].background
            } ${TABLE_STATUS[currentTableData.status].border}`}
        >
            <div className="flex items-center gap-2">
                <img
                    className="w-10 h-10"
                    src={TABLE_STATUS[currentTableData.status].image}
                    alt={TABLE_STATUS[currentTableData.status].text}
                />
                <span className="text-xl">Bàn {currentTableData.tab_name}</span>
                <span className="text-gray-500">({currentTableData.capacity} chỗ)</span>
            </div>
            <div className="flex items-center gap-2">
                <ClockCircleOutlined />
                {currentTableData.status === 'OCCUPIED' ? 'Đặt bàn lúc ' : ''}
                {currentTableData.completed_at ? 'Đã ngồi lúc ' : ''}
                {dayjs().format('HH:mm - DD/MM/YYYY')}
            </div>
        </div>
    );

    const ModalNotSuitableWithStatus = () => (
        <div className="flex items-center justify-center min-h-[150px]">Thao tác không phù hợp</div>
    );

    return (
        <Modal
            closable={{ 'aria-label': 'Custom Close Button' }}
            style={{ top: 20 }}
            width={800}
            open={isOpenTableModal}
            onCancel={() => setIsOpenTableModal(false)}
            closable={false}
            footer={null}
        >
            <Tabs
                items={[
                    {
                        key: '1',
                        label: (
                            <>
                                <div className="flex items-center gap-2 px-6 text-lg">
                                    <FaRegMoneyBillAlt /> Thanh toán
                                </div>
                            </>
                        ),
                        children: (
                            <>
                                <Children />
                                <Payment
                                    setIsOpenTableModal={setIsOpenTableModal}
                                    currentTableData={currentTableData}
                                />
                            </>
                        ),
                    },
                    {
                        key: '2',
                        label: (
                            <div className="flex items-center gap-2 px-6 text-lg">
                                <IoIosSwap /> Chuyển bàn
                            </div>
                        ),
                        children: (
                            <>
                                <Children />
                                <MoveTable
                                    setIsOpenTableModal={setIsOpenTableModal}
                                    currentTableData={currentTableData}
                                />
                            </>
                        ),
                    },
                    {
                        key: '3',
                        label: (
                            <div className="flex items-center gap-2 px-6 text-lg">
                                <LiaUserClockSolid /> Hàng chờ
                            </div>
                        ),
                        children: (
                            <>
                                <Children />
                                <Queue currentTableData={currentTableData} />
                            </>
                        ),
                    },
                    {
                        key: '4',
                        label: (
                            <div className="flex items-center gap-2 px-6 text-lg">
                                <FiTool /> Bảo trì
                            </div>
                        ),
                        children: (
                            <>
                                <Children />
                                <Maintenance currentTableData={currentTableData} />
                            </>
                        ),
                    },
                ]}
            ></Tabs>
        </Modal>
    );
};

export default TableModal;
