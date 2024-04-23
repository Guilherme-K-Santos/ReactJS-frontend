import '../styles/App.css';
import '../styles/Popup.css';
import Header from './Header';
import Data from './Data';
import Popup from './Popup';
import { useState } from 'react';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [historyData, setHistoryData] = useState(null);

  // Get data from mysql when user press 'show history' button.
  const handleHistoryButton = async () => {
    try {
      const response = await fetch('http://localhost:8080/challenge', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        console.error('Network response was not ok');
        return;
      }

      const responseData = await response.json();

      setHistoryData(responseData);
      setShowPopup(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <Header />

      <div className='App-content'>
        <img src={process.env.PUBLIC_URL + '/React-icon.svg.png'} className="App-central-image" alt="logo" />
        <Data />
        <button className='history-button' onClick={handleHistoryButton}>Show History</button>
        {showPopup && <Popup data={historyData} onClose={handleClosePopup} />}      
      </div>
    </div>
  );
};

export default App;
