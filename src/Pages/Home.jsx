import { ListContainer } from '../components/ListContainer';

export const Home = () => {
    return (
        <>
            {/* <h1 className="text-5xl font-bold text-login">
                Logged In: {pb.authStore.model.email}
            </h1> */}
            <ListContainer />
            <button
                className="btn btn-primary mt-3"
                onClick={() => handdleLogout()}
                // disabled={!isLogged}
            >
                Cerrar Sesion
            </button>
        </>
    );
};
