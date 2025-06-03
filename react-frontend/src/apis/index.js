import authorizedAxiosInstance from '~/utils/authorizeAxios';
import { API_URL } from '~/utils/constants';

// định nghĩa các api ở đây
export const testAPI = async () => {
    const response = await authorizedAxiosInstance.get(`${API_URL}/test`);
    return response.data;
};
