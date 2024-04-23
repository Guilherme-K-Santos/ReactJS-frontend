import React from 'react';
import '../styles/Popup.css';

// This class load all data from mysql on the client.
function Popup({data, onClose }) {
  const handleClose = () => {
    onClose();
  };

  return (
      <div className="popup">
        <div className="popup-content">
          <button className="close-button" onClick={handleClose}>X</button>
          <h2>Prime Numbers Stored :p</h2>
          <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Number</th>
              <th>Response</th>
              <th>Seconds</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.number}</td>
                <td>{item.response}</td>
                <td>{item.seconds}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
  );
}

export default Popup;