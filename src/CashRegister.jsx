import React, { useState } from 'react';
import "./CashRegister.css";

const CashRegister = () => {
  const [register, setRegister] = useState({
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0
  });

  const [inputAddValues, setInputAddValues] = useState({
    20: '',
    10: '',
    5: '',
    2: '',
    1: ''
  });
  
  const [inputRemoveValues, setInputRemoveValues] = useState({
    20: '',
    10: '',
    5: '',
    2: '',
    1: ''
  });

  const [changeAmount, setChangeAmount] = useState('');

  const addMoney = (denomination, count) => {
    setRegister({
      ...register,
      [denomination]: register[denomination] + count
    });
  };

  const removeMoney = (denomination, count) => {
    if (register[denomination] >= count) {
      setRegister({
        ...register,
        [denomination]: register[denomination] - count
      });
    } else {
      console.error('Not enough money in the register');
    }
  };

  const dispenseChange = (amount) => {
    let change = { ...register };
    let denominations = [20, 10, 5, 2, 1];

    for (let i = 0; i < denominations.length; i++) {
      let denom = denominations[i];
      while (amount >= denom && change[denom] > 0) {
        amount -= denom;
        change[denom]--;
      }
    }

    if (amount !== 0) {
      console.error('Change cannot be made');
      return;
    }

    setRegister(change);
  };

  const displayRegister = () => {
    let total = 0;
    for (const denomination in register) {
      total += denomination * register[denomination];
    }

    let displayString = `Total: $${total} | `;
    for (const denomination in register) {
      displayString += `${register[denomination]}x$${denomination} `;
    }

    return displayString;
  };

  return (
    <div>
      <h1>Cash Register</h1>
      <p>{displayRegister()}</p>
      <h2>Add Money</h2>
      {Object.keys(register).map((denomination) => (
        <div key={denomination}>
          <label>
            ${denomination}:
            <input
              type="number"
              min="0"
              value={inputAddValues[denomination]}
              onChange={(e) => setInputAddValues({...inputAddValues, [denomination]: Number(e.target.value)})}
            />
            <button onClick={() => addMoney(denomination, inputAddValues[denomination])}>Add</button>
          </label>
        </div>
      ))}
      <h2>Remove Money</h2>
      {Object.keys(register).map((denomination) => (
        <div key={denomination}>
          <label>
            ${denomination}:
            <input
              type="number"
              min="0"
              value={inputRemoveValues[denomination]}
              onChange={(e) => setInputRemoveValues({...inputRemoveValues, [denomination]: Number(e.target.value)})}
            />
            <button onClick={() => removeMoney(denomination, inputRemoveValues[denomination])}>Remove</button>
          </label>
        </div>
      ))}
      <h2>Dispense Change</h2>
      <label>
        Amount:
        <input
          type="number"
          min="0"
          value={changeAmount}
          onChange={(e) => setChangeAmount(Number(e.target.value))}
        />
        <button onClick={() => dispenseChange(changeAmount)}>Dispense</button>
      </label>
    </div>
  );
};

export default CashRegister;
