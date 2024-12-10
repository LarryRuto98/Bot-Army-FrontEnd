import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ botsInArmy, removeBotFromArmy, dischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {botsInArmy.map((bot) => (
        <div key={bot.id}>
          <BotCard
            bot={bot}
            isInArmy={true}
            onRemove={removeBotFromArmy}
            onClick={dischargeBot}
          />
          <button onClick={() => dischargeBot(bot.id)}>Discharge</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;
