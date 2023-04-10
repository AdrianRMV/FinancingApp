import { Outlet } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
export const MainApp = () => {
    return (
        <UserProvider>
            <Outlet />
        </UserProvider>
    );
};
