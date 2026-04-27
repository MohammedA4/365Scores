import React, { useState } from 'react';
import axios from 'axios';

const TeamDataDelete = () => {
    // State to manage the input for team name
    const [teamName, setTeamName] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        setTeamName(e.target.value);
    };

    // Handle form submission for deleting the team record
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send DELETE request to the API endpoint to delete the team record
            const response = await axios.delete(`/api/deleteData/${teamName}`);
            console.log('Data deleted successfully:', response.data);
            // Clear the input field after deletion
            setTeamName('');
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    return (
        <div>
            <h2>Delete Team Data</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Team Name:
                    <input 
                        type="text" 
                        name="teamName" 
                        placeholder="Enter Team Name to Delete" 
                        value={teamName} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <button type="submit">Delete</button>
            </form>
        </div>
    );
};

export default TeamDataDelete;
