import pb from './lib/pocketbase';

import { useForm } from 'react-hook-form';
import { useLogout } from './hooks/useLogout';
import { useLogin } from './hooks/useLogin';

export const Auth = () => {
    // Custom hook que retorna una funcion que automaticamente cierra la sesion y cambia el estado de una variable solo para
    // renderizar de nuevo el componente (posiblemente un useEffect seria mejor)
    const handdleLogout = useLogout();

    const { register, handleSubmit, reset } = useForm();

    // mutate: es el resutlado de usar useMutation, y para
    const { mutate: login, isLoading, isError } = useLogin();

    // Variable mutable que servira solo para que detecte que el usuario se deslogueo y pueda redenizar de nuevo la page
    const isLogged = pb.authStore.isValid;

    console.log(isLoading);
    const onSubmit = async (data) => {
        login(data);
        reset(); // Vacia los campos del furmulario, es una funcion del hook useForm.
    };

    if (isLogged) {
        return (
            <>
                <h1 className="text-5xl font-bold text-login">
                    Logged In: {pb.authStore.model.email}
                </h1>
                <button
                    className="btn btn-primary mt-3"
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
            {isError && (
                <p style={{ color: 'red' }}>
                    Email or Password are not working
                </p>
            )}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-login text-center">
                            Login now!
                        </h1>
                        <p className="py-3 text-center">Some Random Shit</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
