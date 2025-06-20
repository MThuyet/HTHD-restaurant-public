import authorizedAxiosInstance from '~/utils/authorizeAxios';

export const loginAPI = async (data) => {
    // Lấy CSRF token trước khi đăng nhập
    await authorizedAxiosInstance.get('/sanctum/csrf-cookie');
    const response = await authorizedAxiosInstance.post('/api/login', data);
    return response.data;
};

// fetch list employee
export const fetchListEmployee = async (params) => {
    const response = await authorizedAxiosInstance.get(`/api/employees?${params}`);
    return response.data;
};
