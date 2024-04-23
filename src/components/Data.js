import '../styles/Data.css';
import { useState } from 'react';

function Data() {
  const [formData, setFormData] = useState({
    value: '',
  });

  const [submitting, setSubmitting] = useState(false); // State to track form submission

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // sending formData to backend
    setSubmitting(true); // Start submission process

    try {
      // Parse the number to integer.
      const primeToCalc = parseInt(formData.value); 

      // Validations for input.
      if (!primeToCalc) return alert('This is not a valid int number.');
      if (primeToCalc > 1073741827) return alert(
        'I waste on time to implement a way to use `long` type in springboot backend. Because of that, the maximum value calculable is 1073741827 :(. Also, using Python i got 200secs running this same value.'
      );

      const response = await fetch('http://localhost:8080/challenge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ number: primeToCalc })
      });
      
      if (!response.ok) {
        console.error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
    setSubmitting(false); // mark submitting as 'false'.
    }
  };

  return(
    <div className='form'>
      {submitting ? (<p>Calculating...</p>) : ( // Render the form if submitting is false
        <>
          <p>Enter a number.</p>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                name="value"
                value={formData.value}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button type="submit">Calculate</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Data;