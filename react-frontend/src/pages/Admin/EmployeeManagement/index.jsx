/* eslint-disable no-unused-vars */
import { PlusOutlined, EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { ProTable } from '@ant-design/pro-components';
import { useQuery } from '@tanstack/react-query';
import { Button, Tooltip } from 'antd';
import { useMemo, useState } from 'react';
import { fetchListEmployee } from '~/apis';

const EmployeeManagement = () => {
    const [queryParams, setQueryParams] = useState('page=1');

    const fetchEmployees = useQuery({
        queryKey: ['employees', queryParams],
        queryFn: async () => await fetchListEmployee(queryParams),
        staleTime: 300000, // Dữ liệu trong 5 phút sẽ là mới
        cacheTime: 600000, // Thời gian cache là 10 phút
        refetchOnWindowFocus: false, // Không refetch khi focus vào cửa sổ
        refetchOnMount: false, // Chỉ fetch một lần khi mount
        keepPreviousData: true, // Giữ dữ liệu cũ khi chuyển trang để tránh UI nhấp nháy
    });

    const { data: employees, isLoading } = fetchEmployees;

    const memoizedDataSource = useMemo(() => employees?.data?.results || [], [employees?.data?.results]);

    // biến đổi dữ liệu thành một object chứa các key value để phù hợp với dữ liệu của valueEnum trong Columns của ProTable
    // sử dụng Set để lấy các giá trị unique
    const valueEnumPosition = useMemo(() => {
        const uniquePositions =
            [...new Set(employees?.data?.results?.map((employee) => employee.position?.pos_name))].reduce(
                (acc, posName) => {
                    if (posName) acc[posName] = posName;
                    return acc;
                },
                {},
            ) || {};
        return uniquePositions;
    }, [employees?.data?.results]);

    const valueEnumDepartment = useMemo(() => {
        const uniqueDepartments =
            [...new Set(employees?.data?.results?.map((employee) => employee.department?.dep_name))].reduce(
                (acc, depName) => {
                    if (depName) acc[depName] = depName;
                    return acc;
                },
                {},
            ) || {};
        return uniqueDepartments;
    }, [employees?.data?.results]);

    const valueEnumBranch = useMemo(() => {
        const uniqueBranches =
            [...new Set(employees?.data?.results?.map((employee) => employee.branch?.bra_name))].reduce(
                (acc, braName) => {
                    if (braName) acc[braName] = braName;
                    return acc;
                },
                {},
            ) || {};
        return uniqueBranches;
    }, [employees?.data?.results]);

    // hàm render các nút hành động
    const renderActions = useMemo(() => {
        return (dom, entity, index, action, schema) => {
            return (
                <div className="flex gap-2">
                    <Tooltip title="Xem chi tiết">
                        <Button
                            icon={<EyeOutlined />}
                            style={{
                                borderColor: '#1890ff',
                                color: '#1890ff',
                            }}
                        />
                    </Tooltip>
                    <Tooltip title="Chỉnh sửa">
                        <Button
                            icon={<EditOutlined />}
                            style={{
                                borderColor: '#fa8c16',
                                color: '#fa8c16',
                            }}
                        />
                    </Tooltip>
                    <Tooltip title="Xóa">
                        <Button
                            icon={<DeleteOutlined />}
                            style={{
                                borderColor: '#f5222d',
                                color: '#f5222d',
                            }}
                        />
                    </Tooltip>
                </div>
            );
        };
    }, []);

    const memoizedColumns = useMemo(() => {
        return [
            {
                title: 'Mã nhân viên',
                dataIndex: 'emp_code',
                search: false,
            },
            {
                title: 'Họ tên',
                dataIndex: 'full_name',
                fieldProps: {
                    placeholder: 'Nhập tên nhân viên cần tìm...',
                },
                sorter: true,
            },
            {
                title: 'Chi nhánh',
                dataIndex: ['branch', 'bra_name'],
                fieldProps: {
                    placeholder: 'Chọn chi nhánh',
                },
                valueEnum: valueEnumBranch,
                sorter: true,
            },
            {
                title: 'Chức vụ',
                dataIndex: ['position', 'pos_name'],
                fieldProps: {
                    placeholder: 'Chọn chức vụ',
                },
                valueEnum: valueEnumPosition,
                sorter: true,
            },
            {
                title: 'Phòng ban',
                dataIndex: ['department', 'dep_name'],
                fieldProps: {
                    placeholder: 'Chọn phòng ban',
                },
                valueEnum: valueEnumDepartment,
                sorter: true,
            },
            {
                title: 'Số điện thoại',
                dataIndex: 'phone_number',
                fieldProps: {
                    placeholder: 'Nhập số điện thoại',
                },
            },
            {
                title: 'Giới tính',
                dataIndex: 'gender',
                render: (dom, entity, index, action, schema) => {
                    return entity.gender === 0 ? 'Nữ' : 'Nam';
                },
                valueEnum: {
                    0: 'Nữ',
                    1: 'Nam',
                },
            },
            {
                title: 'Hành động',
                width: 120,
                hideInSearch: true,
                render: renderActions,
            },
        ];
    }, [valueEnumPosition, valueEnumDepartment, valueEnumBranch, renderActions]);

    return (
        <ProTable
            loading={isLoading}
            className="flex flex-col w-full"
            columns={memoizedColumns}
            dataSource={memoizedDataSource}
            rowKey="emp_code"
            search={{ resetText: 'Làm mới', labelWidth: 'auto' }}
            options={{ fullScreen: true, reload: false }}
            pagination={{
                total: employees?.data?.total,
                pageSize: employees?.data?.per_page,
                onChange: (page) => {
                    setQueryParams(`page=${page}`);
                },
            }}
            dateFormatter="string"
            headerTitle="Danh sách nhân viên"
            toolBarRender={() => [
                <Button key="button" icon={<PlusOutlined />} type="primary">
                    Thêm nhân viên mới
                </Button>,
            ]}
        />
    );
};

export default EmployeeManagement;
