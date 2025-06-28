import authorizedAxiosInstance from '~/utils/authorizeAxios';

export const loginAPI = async (data) => {
    // Lấy CSRF token trước khi đăng nhập
    await authorizedAxiosInstance.get('/sanctum/csrf-cookie');
    const response = await authorizedAxiosInstance.post('/api/login', data);
    return response.data;
};

export const logoutAPI = async () => {
    const response = await authorizedAxiosInstance.post('/api/logout');
    return response.data;
};

// fetch list employee
export const fetchListEmployee = async (params) => {
    const response = await authorizedAxiosInstance.get(`/api/employees?${params}`);
    return response.data;
};

// fetch list branch
export const fetchListBranchAPI = async (params) => {
    const response = await authorizedAxiosInstance.get(`/api/branches?${params}`);
    return response.data;
};

// create branch
export const createBranchAPI = async (data) => {
    const response = await authorizedAxiosInstance.post('/api/branches', data);
    return response.data;
};

// update branch
export const updateBranchAPI = async (bra_code, data) => {
    const response = await authorizedAxiosInstance.put(`/api/branches/${bra_code}`, data);
    return response.data;
};

// delete branch
export const deleteBranchAPI = async (bra_code) => {
    const response = await authorizedAxiosInstance.delete(`/api/branches/${bra_code}`);
    return response.data;
};
