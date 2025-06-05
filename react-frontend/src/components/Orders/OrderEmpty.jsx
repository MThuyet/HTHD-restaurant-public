import { FaConciergeBell } from 'react-icons/fa';

const OrderEmpty = ({ title, description }) => {
    return (
        <div className="flex items-center flex-col justify-center h-screen">
            <FaConciergeBell className="!w-[100px] !h-[100px]" />
            <div className="font-bold text-base">{title}</div>
            <div className="font-[500] text-[#808080]">{description}</div>
        </div>
    );
};

export default OrderEmpty;
