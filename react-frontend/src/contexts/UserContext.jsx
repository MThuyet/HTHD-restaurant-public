import { createContext, useState, useEffect, useMemo } from 'react';

const UserContext = createContext({
    user: null,
    isLoading: true,
    loginUser: () => {},
    logoutUser: () => {},
});

export default UserContext;

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    // Lấy thông tin user từ sessionStorage khi component mount
    useEffect(() => {
        try {
            const userData = sessionStorage.getItem('user');
            if (userData) {
                setUser(JSON.parse(userData));
            }
        } catch (error) {
            console.error('Lỗi khi lấy thông tin user:', error);
            sessionStorage.removeItem('user');
        } finally {
            setIsLoading(false);
        }
    }, []);

    const loginUser = (userData) => {
        // Lưu thông tin người dùng vào sessionStorage
        sessionStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    };

    const logoutUser = () => {
        // Xóa thông tin người dùng khỏi sessionStorage
        sessionStorage.removeItem('user');
        setUser(null);
    };

    // Sử dụng useMemo để tránh re-render không cần thiết
    const contextValue = useMemo(
        () => ({
            user,
            loginUser,
            logoutUser,
            isLoading,
        }),
        [user, isLoading],
    );

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
