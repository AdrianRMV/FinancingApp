import pb from '../lib/pocketbase';
import { useMutation } from 'react-query';

export const useLogin = () => {
    const login = async ({ email, password }) => {
        const userData = await pb
            .collection('users')
            .authWithPassword(email, password);
    };
    return useMutation(login);
};
