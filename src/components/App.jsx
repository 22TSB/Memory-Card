import Nav from './Nav.jsx';
import Main from './Main.jsx';
import { useState } from 'react';
import { robots, shuffle, isChecked } from '../js/script.js';

function App() {
    const [checked, setChecked] = useState(isChecked);
    const [array, setArray] = useState(robots);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const handleChange = (e) => {
        const idx = e.target.attributes.value.value;
        const arr = checked;
        if (arr[idx - 1]) {
            score > bestScore && setBestScore(score);
            setScore(0);
            const new_array = [];
            for (let i = 1; i <= array.length; ++i) {
                new_array.push(false);
            }
            setChecked(new_array);
        }
        else {
            setScore(score + 1);
            score >= bestScore && setBestScore(score + 1);
            arr[idx - 1] = true;
            setChecked(arr);
        }
        const new_array = shuffle(array);
        setArray(new_array);
    };

    return (
        <>
            <Nav score={score} bestScore={bestScore} />
            <Main array={array} handle={handleChange} />
        </>
    );
}

export default App;
