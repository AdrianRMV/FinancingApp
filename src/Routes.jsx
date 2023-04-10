import { createBrowserRouter } from 'react-router-dom';
import { Auth, Home } from './Pages';
import { MainApp } from './MainApp';
import { ErrorPage } from './Pages/ErrorPage';
export const getRoutes = () =>
    createBrowserRouter([
        {
            path: '/',
            element: <MainApp />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: 'login',
                    element: <Auth />,
                },
            ],
        },
    ]);
