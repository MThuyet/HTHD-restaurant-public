export const VALIDATE_USERNAME = {
    required: 'Vui lòng nhập tên tài khoản',
    maxLength: {
        value: 60,
        message: 'Tên tài khoản không được vượt quá 60 ký tự',
    },
    pattern: {
        value: /^[a-zA-Z0-9_]+$/,
        message: 'Tên tài khoản chỉ được chứa chữ cái, số và dấu gạch dưới',
    },
};

export const VALIDATE_PASSWORD = {
    required: 'Vui lòng nhập mật khẩu',
    maxLength: {
        value: 60,
        message: 'Mật khẩu không được vượt quá 60 ký tự',
    },
    pattern: {
        value: /^[a-zA-Z0-9_]+$/,
        message: 'Mật khẩu chỉ được chứa chữ cái, số và dấu gạch dưới',
    },
};

// dùng css pointer-event kết hợp với Axios interceptors để chặn user spam click tại bất kỳ chỗ nào có hành động click gọi api
// cách sử dụng: với tất cả các link hoặc button mà có hành động gọi api thì thêm class "interceptor-loading" cho nó
export const interceptorLoadingElements = (calling) => {
    // DOM lấy ra toàn bộ phần tử trên page hiện tại có className là 'interceptor-loading'
    const elements = document.querySelectorAll('.interceptor-loading');
    for (let i = 0; i < elements.length; i++) {
        if (calling) {
            // Nếu đang trong thời gian chờ gọi API (calling === true) thì sẽ làm mờ phần tử và chặn click bằng css pointer-events
            elements[i].style.opacity = '0.5';
            elements[i].style.pointerEvents = 'none';
        } else {
            // Ngược lại thì trả về như ban đầu, không làm gì cả
            elements[i].style.opacity = 'initial';
            elements[i].style.pointerEvents = 'initial';
        }
    }
};

// format price
export const formatPrice = (price) => {
    return Number(price).toLocaleString('vi-VN');
};
