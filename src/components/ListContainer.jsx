import { ListItem } from './ListItem';

export const ListContainer = () => {
    return (
        <section className="list-container">
            <h1 className="font-mono md:text-3xl sm:text-2xl text-slate-50 font-bold">
                ABRIL
            </h1>
            <div className="list-items-container">
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
        </section>
    );
};
