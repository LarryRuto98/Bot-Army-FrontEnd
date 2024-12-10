import React, { useEffect, useState } from 'react';
import BotCard from './BotCard';
import './BotList.css';

function BotList({ addBotToArmy, viewBotDetails }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <div key={bot.id} className="bot-item">
          <BotCard bot={bot} onClick={addBotToArmy} />
          <button onClick={() => viewBotDetails(bot.id)}>View Details</button>
        </div>
      ))}
    </div>
  );
}

export default BotList;
