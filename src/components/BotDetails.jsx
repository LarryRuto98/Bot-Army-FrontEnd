import React from 'react';
import './BotDetails.css'

function BotDetails({ bot }) {
  return (
    <div className="bot-details">
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name}/>
      <div className="bot-stats">
        <p><strong>Health:</strong> {bot.health}</p>
        <p><strong>Damage:</strong> {bot.damage}</p>
        <p><strong>Armor:</strong> {bot.armor}</p>
        <p><strong>Class:</strong> {bot.bot_class}</p>
        <p><strong>Catchphrase</strong>{bot.catchphrase}</p>
      </div>
      
    </div>
  );
}

export default BotDetails;
