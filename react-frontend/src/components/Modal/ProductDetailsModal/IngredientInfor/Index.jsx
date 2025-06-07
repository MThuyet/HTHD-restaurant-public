const IngredientInfor = ({ listData }) => {
    return (
        <div className="flex flex-wrap gap-3">
            {listData.map((item, index) => (
                <div className="font-semibold bg-bgBlue rounded-full px-3 py-1" key={index}>
                    {item.name}
                </div>
            ))}
        </div>
    );
};

export default IngredientInfor;
