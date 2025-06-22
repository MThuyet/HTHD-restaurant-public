/* eslint-disable no-unused-vars */
import { PlusOutlined, EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { ProTable } from '@ant-design/pro-components';
import { useQuery } from '@tanstack/react-query';
import { App, Button, Popconfirm, Tag, Tooltip } from 'antd';
import { useMemo, useState } from 'react';
import { deleteBranchAPI, fetchListBranchAPI } from '~/apis';
import dayjs from 'dayjs';
import ViewDetailBranch from './ModalBranch/ViewDetailBranch';
import CreateBranch from './ModalBranch/CreateBranch';
import { QuestionCircleOutlined } from '@ant-design/icons';
import UpdateBranch from './ModalBranch/UpdateBranch';

const BranchesManagement = () => {
    const { message, notification } = App.useApp();

    // phân trang
    const [queryParams, setQueryParams] = useState('page=1');

    // fetch dữ liệu từ Back-end
    const fetchBranches = useQuery({
        queryKey: ['branches', queryParams],
        queryFn: async () => await fetchListBranchAPI(queryParams),
        staleTime: 300000, // Dữ liệu trong 5 phút sẽ là mới
        cacheTime: 600000, // Thời gian cache là 10 phút
        refetchOnWindowFocus: false, // Không refetch khi focus vào cửa sổ
        refetchOnMount: false, // Chỉ fetch một lần khi mount
        keepPreviousData: true, // Giữ dữ liệu cũ khi chuyển trang để tránh UI nhấp nháy
    });

    // dữ liệu nhận về từ api
    const { data: branches, isLoading, refetch } = fetchBranches;

    // list data truyền vô ProTable
    const memoizedDataSource = useMemo(() => branches?.data?.results || [], [branches?.data?.results]);

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
                                    refetch();
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
    }, [message, notification, refetch]);

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
                render: (active) =>
                    active ? <Tag color="green">Hoạt động</Tag> : <Tag color="red">Không hoạt động</Tag>,
                fieldProps: {
                    placeholder: 'Chọn trạng thái',
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
                locale={{
                    emptyText: isLoading ? 'Đang tải dữ liệu' : '',
                }}
                bordered
                loading={isLoading}
                className="flex flex-col w-full"
                columns={memoizedColumns}
                dataSource={memoizedDataSource}
                rowKey="bra_code"
                search={{ resetText: 'Làm mới', labelWidth: 'auto' }}
                options={{ fullScreen: true, reload: false }}
                pagination={{
                    total: branches?.data?.total,
                    pageSize: branches?.data?.per_page,
                    onChange: (page) => {
                        setQueryParams(`page=${page}`);
                    },
                }}
                dateFormatter="string"
                headerTitle="Danh sách chi nhánh"
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

            <CreateBranch isOpen={isOpenModalCreateBranch} setIsOpen={setIsOpenModalCreateBranch} refetch={refetch} />

            <UpdateBranch
                isOpen={isOpenModalUpdateBranch}
                data={dataModalUpdateBranch}
                setDataModalUpdateBranch={setDataModalUpdateBranch}
                setIsOpen={setIsOpenModalUpdateBranch}
                refetch={refetch}
            />
        </>
    );
};

export default BranchesManagement;
