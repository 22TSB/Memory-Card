import Card from './Card.jsx';

function Main({ array, handle }) {
    return (
        <>
            <main>
                {
                    array.map((e) => {
                        return <Card key={e.id} robot={e} handle={handle} />;
                    })
                }
            </main>
        </>
    );
}

export default Main;
