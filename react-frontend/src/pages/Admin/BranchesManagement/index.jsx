/* eslint-disable no-unused-vars */
import { PlusOutlined, EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { ProTable } from '@ant-design/pro-components';
import { App, Button, Popconfirm, Tag, Tooltip } from 'antd';
import { useMemo, useRef, useState } from 'react';
import { deleteBranchAPI, fetchListBranchAPI } from '~/apis';
import dayjs from 'dayjs';
import ViewDetailBranch from './ModalBranch/ViewDetailBranch';
import CreateBranch from './ModalBranch/CreateBranch';
import { QuestionCircleOutlined } from '@ant-design/icons';
import UpdateBranch from './ModalBranch/UpdateBranch';

const BranchesManagement = () => {
    const { message, notification } = App.useApp();

    const actionRef = useRef(null);

    const refreshTable = () => {
        actionRef.current?.reload();
    };

    // tham số phân trang
    const [pagination, setPagination] = useState({
        pageSize: 5,
        current: 1,
        total: 0,
    });

    // modal view details
    const [isOpenModalDetails, setIsOpenModalDetails] = useState(false);
    const [dataModalDetails, setDataModalDetails] = useState(null);

    // modal create branch
    const [isOpenModalCreateBranch, setIsOpenModalCreateBranch] = useState(false);

    // modal update branch
    const [isOpenModalUpdateBranch, setIsOpenModalUpdateBranch] = useState(false);
    const [dataModalUpdateBranch, setDataModalUpdateBranch] = useState(null);

    // hàm render các nút hành động
    const renderActions = useMemo(() => {
        return (dom, entity, index, action, schema) => {
            return (
                <div className="flex gap-2">
                    <Tooltip title="Xem chi tiết">
                        <Button
                            onClick={() => {
                                setIsOpenModalDetails(true);
                                setDataModalDetails(entity);
                            }}
                            icon={<EyeOutlined />}
                            style={{
                                borderColor: '#1890ff',
                                color: '#1890ff',
                            }}
                        />
                    </Tooltip>
                    <Tooltip title="Chỉnh sửa">
                        <Button
                            onClick={() => {
                                setDataModalUpdateBranch(entity);
                                setIsOpenModalUpdateBranch(true);
                            }}
                            icon={<EditOutlined />}
                            style={{
                                borderColor: '#fa8c16',
                                color: '#fa8c16',
                            }}
                        />
                    </Tooltip>
                    <Tooltip title="Xóa">
                        <Popconfirm
                            styles={{ color: '#f5222d !important' }}
                            placement="leftTop"
                            title="Xóa chi nhánh"
                            description="Bạn có chắc muốn xóa chi nhánh này?"
                            okText="Xác nhận"
                            okButtonProps={{
                                className: 'interceptor-loading',
                                style: { backgroundColor: '#fff', borderColor: '#f5222d', color: '#f5222d' },
                            }}
                            onConfirm={async () => {
                                try {
                                    await deleteBranchAPI(entity.bra_code);
                                    message.success('Xóa chi nhánh thành công!');
                                } catch (error) {
                                    notification.error({
                                        message: error.response.data.message,
                                        duration: 3,
                                    });
                                }
                            }}
                            cancelText="Hủy"
                            icon={<QuestionCircleOutlined style={{ color: '#f5222d' }} />}
                        >
                            <Button
                                onClick={() => {}}
                                icon={<DeleteOutlined />}
                                style={{
                                    borderColor: '#f5222d',
                                    color: '#f5222d',
                                }}
                            />
                        </Popconfirm>
                    </Tooltip>
                </div>
            );
        };
    }, [message, notification]);

    // các trường hiển thị
    const memoizedColumns = useMemo(() => {
        return [
            {
                title: 'Mã chi nhánh',
                dataIndex: 'bra_code',
                search: false,
            },
            {
                title: 'Tên chi nhánh',
                dataIndex: 'bra_name',
                fieldProps: {
                    placeholder: 'Nhập tên chi nhánh cần tìm...',
                },
            },
            {
                title: 'Địa chỉ',
                dataIndex: 'address',
                fieldProps: {
                    placeholder: 'Nhập địa chỉ chi nhánh cần tìm...',
                },
            },
            {
                title: 'Số điện thoại',
                dataIndex: 'phone_number1',
                search: false,
            },
            {
                title: 'Email',
                dataIndex: 'email',
                fieldProps: {
                    placeholder: 'Nhập email chi nhánh cần tìm...',
                },
            },
            {
                title: 'Trạng thái hoạt động',
                dataIndex: 'active',
                render: (dom, entity, index, action, schema) => {
                    return entity.active ? <Tag color="green">Hoạt động</Tag> : <Tag color="red">Không hoạt động</Tag>;
                },
                fieldProps: {
                    placeholder: 'Chọn trạng thái',
                    optionRender: (item) => (
                        <span style={{ color: item.value == 1 ? 'green' : 'red' }}>{item.label}</span>
                    ),
                    style: ({ value }) => ({
                        color: value == 1 ? 'green' : 'red',
                    }),
                },
                valueEnum: {
                    1: { text: 'Hoạt động', status: 'Success' },
                    0: { text: 'Không hoạt động', status: 'Error' },
                },
            },
            {
                title: 'Ngày tạo',
                dataIndex: 'created_at',
                search: false,
                render: (created_at) => new Date(created_at).toLocaleString('vi-VN'),
                sorter: (a, b) => dayjs(a.created_at).valueOf() - dayjs(b.created_at).valueOf(),
            },
            {
                title: 'Hành động',
                width: 120,
                hideInSearch: true,
                render: renderActions,
            },
        ];
    }, [renderActions]);

    return (
        <>
            <ProTable
                bordered
                className="flex flex-col w-full"
                columns={memoizedColumns}
                actionRef={actionRef}
                request={async (params, sort, filter) => {
                    // Xử lý params để tạo query string
                    let searchParams = `page=${params.current || 1}&per_page=${params.pageSize || 5}`;
                    if (params.bra_name) searchParams += `&bra_name=${params.bra_name}`;
                    if (params.address) searchParams += `&address=${params.address}`;
                    if (params.phone_number1) searchParams += `&phone_number1=${params.phone_number1}`;
                    if (params.email) searchParams += `&email=${params.email}`;
                    if (params.active !== undefined) searchParams += `&active=${params.active}`;

                    const res = await fetchListBranchAPI(searchParams);

                    setPagination({
                        pageSize: res.data.per_page,
                        current: res.data.current_page,
                        total: res.data.total,
                    });

                    return {
                        data: res.data.results,
                        total: res.data.total,
                    };
                }}
                rowKey="bra_code"
                search={{ resetText: 'Làm mới', labelWidth: 'auto' }}
                options={{ fullScreen: true, reload: false }}
                dateFormatter="string"
                headerTitle="Danh sách chi nhánh"
                pagination={{
                    pageSize: pagination.pageSize,
                    current: pagination.current,
                    total: pagination.total,
                    showSizeChanger: true,
                    pageSizeOptions: [5, 10, 15, 20],
                    showTotal(total, range) {
                        return (
                            <div>
                                {' '}
                                {range[0]} - {range[1]} / {total} Chi nhánh
                            </div>
                        );
                    },
                }}
                toolBarRender={() => [
                    <Button
                        onClick={() => {
                            setIsOpenModalCreateBranch(true);
                        }}
                        key="button"
                        icon={<PlusOutlined />}
                        type="primary"
                    >
                        Thêm chi nhánh mới
                    </Button>,
                ]}
            />

            <ViewDetailBranch
                data={dataModalDetails}
                isOpen={isOpenModalDetails}
                onCancel={() => setIsOpenModalDetails(false)}
            />

            <CreateBranch
                isOpen={isOpenModalCreateBranch}
                setIsOpen={setIsOpenModalCreateBranch}
                refreshTable={refreshTable}
            />

            <UpdateBranch
                isOpen={isOpenModalUpdateBranch}
                data={dataModalUpdateBranch}
                setDataModalUpdateBranch={setDataModalUpdateBranch}
                setIsOpen={setIsOpenModalUpdateBranch}
                refreshTable={refreshTable}
            />
        </>
    );
};

export default BranchesManagement;
