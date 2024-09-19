import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ResultsBox = ({pay, bonus, total, setTotal}) => {

  const totalPay = () => {
    const allPayTotal = (parseFloat(pay) + parseFloat(bonus));
    setTotal(allPayTotal.toFixed(2));
  }

  return(
    <>
    <Box
      className="smallBox"
      sx={{
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 250,
        width: 500,
        bhcolor: 'background.paper',
        borderColor: 'gray'
      }}>

      <Typography variant="h5"
        sx={{ color: 'gray' }}
      >
        Base Pay: {'$' + parseFloat(pay).toFixed(2)}
      </Typography>

      <Typography variant="h5"
        sx={{ color: 'gray', marginBottom: '20px' }}
      >
        Bonus Pay: {'$' + parseFloat(bonus).toFixed(2)}
      </Typography>

      <Typography variant="h4"
        sx={{ color: 'gray' }}
      >
        Total Pay: {'$' + parseFloat(total).toFixed(2)}
      </Typography>
    </Box>
    <Button sx={{
      marginBottom: '10px',
      width: '250px' }}
      variant="contained" onClick={totalPay}>Get Total Pay</Button>
    </>
  );
}

export default ResultsBox;