import { IoIosWarning } from 'react-icons/io';

const AllergyInfor = ({ listData }) => {
    return (
        <div className="flex flex-wrap gap-3 font-semibold">
            {listData.map((item, index) => (
                <div className="flex gap-2 items-center bg-darkRed rounded-full px-3 py-1 text-white" key={index}>
                    <IoIosWarning className="text-base text-[#FFA500]" />
                    {item.name}
                </div>
            ))}
        </div>
    );
};

export default AllergyInfor;
