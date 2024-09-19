import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

/**
 * This component serves to handle the input for
 * each of the different values comprising driver pay.
 * It also handles button clicks to calculate the pay
 * based on the input values.
 * 
 * This is done employing use state and an additional
 * function to send the data back up to the parent
 * OutputBox component.
 */

const InputFields = ({getPay, getBonus}) => {
  const [miles, setMiles] = useState('');
  const [mileRate, setRate] = useState('');
  const [revenue, setRevenue] = useState('');
  const [bonus, setBonus] = useState('');
  const [misc, setMisc] = useState('');
  const [bonusAmount, setBonusAmount] = useState(0);

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

  const totalBonus = () => {
    const bonusTotal = (parseFloat(bonus) / 100) * parseFloat(revenue);
    getBonus(bonusTotal)
  }

  const totalPay = () => {

    const payTotal = (parseFloat(miles) * parseFloat(mileRate / 100) + parseFloat(bonusAmount) + parseFloat(misc));
    getPay(payTotal);
  }

  return (
    <>
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      <h3>Base Pay Criteria</h3>
      <TextField sx={{margin: '5px'}} id="outlined-basic" 
        label="Miles" variant="outlined" value={miles}  onChange={handleMilesChange}/>
      <TextField sx={{margin: '5px'}} id="outlined-basic" 
        label="Mileage Rate" variant="outlined" value={mileRate} onChange={handleRateChange}/>
      <TextField sx={{margin: '5px'}} id="outlined-basic" 
        label="Miscellaneous, i.e. minimum rate, detention, etc." variant="outlined" value={misc} onChange={handleMiscChange}/>
      <Button sx={{
        display: 'flex',
        marginBottom: '10px',
        width: '250px'
      }} variant="contained" onClick={totalPay}>Calculate Total Pay</Button>
    </Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      <h3>Bonus Details (Optional)</h3>
      <TextField sx={{margin: '5px'}} id="outlined-basic" label="Revenue" variant="outlined" value={revenue} onChange={handleRevChange}/>
      <TextField sx={{margin: '5px'}} id="outlined-basic" label="Bonus" variant="outlined" value={bonus} onChange={handleBonusChange}/>
      <Button sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
        width: '250px'
      }}
      variant="contained" onClick={totalBonus}>Calculate Bonus</Button>
    </Box>
    </>
  );
}

export default InputFields;