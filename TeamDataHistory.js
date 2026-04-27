import React, { useState } from 'react';
import axios from 'axios';

const TeamDataHistory = () => {
    const [teamName, setTeamName] = useState(''); // State for input team name
    const [teamStats, setTeamStats] = useState(null); // State for storing team stats

    // Handle change in input field
    const handleChange = (e) => {
        setTeamName(e.target.value);
    };

    // Handle form submission to fetch team stats
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`/api/teamStats/${teamName}`);
            setTeamStats(response.data);
        } catch (error) {
            console.error('Error fetching team stats:', error);
        }
    };

    return (
        <div>
            <h2>Team Statistics</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Team Name:
                    <input 
                        type="text" 
                        name="teamName" 
                        placeholder="Enter Team Name" 
                        value={teamName} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <button type="submit">Get Stats</button>
            </form>
            {teamStats && (
                <div>
                    <h3>Statistics for {teamStats.team}</h3>
                    <p>Total Games Played: {teamStats.gamesPlayed}</p>
                    <p>Total Wins: {teamStats.win}</p>
                    <p>Total Draws: {teamStats.draw}</p>
                </div>
            )}
        </div>
    );
};

export default TeamDataHistory;


