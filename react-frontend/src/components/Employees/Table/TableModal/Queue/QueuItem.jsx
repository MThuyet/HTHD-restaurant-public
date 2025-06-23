import { Button } from 'antd';
import { PhoneOutlined, TeamOutlined, ClockCircleOutlined } from '@ant-design/icons';

const QueueItem = ({ Queue }) => {
    return (
        <div className="flex items-start justify-between border-l-[3px] border-2 p-3 rounded-md border-l-darkBlue">
            <div>
                <h3 className="font-semibold">Nguyễn Văn A</h3>
                <p className="text-gray-500">
                    <PhoneOutlined /> 0332600888
                </p>
                <p className="text-gray-500">
                    <TeamOutlined /> 4 người
                </p>
                <p className="text-gray-500">
                    <ClockCircleOutlined /> Đặt bàn lúc: 10:20
                </p>
            </div>
            <div>
                <Button>Xếp bàn khác</Button>
            </div>
        </div>
    );
};

export default QueueItem;
