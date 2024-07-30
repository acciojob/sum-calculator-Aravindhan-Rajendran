import React, { useState, useEffect } from 'react';

function SumCalculator() {
    const [numbers, setNumbers] = useState([]);
    const [sum, setSum] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    // Handle input change
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setError(''); // Clear error when user starts typing
    };

    // Add number to the list
    const handleAddNumber = () => {
        const number = parseInt(inputValue, 10);
        if (!isNaN(number)) {
            setNumbers((prevNumbers) => [...prevNumbers, number]);
            setInputValue('');
        } else {
            setError('Please enter a valid number');
        }
    };

useEffect(() => {
    // Create a Promise to simulate asynchronous behavior
    const promise = new Promise((resolve) => {
        // Calculate the total sum
        const total = numbers.reduce((acc, num) => acc + num, 0);
        resolve(total);
    });

    // Update the sum when the Promise resolves
    promise.then(total => setSum(total));
}, [numbers]);
    return (
        <div className="calculator-container">
            <h1 className="title">Sum Calculator</h1>
            <div className="input-container">
                <input
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter a number"
                    className="number-input"
                />
                <button onClick={handleAddNumber} className="add-button">
                    Add Number
                </button>
            </div>
            {error && <p className="error-message">{error}</p>}
            <p className="total-sum">Total Sum: {sum}</p>
            <ul className="number-list">
                {numbers.map((num, index) => (
                    <li key={index} className="number-item">{num}</li>
                ))}
            </ul>
        </div>
    );
}

export default SumCalculator;
