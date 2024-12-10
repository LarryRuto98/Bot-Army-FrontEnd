import React from 'react';
import './BotCard.css';

function BotCard({ bot, onClick, isInArmy, onRemove }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
      <h2>{bot.name}</h2>
      <p>{bot.bot_class}</p>
      {isInArmy ? (
        <button className="release-btn" onClick={() => onRemove(bot.id)}>
          Release from Army
        </button>
      ) : (
        <button className="add-btn" onClick={() => onClick(bot.id)}>
          Add to Army
        </button>
      )}
    </div>
  );
}

export default BotCard;