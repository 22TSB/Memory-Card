function Nav({score, bestScore}) {
    return (
        <>
            <nav>
                <h1 className="title">Memory Game</h1>
                <div className="scoreBoard">
                    <h2 className="score">Score: {score}</h2>
                    <h2 className="bestScore">Best Score: {bestScore}</h2>
                </div>
            </nav>
        </>
    );
}

export default Nav;
