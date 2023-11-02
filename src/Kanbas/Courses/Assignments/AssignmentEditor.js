import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function AssignmentEditor({ assignments, addAssignment, updateAssignment }) {
    const [formState, setFormState] = useState({
        name: '',
        description: '',
        dueDate: '',
        availableFromDate: '',
        availableUntilDate: ''
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id && assignments[id]) {
            setFormState(assignments[id]);
        }
    }, [id, assignments]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            if (id) {
                await updateAssignment({ ...formState, _id: id });
            } else {
                await addAssignment(formState);
            }
            navigate('/assignments');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>{id ? 'Edit Assignment' : 'Create Assignment'}</h2>

            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={formState.description}
                        onChange={handleInputChange}
                    ></textarea>
                </label>
            </div>

            <div>
                <label>
                    Due Date:
                    <input
                        type="date"
                        name="dueDate"
                        value={formState.dueDate}
                        onChange={handleInputChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    Available From:
                    <input
                        type="date"
                        name="availableFromDate"
                        value={formState.availableFromDate}
                        onChange={handleInputChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    Available Until:
                    <input
                        type="date"
                        name="availableUntilDate"
                        value={formState.availableUntilDate}
                        onChange={handleInputChange}
                    />
                </label>
            </div>

            <button onClick={handleSubmit}>
                Save
            </button>
            <button onClick={() => navigate('/assignments')}>
                Cancel
            </button>
        </div>
    );
}

export default AssignmentEditor;

