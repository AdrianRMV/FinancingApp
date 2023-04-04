import { useState } from 'react';
import pb from './lib/pocketbase';

import { useForm } from 'react-hook-form';

export const Auth = () => {
    const { register, handleSubmit } = useForm();
    const [isLoading, setisLoading] = useState(false);
    const [dummy, setDummy] = useState(0);

    const isLogged = pb.authStore.isValid;

    const login = async ({ email, password }) => {
        setisLoading(true);
        try {
            const userData = await pb
                .collection('users')
                .authWithPassword(email, password);
        } catch (error) {
            alert(error);
        }
        setisLoading(false);
    };

    const handdleLogout = () => {
        // "logout" the last authenticated account
        pb.authStore.clear();
        setDummy(Math.random());
    };

    if (isLogged) {
        return (
            <>
                <h1 className="text-5xl font-bold text-login">
                    Logged In: {pb.authStore.model.email}
                </h1>
                <button
                    className="btn btn-primary"
                    onClick={() => handdleLogout()}
                    disabled={!isLogged}
                >
                    Cerrar Sesion
                </button>
            </>
        );
    }

    return (
        <>
            {isLoading && <p>Loading...</p>}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-login">
                            Login now!
                        </h1>
                        <p className="py-6">Some Random Shit</p>
                    </div>
                    <form onSubmit={handleSubmit(login)}>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Email
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                        {...register('email')}
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Password
                                        </span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                        {...register('password')}
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <button
                                        className="btn btn-primary"
                                        type="submit"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Loading...' : 'Login'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
