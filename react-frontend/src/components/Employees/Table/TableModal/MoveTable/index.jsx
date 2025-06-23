import { useState } from 'react';
import { Input, Collapse, Button } from 'antd';

import { TABLE_STATUS } from '~/utils/constants';
import { floorList, areaList, tableList } from '~/apis/mockData';

const { TextArea } = Input;

const MoveTable = ({ setIsOpenTableModal, currentTableData }) => {
    const [activeTableMove, setActiveTableMove] = useState({});

    const tableEmptyList = tableList.filter((table) => table.status === 'EMPTY');

    return (
        <>
            <div className="p-4 border rounded-md mb-3">
                <h2 className="font-bold mb-3 text-lg">Chuyển bàn</h2>
                <div className="flex flex-col gap-1 mb-3">
                    <label className="font-semibold">Lý do chuyển bàn: </label>
                    <TextArea
                        className="w-full h-20"
                        placeholder="Nhập lý do chuyển bàn"
                        showCount
                        maxLength={255}
                    ></TextArea>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="font-semibold">Chọn bàn muốn chuyển đến: </label>
                    {floorList.map((floor, index) => (
                        <Collapse
                            key={index}
                            expandIconPosition="end"
                            className="mb-4"
                            items={[
                                {
                                    key: `${index}`,
                                    label: (
                                        <div className="border-b rounded-lg border bg-white text-center text-lg font-bold">
                                            Tầng {floor.flo_name}
                                        </div>
                                    ),
                                    children: areaList.map((area, aIndex) => (
                                        <Collapse
                                            key={aIndex}
                                            expandIconPosition="end"
                                            className="mb-3"
                                            items={[
                                                {
                                                    key: `${aIndex}`,
                                                    label: (
                                                        <div className="flex items-center justify-between font-semibold">
                                                            <p className="text-[16px]">Khu {area.area_name}</p>
                                                            <div className="px-4 border rounded-xl">4 bàn trống</div>
                                                        </div>
                                                    ),
                                                    children: (
                                                        <div className="grid xl:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center gap-6">
                                                            {tableEmptyList.map((table, tIndex) => (
                                                                <div
                                                                    key={tIndex}
                                                                    className={`flex flex-col items-center justify-between p-2 ${
                                                                        TABLE_STATUS[table.status].border
                                                                    } ${
                                                                        TABLE_STATUS[table.status].background
                                                                    } rounded-md bg-white ${
                                                                        tIndex === activeTableMove.tIndex
                                                                            ? `outline-offset-4 outline-2 outline outline-primary`
                                                                            : ''
                                                                    } cursor-pointer`}
                                                                    onClick={() =>
                                                                        setActiveTableMove({
                                                                            tIndex,
                                                                            floor,
                                                                            area,
                                                                            table,
                                                                        })
                                                                    }
                                                                >
                                                                    <div
                                                                        className={`flex items-start justify-between w-full h-[min-content]`}
                                                                    >
                                                                        <div>
                                                                            <h3 className="font-bold">
                                                                                Bàn {table.tab_name}
                                                                            </h3>
                                                                            <p className="text-gray-500 text-sm">
                                                                                ({table.capacity} chỗ)
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ),
                                                },
                                            ]}
                                        />
                                    )),
                                },
                            ]}
                        />
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
                <Button type="primary" className="py-5 w-[75%] text-lg">
                    Xác nhận chuyển tới{' '}
                    <span className="font-bold">{`Bàn ${activeTableMove?.table?.tab_name} Khu ${activeTableMove?.area?.area_name} Tầng ${activeTableMove?.floor?.flo_name}`}</span>
                </Button>
                <Button className="py-5 w-[25%] text-lg" onClick={() => setIsOpenTableModal(false)}>
                    Đóng
                </Button>
            </div>
        </>
    );
};

export default MoveTable;
