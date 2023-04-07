export const ListItem = () => {
    return (
        <>
            <div className="item">
                <input
                    type="text"
                    placeholder="Description"
                    className="input input-bordered w-30 sm:w-full  "
                />
                <input
                    type="text"
                    placeholder="Price"
                    className="input input-bordered w-20 sm:w-2/4 "
                />
            </div>
        </>
    );
};
