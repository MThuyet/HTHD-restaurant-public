import { Input, Radio } from 'antd';
import { IoSearchSharp } from 'react-icons/io5';
import SegmentedCategories from '~/components/Commons/SegmentedCategories';
import Content from './Content';

const options = [
    { label: 'a-z', value: 'asc' },
    { label: 'z-a', value: 'desc' },
];

const MenuManagement = () => {
    return (
        <div className="flex flex-col gap-4 w-full h-[calc(100vh-104px)] overflow-hidden">
            {/* Search */}
            <div className="flex gap-3 items-center justify-between">
                <Input
                    className="!py-[10px] w-[50%] border-none"
                    prefix={<IoSearchSharp className="text-xl !mr-1" />}
                    placeholder="Nhập tên món cần tìm"
                    style={{ boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)' }}
                />

                {/* Sort */}
                <div
                    className="bg-white text-nowrap flex px-3 py-[10px] gap-3 items-center rounded-[6px]"
                    style={{ boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)' }}
                >
                    Sắp xếp theo
                    <Radio.Group options={options} defaultValue="asc" />
                </div>
            </div>

            <SegmentedCategories borderRadius={6} />

            <div className="flex-1 overflow-hidden">
                <Content />
            </div>
        </div>
    );
};

export default MenuManagement;
