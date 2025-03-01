function Card({ robot, handle }) {
    return (
        <>
            <div className="card" onClick={handle} value={robot.id}>
                <img
                    src={`https://robohash.org/${robot.name}`}
                    alt="img"
                    value={robot.id}
                />
                <h1 value={robot.id}> {robot.name} </h1>
            </div>
        </>
    );
}

export default Card;
