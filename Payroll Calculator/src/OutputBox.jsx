import { useState } from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import InputFields from './InputFields';
import ResultsBox from './ResultsBox';

/**
 * The OutputBox serves as the primary display
 * for all data in the app. It contains the 
 * heading and instructions, as well as the InputFields 
 * and ResultsBox components. Via prop drilling it sends
 * the payData and bonusData values down to ResultsBox
 * after receiving them from the function that gathers
 * the values from InputFields.
 */

const OutputBox = () => {

  const [payData, setPayData] = useState(0);
  const getBasePay = (amount) => {
    setPayData(amount);
  };

  const [bonusData, setBonusData] = useState(0);
  const getBonus = (amount) => {
    setBonusData(amount);
  };

  const [totalData, setTotalData] = useState(0);
  const getTotal = (amount) => {
    setTotalData(amount);
  };

  return (
    <>
    <Box>
        <Typography variant="body" 
        sx={{ color: 'gray', marginBottom: '10px' }}>
        Trucking Company, Inc | 
        Driver Payroll Calculator
      </Typography>
    </Box>

    <Box className="Box"
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        bgcolor: 'light-gray',
        borderRadius: '8px',
        m: 1,
        width: 500,
        height: 500 }}
      noValidate
      autoComplete="off">

      <Typography variant="body" sx={{ color: 'gray' }}>
        Enter data in fields below
      </Typography>

      <Typography variant="body"
        sx={{ color: 'gray', marginBottom: '10px' }}
      >
        to calculate driver pay.
      </Typography>

      <Typography variant="subtitle1"
        sx={{ color: 'gray', marginBottom: '10px' }}
      >
        
      </Typography>

      <InputFields
        getPay={getBasePay}
        getBonus={getBonus}
      />
    </Box>

      <ResultsBox
        pay={payData}
        bonus={bonusData}
        total={totalData}
        setTotal={getTotal}
      />
    </>
  );
}

export default OutputBox;