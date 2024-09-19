import { useState } from 'react';

const Calculator = () => {
  const [miles, setMiles] = useState('');
  const [mileRate, setRate] = useState('');
  const [revenue, setRevenue] = useState('');
  const [bonus, setBonus] = useState('');
  const [misc, setMisc] = useState('');
  const [bonusAmount, setBonusAmount] = useState(0);
  const [totalPay, setTotalPay] = useState(0);

  const handleMilesChange = (e) => {
    setMiles(e.target.value);
  }
  const handleRateChange = (e) => {
    setRate(e.target.value);
  }
  const handleRevChange = (e) => {
    setRevenue(e.target.value);
  }
  const handleBonusChange = (e) => {
    setBonus(e.target.value);
  }
  const handleMiscChange = (e) => {
    setMisc(e.target.value);
  }

  const calculateBonus = () => {
    setBonusAmount((bonus * .01) * revenue);
  }

  const calculateTotalPay = () => {
    setTotalPay((miles * mileRate) / 100 + bonusAmount + misc);
  }
  return calculateTotalPay()
}

export default Calculator;