import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const ResultsBox = ({pay, bonus}) => {

  return (
  
    <Box 
      className="smallBox"
      sx={{
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: 250,
        width: 500,
        bhcolor: 'background.paper',
        borderColor: 'gray'
      }}
    >

      <Typography variant="subtitle1"
        sx={{ color: 'gray', marginBottom: '10px' }}
      >
        total pay: {pay}
      </Typography>

      <Typography variant="subtitle1"
        sx={{ color: 'gray', marginBottom: '10px' }}
      >
        bonus: {bonus}
      </Typography>
    </Box>
  );
}

export default ResultsBox;