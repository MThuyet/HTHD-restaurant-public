import authorizedAxiosInstance from '~/utils/authorizeAxios';

export const loginAPI = async () => {
    const response = await authorizedAxiosInstance.get('/login');
    return response.data;
};
