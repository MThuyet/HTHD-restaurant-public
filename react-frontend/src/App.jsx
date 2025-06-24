import { useContext, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';

import Errors from './pages/Errors';
import UserContext from './contexts/UserContext';
import LoadingScreen from './components/Commons/LoadingScreen';
import { publicRoutes, privateRoutes } from './routes';

function App() {
    const { user, isLoading } = useContext(UserContext);
    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <div id="App">
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;

                    let Layout = route.layout ? route.layout : Fragment;

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}

                {privateRoutes.map((route, index) => {
                    if (!user || !user.permissions.includes(route.permission)) {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<Errors title={403} content="Bạn không có quyền truy cập trang này" />}
                            />
                        );
                    }
                    const Page = route.component;

                    let Layout = route.layout ? route.layout : Fragment;

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
