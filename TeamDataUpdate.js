import React, { useState } from 'react';
import axios from 'axios';

const TeamDataUpdate = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    gamesPlayed: '',
    wins: '',
    draws: '',
    losses: '',
    goalsFor: '',
    goalsAgainst: '',
    points: '',
    year: ''
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/teams', formData);
      console.log('Updated data:', response.data);
      setSuccess('Data updated successfully!');
      setError(null);
      setFormData({
        teamName: '',
        gamesPlayed: '',
        wins: '',
        draws: '',
        losses: '',
        goalsFor: '',
        goalsAgainst: '',
        points: '',
        year: ''
      });
    } catch (error) {
      console.error('Error updating data:', error);
      setError('Error updating data. Please try again.');
      setSuccess(null);
    }
  };

  return (
    <div>
      <h2>Update Team Data</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Team Name:
          <input
            type="text"
            name="teamName"
            placeholder="Team Name"
            value={formData.teamName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Games Played:
          <input
            type="number"
            name="gamesPlayed"
            placeholder="Games Played"
            value={formData.gamesPlayed}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Wins:
          <input
            type="number"
            name="wins"
            placeholder="Wins"
            value={formData.wins}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Draws:
          <input
            type="number"
            name="draws"
            placeholder="Draws"
            value={formData.draws}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Losses:
          <input
            type="number"
            name="losses"
            placeholder="Losses"
            value={formData.losses}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Goals For:
          <input
            type="number"
            name="goalsFor"
            placeholder="Goals For"
            value={formData.goalsFor}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Goals Against:
          <input
            type="number"
            name="goalsAgainst"
            placeholder="Goals Against"
            value={formData.goalsAgainst}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Points:
          <input
            type="number"
            name="points"
            placeholder="Points"
            value={formData.points}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Year:
          <input
            type="number"
            name="year"
            placeholder="Year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default TeamDataUpdate;