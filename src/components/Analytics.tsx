import React, { useState, useEffect } from 'react';
import CountUp from 'countup'; // Make sure to install countup library first

const Analytics: React.FC = () => {
  const [cardOpen, setCardOpen] = useState(false);

  const cardData = {
    countUp: function(target: HTMLElement | null, startVal: number, endVal: number, decimals: number, duration: number) {
      if (target) {
        const countUp = new CountUp(target, startVal || 0, endVal, decimals || 0, duration || 2, { prefix: "$" });
        countUp.start();
      }
    },
    sessions: [
      {
        "label": "Phone",
        "size": 80,
        "c": 25705.2,
        "color": "green-500"
      },
      {
        "label": "Tablet",
        "size": 40,
        "c": 12852.6,
        "color": "green-400"
      },
      {
        "label": "Desktop",
        "size": 15,
        "c": 3427.36,
        "color": "green-300"
      },
      {
        "label": "Other",
        "size": 2,
        "c": 856.84,
        "color": "green-200"
      }
    ]
  };

  useEffect(() => {
    if (cardOpen) {
      cardData.countUp(document.getElementById('total'), 0, 42842, null, 2);
      cardData.sessions.forEach((session, index) => {
        cardData.countUp(document.getElementById(`device${index}`), 0, session.c, null, 1.6);
      });
    }
  }, [cardOpen]);

  const toggleCard = () => {
    setCardOpen(!cardOpen);
  };

  return (
    <div className="w-screen bg-white h-screen flex items-center justify-center px-5 py-5">
      <div className="bg-slate-200 text-black-500 rounded shadow-xl py-5 px-5 w-full sm:w-2/3 md:w-1/2 lg:w-1/3" data-card-open={cardOpen} onClick={toggleCard}>
        <div className="flex w-full">
          <h3 className="text-lg font-semibold leading-tight flex-1">TOTAL INCOME</h3>
          <div className="relative h-5 leading-none">
            <button className="text-xl text-gray-900 hover:text-gray-500 h-6 focus:outline-none">
              <i className={`mdi mdi-chevron-${cardOpen ? 'up' : 'down'}`}></i>
            </button>
          </div>
        </div>
        <div className={`relative overflow-hidden transition-all duration-500 ${cardOpen ? 'card-open' : ''}`}>
          <div>
            <div className="pb-4 lg:pb-6">
              <h4 className="text-2xl lg:text-3xl text-black font-semibold leading-tight inline-block" id="total">0</h4>
            </div>
            <div className="pb-4 lg:pb-6">
              <div className="overflow-hidden rounded-full h-3 bg-slate-50 flex transition-all duration-500">
                {cardData.sessions.map((item, index) => (
                  <div key={index} className={`h-full bg-${item.color}`} style={{ width: `${item.size}%` }}></div>
                ))}
              </div>
            </div>
            <div className="flex -mx-4">
              {cardData.sessions.map((item, index) => (
                <div key={index} className={`w-1/3 px-4 ${index !== 0 ? 'border-l border-gray-700' : ''}`}>
                  <div className="text-sm">
                    <span className={`inline-block w-2 h-2 rounded-full mr-1 align-middle bg-${item.color}`}></span>
                    <span className="align-middle text-gray-500">{item.label}</span>
                  </div>
                  <div className="font-medium text-lg text-black">
                    <span id={`device${index}`}>0</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
