import { Checkbox, Divider, Input, Segmented, FloatButton, Collapse } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { IoSearchSharp } from 'react-icons/io5';
import { RiDropdownList } from 'react-icons/ri';
import { BsDiagram3 } from 'react-icons/bs';

import Table from '~/components/Commons/Table';
import { TABLE_STATUS } from '~/utils/constants';
import { areaList, floorList, tableList } from '~/apis/mockData';

const TableManagement = () => {
    return (
        <>
            <div className="flex gap-4">
                <div
                    className="sticky top-[88px] w-[250px] flex flex-col p-2 rounded-md bg-white"
                    style={{ boxShadow: '0 2px 2px rgba(0, 0, 0, 0.25)', height: 'calc(100vh - 72px - 32px)' }}
                >
                    <h3 className="text-[16px] mb-3">
                        <FilterOutlined /> Lọc theo vị trí
                    </h3>
                    {floorList.map((floor, index) => (
                        <div className="flex flex-col" key={floor.flo_name}>
                            <h4 className="font-semibold text-gray-600">Tầng {floor.flo_name}</h4>
                            {areaList.map((area) => (
                                <Checkbox key={area.area_name}>Khu {area.area_name}</Checkbox>
                            ))}
                            {floorList.length - index - 1 ? <Divider style={{ borderColor: '#d9d9d9' }} /> : ''}
                        </div>
                    ))}
                </div>
                <div className="flex-1 pb-12">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <Input
                            style={{ boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)' }}
                            placeholder="Nhập tên bàn bạn cần tìm..."
                            prefix={<IoSearchSharp className="!mr-2 text-[22px]" />}
                            className="border-0 p-2 font-[500] max-w-[300px] h-full"
                        />

                        <div
                            className="flex flex-wrap items-center gap-4 py-1 px-4 rounded-md bg-white"
                            style={{ boxShadow: '0 2px 2px rgba(0, 0, 0, 0.25)' }}
                        >
                            {Object.entries(TABLE_STATUS).map(([key, element]) => (
                                <Checkbox
                                    key={key}
                                    defaultChecked={key === 'EMPTY' ? true : false}
                                    className="items-center"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className={`p-1 rounded-sm ${element.background}`}>
                                            <img className="w-7 h-7" src={element.image} alt={element.text} />
                                        </div>
                                        <span className={`font-semibold ${element.color}`}>{element.text}</span>
                                    </div>
                                </Checkbox>
                            ))}
                        </div>
                    </div>
                    {floorList.map((floor, index) => (
                        <Collapse
                            key={index}
                            expandIconPosition="end"
                            defaultActiveKey={[`${index}`]}
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
                                                            <div className="px-4 border rounded-xl">2/4 bàn trống</div>
                                                        </div>
                                                    ),
                                                    children: (
                                                        <div className="grid xl:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center gap-6">
                                                            {tableList.map((table, tIndex) => (
                                                                <Table key={tIndex} table={table} />
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
            <div className="fixed bottom-2 left-[50%] translate-x-[-50%] flex items-center gap-2 p-2 rounded-lg text-nowrap bg-[#333] text-[16px] text-white shadow-lg">
                Chế độ hiển thị:
                <Segmented
                    className="ml-2 rounded-md bg-gray-200"
                    options={[
                        {
                            value: 'grid',
                            label: (
                                <div className="flex items-center gap-1 text-[16px]">
                                    <RiDropdownList /> Thẻ
                                </div>
                            ),
                        },
                        {
                            value: 'structure',
                            label: (
                                <div className="flex items-center gap-1 text-[16px]">
                                    <BsDiagram3 /> Sơ đồ
                                </div>
                            ),
                        },
                    ]}
                ></Segmented>
            </div>
        </>
    );
};

export default TableManagement;
