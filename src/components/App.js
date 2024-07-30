import React, { useState, useEffect } from 'react';

function App() {
    const [numbers, setNumbers] = useState([]);
    const [sum, setSum] = useState(0);
    const [inputValue, setInputValue] = useState('');

    // Function to handle input change
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // Function to add number to the list
    const handleAddNumber = () => {
        const number = parseInt(inputValue, 10);
        if (!isNaN(number)) {
            setNumbers((prevNumbers) => [...prevNumbers, number]);
            setInputValue('');
        }
    };

    // Calculate sum asynchronously whenever the numbers array changes
    useEffect(() => {
        const calculateSum = async () => {
            // Simulate asynchronous calculation with a timeout
            await new Promise((resolve) => setTimeout(resolve, 0));
            const total = numbers.reduce((acc, num) => acc + num, 0);
            setSum(total);
        };

        calculateSum();
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
            <h2 className="total-sum">Total Sum: {sum}</h2>
            <ul className="number-list">
                {numbers.map((num, index) => (
                    <li key={index} className="number-item">{num}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
