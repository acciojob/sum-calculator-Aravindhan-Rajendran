import React, { useState, useEffect } from 'react';

function SumCalculator() {
    const [numbers, setNumbers] = useState([]);
    const [sum, setSum] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddNumber = () => {
        const number = parseInt(inputValue, 10);
        if (!isNaN(number)) {
            setNumbers((prevNumbers) => [...prevNumbers, number]);
            setInputValue('');
        } else {
            setInputValue('Please enter a valid number');
        }
    };

    useEffect(() => {
        // Calculate the total sum
        const total = numbers.reduce((acc, num) => acc + num, 0);
        setSum(total);
    }, [numbers]);

    return (
        <div className="calculator-container">
            <h1 className="title">Sum Calculator</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter a number"
                    className="number-input"
                />
                <button onClick={handleAddNumber} className="add-button">
                    Add Number
                </button>
            </div>
            <p className="total-sum">Sum: {sum}</p>
            <ul className="number-list">
                {numbers.map((num, index) => (
                    <li key={index} className="number-item">{num}</li>
                ))}
            </ul>
        </div>
    );
}

export default SumCalculator;
