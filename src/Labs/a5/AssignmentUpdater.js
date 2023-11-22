import React, { useState } from 'react';

function AssignmentUpdater() {
    const [score, setScore] = useState(0); // 0 is the initial value
    const [completed, setCompleted] = useState(false);

    const baseUrl = "http://localhost:8000";

    const handleScoreChange = (e) => {
        setScore(e.target.value);
    };

    const handleCompletedChange = (e) => {
        setCompleted(e.target.checked);
    };

    const updateScore = async () => {
        const response = await fetch(`${baseUrl}/a5/assignment/score/${score}`, { method: 'POST' });
        const data = await response.json();
        console.log(data);
    };

    const updateCompleted = async () => {
        const response = await fetch(`${baseUrl}/a5/assignment/completed/${completed}`, { method: 'POST' });
        const data = await response.json();
        console.log(data);
    };

    return (
        <div>
            <input
                type="number"
                value={score}
                onChange={handleScoreChange}
            />
            <button onClick={updateScore}>Update Score</button>

            <input
                type="checkbox"
                checked={completed}
                onChange={handleCompletedChange}
            />
            <button onClick={updateCompleted}>Update Completed</button>
        </div>
    );
}

export default AssignmentUpdater;