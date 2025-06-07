const NutritionInfor = ({ listData }) => {
    return (
        <div className="flex flex-wrap gap-3">
            {listData.map((item, index) => (
                <div className="font-semibold bg-green-100 rounded-full px-3 py-1" key={index}>
                    {item.name}
                    {item.amount && <span className="ml-1 text-sm text-gray-600">({item.amount})</span>}
                </div>
            ))}
        </div>
    );
};

export default NutritionInfor;
