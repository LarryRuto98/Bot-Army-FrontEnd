import React, { useState } from 'react';
import BotList from './BotList'; 
import Army from './Army';
import BotDetails from './BotDetails';

function App() {
  const [botArmy, setBotArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null); 

  const addBotToArmy = (botId) => {
    const botExists = botArmy.some((bot) => bot.id === botId); 
    if (!botExists) {
      fetch(`https://galactic-bot-army.vercel.app/bots${botId}`)
        .then((response) => response.json())
        .then((data) => {
          setBotArmy((prevArmy) => [...prevArmy, data]); 
        });
    }
  };

  // Function to remove bot from army (frontend only)
  const removeBotFromArmy = (botId) => {
    setBotArmy(botArmy.filter((bot) => bot.id !== botId));
  };

  // Function to discharge bot (remove from both frontend and backend)
  const dischargeBot = (botId) => {
    // Remove the bot from the frontend optimistically
    setBotArmy(botArmy.filter((bot) => bot.id !== botId));

    // Delete the bot from the backend (no error handling)
    fetch(`https://galactic-bot-army.vercel.app/bots${botId}`, { method: 'DELETE' })
      .then(() => {
       
      })
      .catch(() => {
       
      });
  };

 
  const viewBotDetails = (botId) => {
    fetch(`https://galactic-bot-army.vercel.app/bots${botId}`)
      .then((response) => response.json())
      .then((data) => setSelectedBot(data)); 
  };

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      {selectedBot && <BotDetails bot={selectedBot} />}

      <div className="army-section">
        <Army
          botsInArmy={botArmy}
          removeBotFromArmy={removeBotFromArmy}
          dischargeBot={dischargeBot}
        />
      </div>

      <div className="bot-list-section">
        <BotList addBotToArmy={addBotToArmy} viewBotDetails={viewBotDetails} />
      </div>
    </div>
  );
}

export default App;
