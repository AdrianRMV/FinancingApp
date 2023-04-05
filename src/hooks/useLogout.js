import pb from '../lib/pocketbase';
import { useState } from 'react';

export const useLogout = () => {
    const [dummy, setDummy] = useState(0);

    const handdleLogout = () => {
        // "logout" the last authenticated account
        pb.authStore.clear();
        setDummy(Math.random()); // Use math random pero puede ser cualquier shit solo con que cambie el estado de la variable
    };

    return handdleLogout;
};
