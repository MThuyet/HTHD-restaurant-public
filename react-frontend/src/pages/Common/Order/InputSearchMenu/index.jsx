import { Input } from 'antd';
import { IoSearchSharp } from 'react-icons/io5';

const InputSearchMenu = () => {
    return (
        <Input
            style={{ boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)' }}
            placeholder="Nhập tên món ăn hoặc đồ uống bạn cần tìm..."
            prefix={<IoSearchSharp className="!mr-2 text-[22px]" />}
            className="border-0 font-[500]"
        />
    );
};

export default InputSearchMenu;
