import React, { useState } from 'react';

const TeamDataForm = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    // Placeholder = this is used to add text to the boxes when there are no values inserted
    // 
    <div>
      <h2>Add Team Data</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Team Name:
          <input type="text" name="teamName" value={formData.teamName} placeholder="Team Name" onChange={handleChange} required />
        </label>

        <label>
          Games Played:
          <input type="number" name="gamesPlayed" value={formData.gamesPlayed} placeholder="Games Played" onChange={handleChange} required />
        </label>

        <label>
        Win:
        <input type="number" name="wins" value={formData.wins} placeholder="Win" onChange={handleChange} required />
        </label>

        <label>
        Draw:
        <input type="number" name="draws" value={formData.draws} placeholder="Draw" onChange={handleChange} required />
        </label>

        <label>
        Loss:
        <input type="number" name="losses" value={formData.losses} placeholder="Loss" onChange={handleChange} required />
        </label>

        <label>
        Goals For:
        <input type="number" name="Goals For" value={formData.goalsFor} placeholder="Goals For" onChange={handleChange} required />
        </label>

        <label>
            Goals Against:
            <input type="number" name="Goals Against" value={formData.goalsAgainst} placeholder="Goals Against" onChange={handleChange} required />
        </label>

        <label>
            Points:
            <input type="number" name="points" value={formData.points} placeholder="Current Points" onChange={handleChange} required />
        </label>

        <label>
            Year:
            <input type="number" name="year" value={formData.year} placeholder="Active Years" onChange={handleChange} required />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );

  
};

export default TeamDataForm;
