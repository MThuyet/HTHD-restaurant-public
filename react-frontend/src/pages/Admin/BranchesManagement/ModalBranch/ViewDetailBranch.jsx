import { Descriptions, Modal, Tag } from 'antd';
import { formatTime } from '~/utils/formatter';

const ViewDetailBranch = ({ data, isOpen, onCancel }) => {
    const items = [
        {
            key: 'bra_code',
            label: 'Mã chi nhánh',
            children: <strong>{data?.bra_code}</strong> || 'Chưa cập nhật',
        },
        {
            key: 'bra_name',
            label: 'Tên chi nhánh',
            children: <strong>{data?.bra_name}</strong> || 'Chưa cập nhật',
        },
        {
            key: 'address',
            label: 'Địa chỉ',
            children: data?.address || 'Chưa cập nhật',
            span: 2,
        },
        {
            key: 'phone_number1',
            label: 'SĐT chính',
            children: data?.phone_number1 || 'Chưa cập nhật',
        },
        {
            key: 'phone_number2',
            label: 'SĐT phụ',
            children: data?.phone_number2 || 'Chưa cập nhật',
        },
        {
            key: 'email',
            label: 'Email',
            children: data?.email || 'Chưa cập nhật',
            span: 2,
        },
        {
            key: 'open_time',
            label: 'Giờ mở cửa',
            children: data?.open_time ? formatTime(data.open_time) : 'Chưa cập nhật',
        },
        {
            key: 'close_time',
            label: 'Giờ đóng cửa',
            children: data?.close_time ? formatTime(data.close_time) : 'Chưa cập nhật',
        },
        {
            key: 'tax_code',
            label: 'Mã số thuế',
            children: data?.tax_code || 'Chưa cập nhật',
        },
        {
            key: 'frame_code',
            label: 'Iframe map code',
            children: data?.frame_code || 'Chưa cập nhật',
        },
        {
            key: 'active',
            label: 'Trạng thái hoạt động',
            children: data?.active ? <Tag color="green">Hoạt động</Tag> : <Tag color="red">Không hoạt động</Tag>,
            span: 2,
        },
        {
            key: 'created_at',
            label: 'Ngày tạo',
            children: data?.created_at ? new Date(data.created_at).toLocaleString('vi-VN') : 'Chưa cập nhật',
        },
        {
            key: 'updated_at',
            label: 'Ngày cập nhật',
            children: data?.updated_at ? new Date(data.updated_at).toLocaleString('vi-VN') : 'Chưa cập nhật',
        },
    ];

    return (
        <Modal
            centered
            footer={null}
            open={isOpen}
            onCancel={onCancel}
            title="Chi tiết chi nhánh"
            width={{
                xs: '90%',
                sm: '80%',
                md: '60%',
                lg: '60%',
                xl: '60%',
            }}
        >
            <Descriptions
                size="middle"
                bordered
                className="mt-5 p-3"
                items={items}
                column={{
                    xs: 1, // 1 cột khi màn nhỏ
                    sm: 1, // 1 cột khi >=576px
                    md: 1, // 2 cột khi >=768px
                    lg: 2, // 2 cột khi >=992px
                    xl: 2, // 2 cột khi >=1200px
                    xxl: 2, // 2 cột khi >=1600px
                }}
            />
        </Modal>
    );
};

export default ViewDetailBranch;
