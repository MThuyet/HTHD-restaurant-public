import axios from 'axios';
import { API_URL } from './constants';
import { interceptorLoadingElements } from './formatter';

// khởi tạo một đối tượng Axios (authorizedAxiosInstance) mục đích để custom và cấu hình chung cho dự án
let authorizedAxiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 1000 * 60 * 10,
    withCredentials: true,
    withXSRFToken: true,
});

// cấu hình interceptors
// Add a request interceptor (can thiệp vào giữa những request)
authorizedAxiosInstance.interceptors.request.use(
    (config) => {
        // chặn spam click
        interceptorLoadingElements(true);

        // Lấy token từ sessionStorage
        const token = sessionStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor (can thiệp vào giữa response nhận về)
authorizedAxiosInstance.interceptors.response.use(
    (response) => {
        // sau khi có response thì trả về trạng thái như ban đầu
        interceptorLoadingElements(false);
        return response;
    },
    (error) => {
        // có lỗi cũng trả về trạng thái như ban đầu
        interceptorLoadingElements(false);

        // xử lý lỗi tập trung nếu có từ phần trả về của mọi API

        // Xử lý khi token hết hạn
        if (error.response?.status === 401) {
            sessionStorage.removeItem('token');
            // Có thể thêm redirect đến trang login nếu cần
        }

        return Promise.reject(error);
    },
);

export default authorizedAxiosInstance;
